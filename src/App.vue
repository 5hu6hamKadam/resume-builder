<template>
  <div id="app">
    <ConfirmDialog />
    <router-view />
  </div>
</template>
<script>
import ConfirmDialog from 'primevue/confirmdialog';
import update from '@/mixins/update.mixin';
export default {
  components: {
    ConfirmDialog,
  },
  mixins: [update],
};
</script>
<style lang="scss">
@import './resources/reset';
@import './resources/misc';
</style>
