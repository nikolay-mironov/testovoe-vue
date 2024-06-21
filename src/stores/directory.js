import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { directoryStubData } from "@/models/directoriesStubData.js";

export const useDirectory = defineStore("directory", () => {
  const directory = reactive(directoryStubData);
  const currentDirectoryPath = ref("");

  const recursive = (childrens, id) => {
    if (!childrens.length) {
      return;
    }
    childrens.forEach((child) => {
      if (child.id === id) {
        child.isOpen = !child.isOpen;
      }

      recursive(child.childrens, id);
    });
  };

  const setFolderOpenState = (id) => {
    directory.forEach((folder) => {
      if (folder.id === id) {
        folder.isOpen = !folder.isOpen;
        return;
      }
      recursive(folder.childrens, id);
    });
  };

  return { directory, currentDirectoryPath, setFolderOpenState };
});
