<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.todo }}</li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: ['todos']
}
</script>

<style scoped>

</style>