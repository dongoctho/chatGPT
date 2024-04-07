<template>
  <div class="d-flex flex-column flex-grow-1 color-chatbox max-h-100vh">
    <div class="p-3">
      <slot></slot>
    </div>
    <div
      class="flex-grow-1 overflow-auto d-flex justify-content-center custom-scrollbar"
    >
      <div class="d-flex flex-column align-items-start p-3 w-50 max-h-100vh">
        <div class="container m-auto">
          <div class="p-3 d-flex justify-content-center">
            <img
              class="rounded-circle"
              src="../../images/logoChatgptWhite.svg"
              alt="avatar"
            />
          </div>
          <h3 class="text-center mb-5 color-text-white">
            How can I help you today?
          </h3>
        </div>
      </div>
    </div>
    <div class="p-3 d-flex justify-content-center">
      <form class="w-50">
        <div class="input-group">
          <textarea
            placeholder="Type your message..."
            name=""
            id=""
            cols="120"
            rows="1"
            class="custom-padding bg-transparent custom-scrollbar input-chatgpt"
          ></textarea>
          <button
            type="submit"
            class="btn btn-primary button-send-message bg-transparent bottom-0"
          >
            <img src="../../images/send.svg" class="w-100" alt="" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");

  function autoResize() {
    textarea.style.height = "auto"; // Reset the height to allow for proper resizing
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight
  }

  textarea.addEventListener("input", autoResize);
});
</script>
  
  <style scoped>
.color-text-white {
  color: white;
}

.border-start {
  border: rgb(66, 66, 66) 1px solid;
}

.custom-padding {
  padding-left: 20px;
  padding-right: 45px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.max-h-100vh {
  max-height: 100vh;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(66, 66, 66);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
  cursor: pointer;
}

.color-chatbox {
  background-color: rgb(33, 33, 33);
}

.input-chatgpt {
  border: 1px solid rgb(66, 66, 66);
  border-radius: 15px;
  color: #eee;
  resize: none;
  max-height: 200px;
}

.text-content-chat {
  color: white;
}

.input-chatgpt::placeholder {
  color: #eee;
}

.input-chatgpt:focus {
  outline: none;
  border: 1px solid rgb(85, 85, 85);
}

.button-send-message {
  border: 0;
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  margin-right: 5px;
  z-index: 1000;
}

.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(
    .form-floating
  ),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),
.input-group:not(.has-validation)
  > .form-floating:not(:last-child)
  > .form-control,
.input-group:not(.has-validation)
  > .form-floating:not(:last-child)
  > .form-select {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>