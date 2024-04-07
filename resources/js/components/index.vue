<template>
  <div class="d-flex">
    <SidebarComponent />
    <ContentChatComponent>
      <ModalComponent />
    </ContentChatComponent>
  </div>
</template>
    
<script>
import SidebarComponent from "./sidebar.vue";
import ContentChatComponent from "./contentChatGpt.vue";
import ModalComponent from "./modal.vue";

export default {
  name: "App",
  components: {
    SidebarComponent,
    ContentChatComponent,
    ModalComponent,
  },
};
</script>