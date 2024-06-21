<template>
  <div class="modal-wrapper">
    <slot></slot>
    <BaseButton text="Ok" @click="handleButtonClick()" />
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";

const emit = defineEmits(["ok"]);

const handleButtonClick = () => {
  emit("ok");
};
</script>

<style scoped>
.modal-wrapper {
  background: #fff;
  padding: 100px;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
  max-width: 300px;
  max-height: 500px;
}
.modal-wrapper .btn {
  width: 100%;
}
button {
  margin-top: 100px;
}
</style>
