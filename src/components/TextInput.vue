<template>
  <div :class="['p-field', containerClass]">
    <label :for="id" :class="labelClass">{{ label }}</label>
    <InputText
      :id="id"
      type="text"
      :class="formControlClass"
      v-model="valueData"
      :placeholder="placeholder"
      @input="updateText(valueData)"
    />
    <small
      v-if="errorText"
      :id="`${id}-help`"
      :class="['p-error', errorClass]"
      >{{ errorText }}</small
    >
  </div>
</template>
<script>
import InputText from 'primevue/inputtext';
export default {
  name: 'TextInput',
  props: [
    'placeholder',
    'label',
    'fieldClass',
    'labelClass',
    'formControlClass',
    'id',
    'errorText',
    'errorClass',
    'value',
    'containerClass',
  ],
  data() {
    return {
      valueData: this.value,
    };
  },
  components: {
    InputText,
  },
  methods: {
    updateText(event) {
      this.$log.info('TextInput | Entering with event', event);
      this.$emit('input', event);
    },
  },
};
</script>
