<template>
  <Accordion :multiple="true" class="p-my-3" :activeIndex="0">
    <AccordionTab>
      <template #header>
        <em :class="iconClass"></em>
        <span>{{ title }}</span>
      </template>
      <div class="p-grid">
        <div class="p-col-12 p-py-3">
          <slot></slot>
        </div>
        <div class="p-col-12">
          <div class="p-d-flex">
            <Button
              label="Tips"
              icon="fa fa-lightbulb-o"
              class="p-button-outlined p-mr-auto"
            />
            <Button
              v-if="isAdd"
              label="Add"
              icon="fa fa-plus"
              class="p-mx-1"
              @click="onAdd()"
            />
            <Button label="Save" icon="pi pi-save" @click="onSave()" />
          </div>
        </div>
      </div>
    </AccordionTab>
  </Accordion>
</template>
<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default {
  props: ['title', 'iconClass', 'name', 'isAdd'],
  components: {
    Accordion,
    AccordionTab,
  },
  methods: {
    onSave() {
      this.$log.info('AccordionWrapper | Entering');
      this.$emit('save', this.name);
    },
    onAdd() {
      this.$log.info('AccordionWrapper | Entering');
      this.$emit('add', this.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.p-fluid {
  .p-button {
    width: unset;
  }
}
</style>
