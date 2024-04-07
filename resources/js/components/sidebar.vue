<template>
  <div class="d-flex">
    <div
      class="sidebar-container color-sidebar h-100vh"
      :class="{ collapsed: isCollapsed }"
    >
      <div
        class="flex-grow-1 overflow-auto d-flex flex-column justify-content-between h-100"
      >
        <div class="top-thread overflow-y-auto custom-scrollbar flex-grow-1">
          <div class="input-group mb-3 lh-5 sticky-top top-newchat">
            <a
              href=""
              class="new-chat d-flex justify-content-between w-100 p-2 mt-3 me-2 ms-2 text-decoration-none"
            >
              <span class="p-1"
                ><img src="../../images/logo.svg" class="icon-chatgpt" alt="" />
                New chat</span
              >
              <span class="p-1"><i class="bi bi-pencil-square"></i></span>
            </a>
          </div>
          <div class="thread p-2">
            <div
              class="sidebar-thread-container input-group d-flex justify-content-between"
            >
              <a class="text-decoration-none col-10" href="">Thread</a>
              <div class="dropdown">
                <a
                  class="col-2 dropdown-toggle setting-thread-dropdown"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul
                  class="dropdown-menu col-3 dropdown-thread-list"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#"
                      ><i class="bi bi-pen"></i>Rename</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-danger" href="#"
                      ><i class="bi bi-trash3"></i>Delete chat</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bot-thread p-2 new-chat m-2 flex-grow-2">
          <a class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle user-dropdown"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../../images/Avatar User.svg"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong class="user-text">User</strong>
            </a>
            <ul
              class="dropdown-menu text-small acount-item shadow"
              aria-labelledby="dropdownUser2"
            >
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider bg-light" /></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </a>
        </div>
      </div>
    </div>
    <!-- collapse sidebar -->
    <div
      class="d-flex justify-content-center align-items-center collapse-sidebar position-relative"
    >
      <div class="toggle-button pl-10" @click="toggleCollapse">
        <span v-if="isCollapsed"
          ><i class="bi bi-chevron-compact-right fw-bold fs-5"></i
        ></span>
        <span v-else
          ><i class="bi bi-chevron-compact-left fw-bold fs-5"></i
        ></span>
      </div>
    </div>
    <!-- Add your content component here -->
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.thread {
  color: white;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgb(23, 23, 23);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.user-dropdown::after {
  content: none;
}

.user-text {
  color: white;
}

.sidebar-thread-container {
  padding: 5px;
}

.setting-thread-dropdown::after {
  content: none;
}

.setting-thread-dropdown {
  cursor: pointer;
}

.dropdown-thread-list {
  background-color: rgb(47, 47, 47);
  padding: 5px;
}

.dropdown-thread-list li a {
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
}

.dropdown-thread-list li i {
  margin-right: 10px;
  margin-left: 10px;
}

.dropdown-thread-list li a:hover {
  background-color: rgb(65, 65, 65);
}

.sidebar-thread-container a {
  color: white;
  padding: 5px;
}

.sidebar-thread-container:hover {
  background-color: rgb(40, 40, 40);
  border-radius: 7px;
}

.top-newchat {
  background-color: rgb(23, 23, 23);
}

.acount-item {
  background-color: rgb(47, 47, 47);
  padding: 5px;
  width: 265px;
  inset: auto 0px 15px -9px !important;
}

.acount-item li a:hover {
  background-color: rgb(65, 65, 65);
  border-radius: 5px;
}

.acount-item li a {
  color: white;
}

.new-chat:hover {
  background-color: rgb(40, 40, 40);
  border-radius: 7px;
}

.collapse-sidebar {
  background-color: rgb(33, 33, 33);
  color: white;
}

.color-sidebar {
  background-color: rgb(23, 23, 23);
}

.new-chat {
  color: rgb(255, 255, 255);
}

.icon-chatgpt {
  width: 25px;
  margin-right: 5px;
}

.sidebar-container {
  width: 280px;
  height: 100vh;
  transition: width 0.3s ease;
}

.sidebar-container.collapsed {
  width: 0;
}

.sidebar-container.collapsed .nav-link span {
  display: none;
}

.sidebar-container.collapsed .dropdown-toggle span {
  display: none;
}

.toggle-button {
  cursor: pointer;
  z-index: 1;
}
</style>