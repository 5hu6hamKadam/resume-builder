<template>
  <div :class="['p-field', containerClass]">
    <label :for="id" :class="labelClass">{{ label }}</label>
    <Dropdown
      v-model="selectedData"
      :options="options"
      optionLabel="label"
      optionValue="value"
      :placeholder="placeholder"
      :value="value"
      @change="updateData"
    />
  </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';

export default {
  name: 'DropdownInput',
  props: [
    'containerClass',
    'label',
    'labelClass',
    'id',
    'options',
    'placeholder',
    'optionsLabel',
    'value',
  ],
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedData: this.value || null,
    };
  },
  methods: {
    updateData() {
      this.$log.info('DropdownInput | Entering with', this.selectedData);
      this.$emit('input', this.selectedData);
    },
  },
};
</script>
