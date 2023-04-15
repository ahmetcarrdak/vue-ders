<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display Name" v-model="displayName" required>
    <input type="email" placeholder="Display E-Mail" v-model="email" required>
    <input type="password" placeholder="Display Password" v-model="password" required>
    <div class="error">
      {{ error }}
    </div>
    <button>Sing Up</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import useSignup from "@/composables/useSignup";

export default {
  setup(props, context) {

    const {error, signup} = useSignup();
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        //error.value = "Login Success";
        context.emit("signup");
      }
    }

    return {displayName, email, password, handleSubmit, error}
  },
};
</script>

<style>

</style>