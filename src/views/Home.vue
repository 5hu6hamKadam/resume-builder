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
          {{ navItem.title }}
        </router-link>
      </div>
    </Sidebar>

    <div class="p-col-fixed p-mr-auto">
      <div class="p-d-flex p-ai-center">
        <Button
          icon="pi pi-bars"
          @click="isSidebar = true"
          class="p-button-rounded p-button-text p-d-block p-d-lg-none"
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
      {{ navItem.title }}
    </router-link>
    <div class="p-col-fixed locale-container">
      <Dropdown
        v-model="$i18n.locale"
        :options="countries"
        optionLabel="name"
        optionValue="value"
        selected="en"
        class="p-p-1"
      />
    </div>
    <article class="p-col-12 p-text-center p-my-4">
      <h1>{{ $t('heroTitle') }}</h1>
      <p>
        Create your very own professional Resume and download it within 15
        minutes.
      </p>
      <router-link :to="{ path: 'create' }">
        <Button label="Create your resume" />
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
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </template>
    </Card>
    <section class="p-col-12 p-text-center">
      <h1>What do our users say about CVmaker?</h1>
      <p>They all found their dream job, thanks to CVmaker:</p>
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
                  {{ testimony.description }}
                </p>
                <div class="p-col-12">
                  <div class="p-d-flex p-ai-baseline">
                    <h3 class="p-mr-1">Function</h3>
                    <p>{{ testimony.function }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-text-center">
      <p>Users of CVmaker are hired at top companies such as</p>
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
      <h1 class="p-mt-6">Increase your chances of a job considerably</h1>
      <p>
        With CV maker, you can quickly and easily create a distinctive and
        professional resume within 15 minutes.
      </p>
      <router-link :to="{ path: 'create' }">
        <Button class="p-mb-6" label="Create your Resume" />
      </router-link>
    </section>
    <section class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-py-6">
      <h1>CV (Curriculum Vitae)</h1>
      <p>Information, Frequently Asked Questions, and Tips on Your resume.</p>
    </section>
    <section
      class="p-col-12 p-md-8 p-offset-0 p-md-offset-2 p-py-3"
      v-for="(faq, index) of FAQ_LIST"
      :key="`faq-${index}`"
    >
      <Card>
        <template #content>
          <h1>{{ faq.question }}</h1>
          <p>{{ faq.answer }}</p>
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
export default {
  name: 'Home',
  components: { Button, Card, Avatar, Rating, Sidebar, Dropdown },
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
};
</script>
<style lang="scss">
.locale-container {
  .p-dropdown-label {
    padding: 0.2rem !important;
  }
  .p-dropdown-item {
    padding: 0.5em !important;
  }
}
</style>
