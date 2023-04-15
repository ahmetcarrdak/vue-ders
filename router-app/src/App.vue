<template>

  <Header>
    <h1>Bu bir deneme başlığıdır</h1>
  </Header>

  <nav>
    <router-link :to="{name:'home'}">Home</router-link>
    |
    <router-link :to="{name:'about'}">About</router-link>
    |
    <router-link :to="{name:'students'}">Students</router-link>
  </nav>
  <div>
    <span @click="anasayfa">Anasayfa</span>
    <span @click="geri">Geri</span>
    <span @click="ileri">İleri</span>
  </div>
  <router-view/>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  components: {Header},
  data() {
    return {}
  },
  methods: {
    anasayfa(){
      this.$router.push({name: 'home'})
    },
    ileri() {
      this.$router.go(1)
    },
    geri(){
      this.$router.go(-1)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

span {
  padding: 20px 10px;
  cursor: pointer;
}
</style>
