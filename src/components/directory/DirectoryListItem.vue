<template>
  <li>
    <button
      class="directory-item"
      :class="{ 'directory-item--selected': isCurrentPath }"
      @click="handleSelect"
      :title="name"
    >
      <FolderIcon :isOpen="folder.isOpen" />
      <span>
        {{ folder.name }}
      </span>
    </button>

    <ul v-if="folder.isOpen && folder.childrens.length" class="style-none">
      <DirectoryListItem
        v-for="(folder, indexFolder) in folder.childrens"
        :key="indexFolder"
        :folder="folder"
        :name="name + '/' + folder.name"
      />
    </ul>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useDirectory } from "@/stores/directory";
import FolderIcon from "@/components/ui/FolderIcon.vue";

const props = defineProps({
  folder: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const directoryStore = useDirectory();

const isCurrentPath = computed(
  () => props.name === directoryStore.currentDirectoryPath
);

const handleSelect = () => {
  directoryStore.setFolderOpenState(props.folder.id);
  directoryStore.currentDirectoryPath = props.name;
};
</script>

<style scoped>
.directory-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  background-color: unset;
}
.directory-item--selected {
  font-weight: 700;
}
.style-none {
  list-style: none;
}
</style>
