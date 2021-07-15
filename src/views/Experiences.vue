<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12">
      <AccordionWrapper
        @save="onSave($event)"
        @add="onAdd($event)"
        :iconClass="formComp.iconClass"
        :title="formComp.title"
        v-for="(formComp, index) of FORM_EXPERIENCE_SCHEMA"
        :key="`formComp-${index}`"
        :isAdd="formComp.isAdd"
        :name="formComp.name"
      >
        <FormBuilder
          :schema="formComp.schemas"
          v-model="formData[formComp.name]"
        />
      </AccordionWrapper>
      <div class="p-d-flex">
        <router-link to="/create">
          <Button
            class="w-auto p-mr-1"
            label="Back"
            icon="pi pi-arrow-circle-left"
          />
        </router-link>
        <router-link to="/create/templates">
          <Button class="w-auto" label="Next" icon="pi pi-arrow-circle-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import AccordionWrapper from '@/components/AccordionWrapper.vue';
import FormBuilder from '@/components/FormBuilder.vue';
import { FORM_EXPERIENCE_SCHEMA } from '@/constants';
import { SAVE_FORM, ADD_FORM } from '@/store/mutation.type.js';
import { mapMutations } from 'vuex';
export default {
  name: 'Experiences',
  data() {
    this.$log.info('Experiences | resume state', this.$store.state.resume);
    return {
      formData: this.$store.state.resume || {},
      formats: ['bold', 'italic', 'underline'],
      FORM_EXPERIENCE_SCHEMA,
    };
  },
  components: {
    FormBuilder,
    AccordionWrapper,
  },
  methods: {
    onSave(name) {
      this.$log.info(
        'PersonalDetails | Entering formData and name as',
        this.formData,
        name
      );
      this.saveForm({ formData: this.formData[name], name });
    },
    onAdd(name) {
      this.$log.info(
        'PersonalDetails | Entering with formData and name as',
        this.formData,
        name
      );
      this.addForm({ formData: this.formData[name], name });
    },
    ...mapMutations([SAVE_FORM, ADD_FORM]),
  },
};
</script>
