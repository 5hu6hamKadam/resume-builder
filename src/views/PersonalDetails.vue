<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12">
      <AccordionWrapper
        @save="onSave()"
        iconClass="fa fa-user p-mr-2"
        title="Personal Details"
      >
        <FormBuilder :schema="FORM_SCHEMA" v-model="formData" />
      </AccordionWrapper>
    </div>
  </div>
</template>
<script>
import AccordionWrapper from '@/components/AccordionWrapper.vue';
import FormBuilder from '@/components/FormBuilder.vue';
import { FORM_SCHEMA } from '@/constants';
export default {
  data() {
    return {
      formData: {},
      formats: ['bold', 'italic', 'underline'],
      FORM_SCHEMA,
    };
  },
  components: {
    FormBuilder,
    AccordionWrapper,
  },
  methods: {
    onSave() {
      this.$log.info('PersonalDetails | formData', this.formData);
    },
  },
};
</script>
