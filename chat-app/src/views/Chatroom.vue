<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/chatWindow.vue";

export default {
  components: {ChatWindow, NewChatForm, Navbar},
  setup() {
    const {user} = getUser();
    const router = useRouter();


    watch(user, () => {
      if (!user.value) {
        router.push({name: "welcome"});
      }
    });
  }
}
</script>

<style>


</style>