<template>
  <div class="container">
    <h1>Список областей України</h1>
    <article>
      <table class="regions-table">
        <thead>
        <tr>
          <th>Область</th>
          <th>Опис</th>
          <th>Центр</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(region, index) in regions" :key="index">
          <td>{{ region.name }}</td>
          <td>{{ region.description }}</td>
          <td>{{ region.center }}</td>
        </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
import regionsData from '@/data/regions.json';

export default {
  name: 'TheHome',
  data() {
    return {
      regions: regionsData
    };
  }
}
</script>

<style scoped>
.container {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

th {
  background-color: #4e8c8a;
  color: white;
  font-weight: bold;
}

td {
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

tbody tr:nth-child(odd) {
  background-color: #fafafa;
}
</style>
