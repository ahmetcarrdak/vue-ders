<template>
  <div>
    <slot></slot>
    <hr>
    <input type="text" v-model="name">
    <input type="text" v-model="surname">
    <p>{{ nameSurname }}</p>
    <input type="number" name="" id="" v-model="number1"> <br>
    <input type="number" name="" id="" v-model="number2"> <br>
    <input type="number" name="" id="" v-model="total">
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['content'],
  data() {
    return {
      name: '',
      surname: '',
      number1: 0,
      number2: 0,
      total: 0
    }
  },
  watch: {
    number1(newVal, oldVal) {
      console.log('Sayılar:', newVal, oldVal)
      this.total = parseInt(this.number1) + parseInt(this.number2)
    },
    number2(newVal, oldVal) {
      console.log('Sayılar:', newVal, oldVal)
      this.total = parseInt(this.number1) + parseInt(this.number2)
    }
  },
  computed: {
    nameSurname() {
      return this.name + ' ' + this.surname
    }
  }
}
</script>

<style scoped>

</style>