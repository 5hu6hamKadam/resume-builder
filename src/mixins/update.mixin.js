export default {
  data: () => {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, {
      once: true,
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    updateAvailable(event) {
      if (event) {
        this.registration = event.detail;
        this.updateExist = true;
        this.$confirm.require({
          message: this.$t('updatePrompt.description'),
          header: this.$t('updatePrompt.title'),
          icon: 'pi pi-exclamation-triangle',
          accept: this.refreshApp,
        });
      }
    },
    refreshApp() {
      this.updateExist = false;
      if (!this.registration) {
        this.$log.info('returning');
        return;
      }
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  },
};
