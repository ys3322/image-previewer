<template>
  <div>ImagePreviewer</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => [],
  },
});
console.log("props=>", props);
</script>

<style lang="scss" scoped></style>
