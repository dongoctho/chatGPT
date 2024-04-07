<template>
  <div class="d-flex w-100">
    <StartChatgpt>
      <ModalComponent />
    </StartChatgpt>
  </div>
</template>
      
  <script>
import StartChatgpt from "./startChatgpt.vue";
import ModalComponent from "./modal.vue";

export default {
  name: "App",
  components: {
    StartChatgpt,
    ModalComponent,
  },
};
</script>