# vue2-leaflet-tracksymbol

This is a [tracksymbol plugin](https://github.com/lethexa/leaflet-tracksymbol) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

Thanks to [Julián Perelli](https://jperelli.com.ar/) of [markercluster plugin](https://github.com/Leaflet/Leaflet.markercluster) extension for providing the basis to build this plugin

Thanks to [Chris Richards](https://github.com/chrisrichards) for fixing major issue on bindings

## Develop and build from Github Repo - For Developers maintaining this component

### clone this repo
    git clone https://github.com/ais-one/vue2-leaflet-tracksymbol.git
    cd vue2-leaflet-tracksymbol

### install dependencies
    npm install

### build library for production with minification
    npm run build

### pack local npm package
    npm pack
    # it should create a .tgz file

### goto example folder and install dependencies
    cd example

    # install the dependencies
    npm install

    # install the library
    npm install --no-save vue2-leaflet-tracksymbol-?.?.?.tgz
    # where ?.?.? is the version

### run the app
    npm run dev


## Install From NPM - For user of this component

### create your vue project and install dependencies
    # install vue-cli globally if you have not done so
    npm install -g vue-cli

    # create the VueJS project
    vue init webpack-simple test

    # goto project and install dependencies
    cd test

    # install dependencies
    npm install

    # install the component
    npm install --save vue2-leaflet-tracksymbol

## Edit The App.vue component

You can refer to the App.vue file of the included example on how it is done

### App.vue
    <template>
      <div id="app">
        <button @click.prevent="ChangeLocation">Change Location</button>
        <v-map  style="height: 90%" :zoom=13 :center="mapCenter">
          <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
          <!-- v-marker :lat-lng="location"></v-marker -->
          <v-ais :lat-lng="location" :options="options">
            <v-popup content="Boat 2" />
          </v-ais>
        </v-map>
      </div>
    </template>

    <script>
    import Vue from 'vue'
    import Vue2Leaflet from 'vue2-leaflet';

    // import Vue2LeafletTracksymbol from 'vue2-leaflet-tracksymbol' // this is for production
    import Vue2LeafletTracksymbol from './Vue2LeafletTracksymbol' // this is used in development to work on the source

    Vue.component('v-ais', Vue2LeafletTracksymbol)
    Vue.component('v-popup', Vue2Leaflet.LPopup)
    Vue.component('v-map', Vue2Leaflet.Map);
    Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
    Vue.component('v-marker', Vue2Leaflet.Marker);

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

### run the app
    npm run serve

## Author

[Aaron Gong](http://www.charterme.co/)

## License

MIT

## Changes

* 1.0.12
  * fix: [issue 8](https://github.com/ais-one/vue2-leaflet-tracksymbol/issues/8) - thanks to Thanks to [Chris Richards] (https://github.com/chrisrichards)
  * use vue-cli 3 for example and add v-popup code
  * updated packages (9.6.13)

* 1.0.11
  * Upgrade to Vue2Leaflet v1.0.1 (breaking changes)
  * Update development installation instructions of local npm package from --save to --nosave
  * future release notes will be in github release (master branch) and not here in README.MD
* 1.0.10
  * fix issue #2
* 1.0.9
  * update vue2-leaflet to 0.0.58 and leaflet to 1.3.1, leaflet-tracksymbol stays at version 1.0.8
  * update component source code, example program & improve documentation, use poi for packaging
* 1.0.8
  * update to leaflet-tracksymbol 1.0.8 (coincidence)
* 1.0.7
  * update vue2-leaflet to 0.0.51
* 1.0.7
  * update vue2-leaflet to 0.0.50
* 1.0.6
  * add size, no heading shape and silhoutte shape options
* 1.0.5
  * add optional data field for user custom data
* 1.0.4
  * fix error in tracksymbol default options
* 1.0.3
  * updated default options and vue2-leaflet version
* 1.0.2
* 1.0.1
* 1.0.0