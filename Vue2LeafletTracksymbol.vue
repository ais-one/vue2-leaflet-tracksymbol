<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet-tracksymbol'

import propsBinder from './utils/propsBinder.js'

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
    propsBinder(this, this.mapObject, props)
    if (this.$parent._isMounted) {
      this.deferredMountedTo(this.$parent.mapObject)
    }
  },
  beforeDestroy () {
    this.setVisible(false)
  },
  methods: {
    deferredMountedTo (parent) {
      this.parent = parent
      var that = this.mapObject
      for (var i = 0; i < this.$children.length; i++) {
        this.$children[i].deferredMountedTo(that)
      }
      if (this.visible) {
        this.mapObject.addTo(parent)
      }
    },
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
