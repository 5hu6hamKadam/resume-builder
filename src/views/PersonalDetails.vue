<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12">
      <AccordionWrapper
        @save="onSave($event)"
        iconClass="fa fa-user p-mr-2"
        title="Personal Details"
        name="personalDetails"
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
import { SAVE_FORM } from '@/store/mutation.type';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      formData: this.$store.state.resume.personalDetails || {},
      formats: ['bold', 'italic', 'underline'],
      FORM_SCHEMA,
    };
  },
  components: {
    FormBuilder,
    AccordionWrapper,
  },
  methods: {
    onSave(name) {
      this.$log.info(
        'PersonalDetails | Entering with formData and name',
        this.formData,
        name
      );
      this.saveForm({ formData: this.formData, name });
    },
    ...mapMutations([SAVE_FORM]),
  },
};
</script>
