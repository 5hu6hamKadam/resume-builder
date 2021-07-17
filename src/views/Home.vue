<template>
  <div class="home p-grid p-ai-center p-px-md-6 p-px-3">
    <Sidebar :visible.sync="isSidebar" :baseZIndex="1000">
      <div class="p-grid">
        <router-link
          class="p-col-12"
          v-for="(navItem, index) of NAV_LIST"
          :key="`navItem-${index}`"
          :to="{ name: navItem.path }"
        >
          {{ $t(`navLinks.${navItem.title}`) }}
        </router-link>
      </div>
    </Sidebar>

    <div class="p-col-fixed p-mr-auto">
      <div class="p-d-flex p-ai-center">
        <Button
          icon="pi pi-bars"
          @click="isSidebar = true"
          class="p-button-rounded p-button-text p-d-block p-d-lg-none"
          role="menubar"
          aria-label="Menu Button"
        />
        <h3 class="cursor-pointer">{{ APP_NAME }}</h3>
      </div>
    </div>
    <router-link
      class="p-col-fixed p-d-lg-block p-d-none"
      v-for="(navItem, index) of NAV_LIST"
      :key="`navItem-${index}`"
      :to="{ name: navItem.path }"
    >
      {{ $t(`navLinks.${navItem.title}`) }}
    </router-link>
    <div class="p-col-fixed">
      <InputSwitch v-model="isDark" @change="onThemeChange(isDark)" />
    </div>
    <div class="p-col-fixed locale-container">
      <Dropdown
        v-model="$i18n.locale"
        :options="countries"
        optionLabel="name"
        optionValue="value"
        selected="en"
        class="p-p-1"
        aria-label="languages"
        role="combobox"
      />
    </div>
    <article class="p-col-12 p-text-center p-my-4">
      <h1>{{ $t('home.heroTitle') }}</h1>
      <p>
        {{ $t('home.heroSubtitle') }}
      </p>
      <router-link :to="{ path: 'create' }">
        <Button :label="$t('home.heroBtn')" />
      </router-link>
    </article>
    <Card
      class="feature-container p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-my-2 p-shadow-9"
      v-for="(feature, index) of FEATURE_LIST"
      :key="`feature-${index}`"
    >
      <template #content>
        <div class="p-grid p-ai-center p-jc-center">
          <div class="p-col-fixed">
            <img
              :src="feature.icon"
              alt="Feature icon"
              height="80"
              width="80"
            />
          </div>
          <div class="p-md-10 p-sm-12 p-mx-md-2">
            <h2>{{ $t(`features.${feature.title}`) }}</h2>
            <p>{{ $t(`features.${feature.description}`) }}</p>
          </div>
        </div>
      </template>
    </Card>
    <section class="p-col-12 p-text-center">
      <h1>{{ $t('testimony.title') }}</h1>
      <p>{{ $t('testimony.subtitle') }}</p>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2">
      <div class="p-grid p-jc-around">
        <div
          class="p-md-4 p-col-12"
          v-for="(testimony, index) of TESTIMONY_LIST"
          :key="`testimony-${index}`"
        >
          <Card>
            <template #content>
              <div class="p-grid">
                <div class="p-col-fixed p-as-center">
                  <Avatar
                    :image="testimony.avatar"
                    size="xlarge"
                    shape="circle"
                  />
                </div>
                <div class="p-col">
                  <h4 class="p-my-2">
                    {{ testimony.name }}
                  </h4>
                  <Rating
                    v-model="testimony.rating"
                    :readonly="true"
                    :cancel="false"
                  />
                </div>
                <p class="p-col-12">
                  {{ $t(`testimonyList.${testimony.description}`) }}
                </p>
                <div class="p-col-12">
                  <div class="p-d-flex p-ai-baseline">
                    <h3 class="p-mr-1">Function</h3>
                    <p>{{ $t(`testimonyList.${testimony.function}`) }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-text-center">
      <p>{{ $t(`companyTitle`) }}</p>
      <div class="p-d-flex p-jc-center">
        <img
          v-for="(company, index) of COMPANY_LIST"
          :key="`company-item-${index}`"
          :src="company"
          alt="Company Icon"
          height="20"
          class="p-mx-4"
        />
      </div>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-py-6">
      <h1 class="p-mt-6">{{ $t('info.title') }}</h1>
      <p>
        {{ $t('info.description') }}
      </p>
      <router-link :to="{ path: 'create' }">
        <Button class="p-mb-6" :label="$t('home.heroBtn')" />
      </router-link>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-py-6">
      <h1>{{ $t('faq.title') }}</h1>
      <p>{{ $t('faq.subtitle') }}</p>
    </section>
    <section
      class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-py-3"
      v-for="(faq, index) of FAQ_LIST"
      :key="`faq-${index}`"
    >
      <Card>
        <template #content>
          <h1>{{ $t(faq.question) }}</h1>
          <p>{{ $t(faq.answer) }}</p>
        </template>
      </Card>
    </section>
  </div>
</template>

<script>
import {
  APP_NAME,
  NAV_LIST,
  FEATURE_LIST,
  TESTIMONY_LIST,
  COMPANY_LIST,
  FAQ_LIST,
} from '@/constants';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Rating from 'primevue/rating';
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import { SET_THEME } from '@/store/mutation.type';
export default {
  name: 'Home',
  components: { Button, Card, Avatar, Rating, Sidebar, Dropdown, InputSwitch },
  computed: {
    isDark: {
      get() {
        return this.$store.state.theme.isDark;
      },
      set(value) {
        this.$log.info('setting isDark as', value);
        this.$store.commit(SET_THEME, value);
      },
    },
  },
  data() {
    return {
      APP_NAME,
      NAV_LIST,
      FEATURE_LIST,
      TESTIMONY_LIST,
      COMPANY_LIST,
      FAQ_LIST,
      isSidebar: false,
      countries: [
        { name: 'English', value: 'en' },
        { name: 'French', value: 'fr' },
      ],
      locale: '',
    };
  },
  created() {
    this.onThemeChange(this.isDark);
  },
  methods: {
    onThemeChange(event) {
      this.$log.info('Home | entering with event', event);
      let themeElement = document.getElementById('theme-link');
      this.$log.info('themeElement', themeElement);
      themeElement.setAttribute(
        'href',
        event
          ? 'themes/md-dark-indigo/theme.css'
          : 'themes/md-light-indigo/theme.css'
      );
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .locale-container {
  .p-dropdown-label {
    padding: 0.2rem !important;
  }
  .p-dropdown-item {
    padding: 0.5em !important;
  }
}
</style>
