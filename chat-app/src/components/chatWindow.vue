<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="messages" v-if="document" ref="messages">
      <div class="single" v-for="doc in formatedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import {formatDistanceToNow, subDays} from "date-fns";
import {computed, ref, onUpdated} from "vue";

export default {
  name: "chatWindow",
  setup() {
    const {error, document} = getCollection('messages');

    const formatedDocuments = computed(() => {
      if (document.value) {
        return document.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return {...doc, createdAt: time};
        });
      }
    });

    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    });

    return {error, document, formatedDocuments, messages}
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  text-align: left;
  text-decoration: none;
}

.single {
  margin: 18px 0;
  text-decoration: none;
}

.created-at {
  display: block;
  color: #999;
  font-size: 10px;
  margin-bottom: 5px;
  text-decoration: none;
}

.name {
  font-weight: bold;
  margin-right: 7px;
  text-decoration: none;
  font-size: 13px;
}

.messages {
  max-height: 350px;
  overflow: auto;
}

.message {
  text-decoration: none;
  display: block;
  color: #2c3e50;
  font-weight: bold;
  font-size: 17px;
}

</style>