<template>
  <h2>Выберите папку</h2>
  <ul class="style-none">
    <DirectoryListItem
      v-for="(folder, folderIndex) in directoryStore.directory"
      :key="folderIndex"
      :folder="folder"
      :name="'./' + folder.name"
    />
  </ul>
</template>

<script setup>
import { useDirectory } from "@/stores/directory";
import DirectoryListItem from "./DirectoryListItem.vue";

const directoryStore = useDirectory();
</script>

<style scoped>
.folder-item {
  cursor: pointer;
}
.folder-selected {
  font-weight: 700;
}
.style-none {
  list-style: none;
}
</style>
