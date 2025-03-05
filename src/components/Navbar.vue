<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/" class="nav-link">Домівка</router-link></li>
      <li><router-link to="/map" class="nav-link">Карта</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 20px 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 40px;
}

.nav-link {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  color: #4f6d7a;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-decoration: none;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.nav-link:hover {
  color: #2d4961;
  transform: translateY(-3px);
}
</style>
