<template>
  <div :class="['p-field', containerClass]">
    <label :for="id" :class="labelClass">{{ label }}</label>
    <Chips
      v-model="valueData"
      separator=","
      @add="updateData(valueData)"
      @remove="updateData(valueData)"
    />
  </div>
</template>
<script>
import Chips from 'primevue/chips';
export default {
  name: 'ChipsInput',
  components: {
    Chips,
  },
  props: ['value', 'labelClass', 'id', 'containerClass', 'label'],
  data() {
    return {
      valueData: this.value,
    };
  },
  methods: {
    updateData(value) {
      this.$log.info('ChipsInput | Entering with', value);
      this.$emit('input', value);
    },
  },
};
</script>
