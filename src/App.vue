<template>
  <div id="app">
    <TheNavbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import TheNavbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    Footer
  }
}
</script>

<style>
</style>
