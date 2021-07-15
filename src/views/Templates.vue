<template>
  <div class="templates-container">
    <h1>Less is More</h1>
    <p><strong>Price:</strong> &#8377;5.00</p>
    <div class="p-d-flex p-ai-center">
      <Button label="Try it!" class="p-mr-2" @click="generateResume(false)" />
      <google-pay-button
        environment="TEST"
        :button-color="buttonColor"
        :button-type="buttonType"
        :button-size-mode="isCustomSize ? 'fill' : 'static'"
        :paymentRequest.prop="paymentRequest"
        @loadpaymentdata="onLoadPaymentData"
        @error="onError"
        :style="{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }"
      ></google-pay-button>
    </div>
  </div>
</template>
<script>
import { TEMPLATES, PAY_BUTTON, APP_NAME } from '@/constants';
import pdfMake from 'pdfmake';
import htmlToPdfmake from 'html-to-pdfmake';
import { mapState } from 'vuex';
import '@google-pay/button-element';
import Button from 'primevue/button';
export default {
  name: 'Tamplates',
  components: {
    Button,
  },
  data() {
    return {
      TEMPLATES,
      ...PAY_BUTTON,
      simpleTemplate: '',
    };
  },
  computed: {
    ...mapState(['resume']),
  },
  methods: {
    generateResume(isDownload) {
      const {
        personalDetails,
        resumeObjective,
        education,
        workExperience,
        interests,
        skills,
        languages,
      } = this.resume;
      const objective = htmlToPdfmake(resumeObjective.description);

      var docDefinition = {
        ...(!isDownload && { watermark: APP_NAME }),
        content: [
          {
            text: `${personalDetails.firstName} ${personalDetails.lastName}`,
            style: 'header',
          },
          {
            text: `${personalDetails.address}    ${personalDetails.phoneNumber}    ${personalDetails.email}`,
            style: 'para',
          },
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          ...objective,
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          {
            text: 'Work Experience',
            style: 'subtitle',
          },
          {
            columns: [
              {
                width: '*',
                text: `${workExperience.jobTitle}`,
                bold: true,
              },
              {
                width: '*',
                text: `${workExperience.startDate} - ${workExperience.endDate}`,
                alignment: 'right',
              },
            ],
          },
          {
            text: `${workExperience.employer}, ${workExperience.cityTitle}`,
          },
          ...htmlToPdfmake(workExperience.workDescription),
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          {
            text: 'Education and Qualification',
            style: 'subtitle',
          },
          {
            columns: [
              {
                width: '*',
                text: education.degreeTitle,
              },
              {
                width: '*',
                text: `${education.schoolStartMonth ||
                  ''} ${education.schoolStartYear ||
                  ''} - ${education.schoolEndMonth ||
                  ''} ${education.schoolEndYear || ''}`,
                alignment: 'right',
              },
            ],
          },
          {
            text: `${education.school} ${education.schoolCityTitle}`,
          },
          ...htmlToPdfmake(education.schoolDescription),
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          {
            text: 'Interests',
            style: 'subtitle',
          },
          {
            text: [...interests.hobbies].toString().replaceAll(',', ', '),
          },
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          {
            text: 'Skills',
            style: 'subtitle',
          },
          {
            columns: [
              {
                width: '30%',
                text: skills.skill,
              },
              {
                width: '30%',
                text: skills.skillLevel,
              },
            ],
          },
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 10,
                x2: 515,
                y2: 10,
                lineWidth: 1,
              },
            ],
          },
          {
            text: 'Languages',
            style: 'subtitle',
          },
          {
            columns: [
              {
                width: '30%',
                text: languages.language,
              },
              {
                width: '30%',
                text: languages.languageLevel,
              },
            ],
          },
        ],
        styles: {
          header: {
            fontSize: 22,
            bold: true,
          },
          para: {
            fontSize: 12,
            bold: false,
          },
          subtitle: {
            fontSize: 18,
            bold: true,
          },
        },
      };
      this.$log.info('pdf', docDefinition);
      const pdf = pdfMake.createPdf(docDefinition);
      pdf.open();
    },
    onLoadPaymentData(event) {
      this.$log.info('load payment data', event.detail);
      this.generateResume(true);
    },
    onError(event) {
      this.$log.error('error', event.error);
    },
  },
};
</script>
<style lang="scss"></style>
