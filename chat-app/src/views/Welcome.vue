<template>
  <div class="welcome container">
    <h2>Welcome</h2>

    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"></LoginForm>
      <p>No account yet? <span @click="showLogin = false">sing up</span></p>
    </div>

    <div v-else>
      <h2>Sing Up</h2>
      <SignupForm @signup="enterChat"></SignupForm>
      <p>Already registered? <span @click="showLogin = true">login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import {ref} from 'vue';
import {useRouter} from "vue-router";

export default {
  name: "Welcome",
  components: {LoginForm, SignupForm},
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({name: "chatroom"})
    }
    return {showLogin, enterChat};
  },
};
</script>

<style>

.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px auto;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 10px auto;
}

span {
  cursor: pointer;
  color: #42b983;
  font-weight: bold;
  text-decoration: underline;
}

.welcome button {
  cursor: pointer;
}

</style>