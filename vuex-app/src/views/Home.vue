<template>
  <div class="home">
    <List :todos="todos"></List>
    <AddTodo></AddTodo>
  </div>
</template>

<script>
import {ref, onUpdated} from "vue";
import List from '@/components/List.vue';
import AddTodo from "@/components/AddTodo.vue";
import {useRouter} from "vue-router";

export default {
  components: {List, AddTodo},
  setup() {
    const todos = ref([
      {id: 1, todo: "Eve Git"},
      {id: 2, todo: "Ders Çalış"},
    ]);

    const route = useRouter();

    onUpdated(() => {
      console.log(route.query.data);
      todos.value.push({
        id: Math.floor(Math.random() * 10000000),
        todo: route.query.data
      })
    });

    return {todos}
  }
}
</script>
