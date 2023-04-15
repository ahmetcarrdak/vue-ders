<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Display E-Mail" v-model="email" required>
    <input type="password" placeholder="Display Password" v-model="password" required>
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import useLogin from "@/composables/useLogin";

export default {
  setup(props, context) {
    const email = ref("")
    const password = ref("")
    const {error, login} = useLogin();
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        //error.value = "Login Success";
        context.emit("login");
      }
    };
    return {email, password, handleSubmit, error}
  }
}
</script>

<style scoped>

</style>