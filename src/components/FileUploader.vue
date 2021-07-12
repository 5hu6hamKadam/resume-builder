<template>
  <div :class="['file-uploader-container', containerClass]">
    <FileUpload
      name="demo[]"
      url="./upload"
      accept="image/*"
      :multiple="false"
    />
  </div>
</template>
<script>
import FileUpload from 'primevue/fileupload';
export default {
  name: 'FileUploader',
  props: ['containerClass'],
  data() {
    return {};
  },
  components: {
    FileUpload,
  },
};
</script>
