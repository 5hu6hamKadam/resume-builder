<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12">
      <AccordionWrapper
        @save="onSave()"
        :iconClass="formComp.iconClass"
        :title="formComp.title"
        v-for="(formComp, index) of FORM_EXPERIENCE_SCHEMA"
        :key="`formComp-${index}`"
      >
        <FormBuilder :schema="formComp.schemas" v-model="formData" />
      </AccordionWrapper>
    </div>
  </div>
</template>
<script>
import AccordionWrapper from '@/components/AccordionWrapper.vue';
import FormBuilder from '@/components/FormBuilder.vue';
import { FORM_EXPERIENCE_SCHEMA } from '@/constants';
export default {
  data() {
    return {
      formData: [],
      formats: ['bold', 'italic', 'underline'],
      FORM_EXPERIENCE_SCHEMA,
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
