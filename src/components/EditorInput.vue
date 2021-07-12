<template>
  <div :class="['p-field', containerClass]">
    <label for="editor">{{ label }}</label>
    <Editor v-model="editorData" @text-change="updateData(editorData)">
      <template v-slot:toolbar>
        <span class="ql-formats">
          <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
          <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
          <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
          <button
            class="ql-list"
            value="ordered"
            v-tooltip.bottom="'List'"
          ></button>
          <button
            class="ql-list"
            value="bullet"
            v-tooltip.bottom="'List'"
          ></button>
        </span>
      </template>
    </Editor>
  </div>
</template>
<script>
import Editor from 'primevue/editor';

export default {
  name: 'EditorInput',
  components: {
    Editor,
  },
  data() {
    return {
      editorData: this.value,
    };
  },
  props: ['label', 'containerClass', 'value'],
  methods: {
    updateData(event) {
      this.$log.info('EditorInput | Entering with event', event);
      this.$emit('input', event);
    },
  },
};
</script>
