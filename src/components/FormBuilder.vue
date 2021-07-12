<template>
  <div class="form-builder-container p-grid">
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      v-model="formData[field.name]"
      @input="updateForm(field.name, $event)"
      v-bind="field"
    >
    </component>
  </div>
</template>
<script>
import TextInput from '@/components/TextInput.vue';
import EditorInput from '@/components/EditorInput.vue';
import DropdownInput from '@/components/DropdownInput.vue';
import ChipsInput from '@/components/ChipsInput.vue';
import FileUploader from '@/components/FileUploader.vue';
export default {
  props: ['schema', 'value'],
  components: {
    TextInput,
    EditorInput,
    DropdownInput,
    ChipsInput,
    FileUploader,
  },
  data() {
    return {
      formData: this.value || {},
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$log.info('Entering with fieldName and value as', fieldName, value);
      this.$set(this.formData, fieldName, value);
      this.$emit('input', this.formData);
    },
  },
};
</script>
