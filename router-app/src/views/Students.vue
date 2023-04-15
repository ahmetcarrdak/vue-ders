<template>
  <h1>Öğrenciler</h1>
  <div v-for="student in students" :key="student.id">
    <router-link :to="{name:`studentInfo`, params:{id:student.id}}">{{ student.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      students: [
        {id: 1, name: 'Varol', not: 12},
        {id: 2, name: 'Ahmet', not: 15},
        {id: 3, name: 'Ali', not: 20},
        {id: 4, name: 'Kazım', not: 34},
      ]
    }
  }
}
</script>

<style scoped>

</style>