<template>
  <div class="templates-container">
    <p>Templates</p>
    <Button
      v-for="(template, index) of TEMPLATES"
      :key="`template-btn-${index}`"
      :label="template"
      @click="generateResume(index)"
    />
  </div>
</template>
<script>
import { TEMPLATES } from '@/constants';
import pdfMake from 'pdfmake';
import htmlToPdfmake from 'html-to-pdfmake';
import { mapState } from 'vuex';
export default {
  name: 'Tamplates',
  components: {},
  data() {
    return {
      TEMPLATES,
    };
  },
  computed: {
    ...mapState(['resume']),
  },
  methods: {
    generateResume(index) {
      this.$log.info('Templates | entering with index as', index);
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

      const docDefinition = {
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
      pdfMake.createPdf(docDefinition).open();
    },
  },
};
</script>
<style lang="scss"></style>
