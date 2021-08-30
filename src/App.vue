<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  min-width: 100vw;
  letter-spacing: -0.05em;
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
}
</style>
