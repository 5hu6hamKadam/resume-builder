<template>
  <article class="create-resume-container p-grid p-px-md-6 p-px-3">
    <Dialog
      header="Header "
      :visible.sync="isDialog"
      :style="{ width: '50vw' }"
    >
      <p class="p-m-0">
        {{ dialog.content }}
      </p>
      <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="clearDialog" autofocus />
      </template>
    </Dialog>
    <header class="p-col-12">
      <router-link :to="{ name: 'Home' }">
        <h3>{{ APP_NAME }}</h3></router-link
      >
    </header>
    <section
      class="p-col-12 p-md-8 p-offset-0 p-lg-offset-2 p-lg-8 p-md-10 p-md-offset-1"
    >
      <Steps :model="items" :readonly="false" class="p-mb-4 steps-container" />
      <router-view
        v-slot="{ Component }"
        :formData="formObject"
        @prev-page="prevPage($event)"
        @next-page="nextPage($event)"
        @complete="complete"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </section>
  </article>
</template>
<script>
import { APP_NAME } from '@/constants';
import Steps from 'primevue/steps';
import Dialog from 'primevue/dialog';
import { CLEAR_DIALOG } from '@/store/mutation.type.js';
import { mapMutations, mapState } from 'vuex';
export default {
  components: { Steps, Dialog },
  computed: {
    ...mapState(['dialog']),
    isDialog: {
      get: function() {
        this.$log.info(
          'CreateResume | get isDialog with content as',
          this.dialog.content
        );
        return this.dialog.content !== '';
      },
      set: function(val) {
        this.$log.info('CreateResume | set isDialog with val', val);
        if (!val) {
          this.clearDialog();
        }
      },
    },
  },
  data() {
    return {
      APP_NAME,
      formObject: {},
      items: [
        {
          label: 'Personal',
          to: '/create',
        },
        {
          label: 'Experiences',
          to: '/create/experiences',
        },
        {
          label: 'Template',
          to: '/create/personal-details',
        },
      ],
    };
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      this.$toast.add({
        severity: 'success',
        summary: 'Order submitted',
        detail:
          'Dear, ' +
          this.formObject.firstname +
          ' ' +
          this.formObject.lastname +
          ' your order completed.',
      });
    },
    ...mapMutations([CLEAR_DIALOG]),
  },
};
</script>
<style lang="scss">
.p-steps-item {
  .p-menuitem-link {
    display: flex;
    flex-direction: column !important;
    .p-steps-title {
      padding-left: 0px !important;
    }
  }
}
</style>
