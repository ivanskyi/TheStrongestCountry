<template>
  <div>
    <h1>Карта України</h1>
    <p>Це карта України, де ви можете ознайомитися з її географією та важливими містами.</p>

    <div id="map" style="height: 500px;"></div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'TheMap',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([48.3794, 31.1656], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([50.4501, 30.5236]).addTo(map)
          .bindPopup('Київ, Україна')
          .openPopup();
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  color: #2c3e50;
  text-align: center;
}

p {
  font-size: 1.2em;
  color: #34495e;
  text-align: center;
}

#map {
  width: 100%;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
