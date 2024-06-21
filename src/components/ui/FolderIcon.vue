<template>
  <img :src="urlIcon" alt="icon" class="icon" />
</template>

<script setup>
import { computed, defineProps } from "vue";
import folderIcon from "@/assets/icon/folder.png";
import folderCloseIcon from "@/assets/icon/folder_closed.png";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const urlIcon = computed(() => {
  return props.isOpen ? folderIcon : folderCloseIcon;
});
</script>

<style scoped>
.icon {
  border: none;
  background: none;
}
</style>
