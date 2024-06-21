<template>
  <div class="container">
    <BaseButton text="Открыть" @click="isShowModal = !isShowModal" />
    <p v-if="currentPath">{{ currentPath }}</p>
    <Teleport to="body">
      <div v-if="isShowModal" class="modal">
        <BaseModal @ok="closeModal">
          <DirectoryList />
        </BaseModal>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDirectory } from "@/stores/directory";
import BaseButton from "@/components/base/BaseButton.vue";
import DirectoryList from "@/components/directory/DirectoryList.vue";
import BaseModal from "@/components/base/BaseModal.vue";

const directoryStore = useDirectory();
const isShowModal = ref(false);
const currentPath = ref("");

const closeModal = () => {
  currentPath.value = directoryStore.currentDirectoryPath;
  isShowModal.value = !isShowModal.value;
};
</script>

<style scoped>
.container {
  height: 100%;
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
}
</style>
