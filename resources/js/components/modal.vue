<template>
  <div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle modal-color"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ChatGPT 3.5
      </button>
      <ul class="dropdown-menu col-3" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">ChatGPT 3.5</a></li>
        <li><a class="dropdown-item" href="#">ChatGPT 4.0</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.modal-color {
  background-color: rgb(33, 33, 33);
  border: 0px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
}

.modal-color:hover {
  background-color: rgb(40, 40, 40);
  border-radius: 15px;
}
</style>