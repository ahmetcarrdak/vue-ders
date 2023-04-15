<template>
  <div class="content mx-5">
    <h1>Todo App</h1>
    <form action="" @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <input
              type="text"
              class="input"
              v-model="todo"
              placeholder="Todo Enter"
          />
        </div>
      </div>
      <button type="submit" class="button is-warning">Ekle</button>
    </form>
    <div class="card my-5 mx-5" v-for="todo in todos" :key="todo.id">
      <div class="card-content">
        <div class="media">
          <div class="media-left">

          </div>
          <div class="media-content">
            <p
                class="title cursor"
                @click="done(todo)"
                :class="{done: todo.done}"
            >
              {{ todo.content }}
            </p>
            <p>Yapıldı: {{ todo.done }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const todo = ref('');
    const todos = ref([]);

    function addTodo() {
      if (this.todo !== "") {
        todos.value.push({
          done: false,
          content: todo.value,
          id: Date.now()
        });
        todo.value = '';
      }
    }

    function done(todo) {
      todo.done = !todo.done
    }

    return {todo, todos, addTodo, done}
  }
}
</script>

<style>
#app {
  text-align: center;
  margin: 10px auto;
  max-width: 400px;
}

.done {
  text-decoration: line-through;
}

.cursor {
  cursor: pointer;
}
</style>
