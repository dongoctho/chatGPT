<template>
    <div class="login-container">
        <h2>Đăng nhập</h2>
        <form @submit.prevent="login" class="login-form">
            <div>
            <label for="email">Email:</label>
            <div class="">
                <input type="email" id="email" v-model="email">
            </div>
            </div>
            <div>
            <label for="password">Mật khẩu:</label>
            <div class="">
                <input type="password" id="password" v-model="password">
            </div>
            </div>
            <button type="submit">Đăng nhập</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
export default {
  name: "testComponent",
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      const formData = {
        email: this.email,
        password: this.password
      };
      
      const $toast = useToast({
          position: 'top-right',
      });

      if (this.email == '' || this.password == '') {
        $toast.error('Please enter your email and password');
        return;
      }

      axios.post('http://example-app.com/login', formData)
        .then((response) => {
            if (response.data.success) {
                $toast.success(response.data.success);
            } else {
                $toast.error(response.data.error);
            }
        })
        .catch((error) => {
          console.log(error);
        });
      },
  }
}
</script>