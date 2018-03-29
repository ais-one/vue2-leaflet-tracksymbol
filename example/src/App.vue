<template>
  <div id="app">
    <button @click.prevent="ChangeLocation">Change Location</button>
    <v-map  style="height: 90%" :zoom=13 :center="mapCenter">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <!-- v-marker :lat-lng="location"></v-marker -->
      <v-ais :lat-lng="location" :options="options"></v-ais>
    </v-map>
  </div>
</template>

<script>
import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet';

import Vue2LeafletTracksymbol from 'vue2-leaflet-tracksymbol'

Vue.component('v-ais', Vue2LeafletTracksymbol)

Vue.component('v-map', Vue2Leaflet.LMap);
Vue.component('v-tilelayer', Vue2Leaflet.LTileLayer);
Vue.component('v-marker', Vue2Leaflet.LMarker);

export default {
  name: 'app',
  methods: {
    ChangeLocation () {
      this.location= [47.413220, -1.209482]
    }
  },
  data () {
    return {
      mapCenter: [47.413220, -1.219482],
      location: [47.413220, -1.219482],
      options: {
        trackId: 123,
        fill: true,
        fillColor: '#00ffff',
        fillOpacity: 1.0,
        stroke: true,
        color: '#000000',
        opacity: 1.0,
        weight: 1.0,
        speed: 30, // meter per second
        course: 1.0, // radians
        heading: 1.0, // radians
        size: 24,
        defaultSymbol: [0.75, 0, 0.5, 0.3, -0.5, 0.3, -0.25, 0, -0.5, -0.3, 0.5, -0.3],
        data: { name: 'Boat 2', custom: 'other info' }
      }
    }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

#app {
  width: 1024px;
  height: 768px;
  margin-top: 60px;
}
</style>
