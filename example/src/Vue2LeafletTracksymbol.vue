<template>
  <div>
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import { findRealParent, propsBinder } from 'vue2-leaflet'
import 'leaflet-tracksymbol'

const props = {
  latLng: {
    type: [Object, Array]
  },
  options: {
    type: Object
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
}

export default {
  props: props,
  data () {
    return {
      ready: false
    };
  },  
  mounted () {
    let options = { }
    options.trackId = this.options.trackId || 0
    options.fill = this.options.fill || true
    options.fillColor = this.options.fillColor || '#0000ff'
    options.fillOpacity = this.options.fillOpacity || 1.0
    options.stroke = this.options.stroke || true
    options.color = this.options.color || '#000000'
    options.opacity = this.options.opacity || 1.0
    options.weight = this.options.weight || 1.0
    options.speed = this.options.speed || 0
    options.course = this.options.course || 0
    options.heading = this.options.heading || 0
    options.defaultSymbol = this.options.defaultSymbol || [0.75,0, -0.25,0.3, -0.25,-0.3]
    options.noHeadingSymbol = options.noHeadingSymbol || [0.3,0, 0,0.3, -0.3,0, 0,-0.3];
    options.silouetteSymbol = options.silouetteSymbol || [1,0.5, 0.75,1, 0,1, 0,0, 0.75,0];
    options.gpsRefPos = this.options.gpsRefPos || undefined
    options.minSilouetteZoom = this.options.minSilouetteZoom || 14
    options.leaderTime = this.options.leaderTime || 60
    options.size = this.options.size || 24
    options.data = this.options.data || {}

    this.mapObject = L.trackSymbol(this.latLng, options)
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
  },
  beforeDestroy () {
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setVisible (newVal, oldVal) {
      if (newVal === oldVal) return
      if (this.mapObject) {
        if (newVal) {
          this.mapObject.addTo(this.parent)
        }
        else {
          this.parent.removeLayer(this.mapObject)
        }
      }
    }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";
</style>
