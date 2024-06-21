<template>
  <button type="button" class="btn">{{ props.text }}</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
    requred: true,
  },
});
</script>

<style scoped></style>
