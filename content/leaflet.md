




## Criteria
- Browser support: No IE 11
- Price: Seems to charge for map-loads
- Offline: Currently no answer for how they may do this https://github.com/mapbox/mapbox-gl-js/issues/10200
- Drawing: Comes with a small selection of drawing utilities
   - Some things, like polygon split, look like they need to be hand-coded - though it doesn't look that hard, we might need to do it for a range of tools
- License: Not open source as far as I can tell (or even available on github under any license)
- Features:
   - Drawing: 
      - Deleting a vertex is again a right click
      - The 'split' functionality is pro
      - The 'state' (e.g. in editing mode, in draw mode, in view mode) in Leaflet is not obviously intuitive
      - We do know how to over-ride all those things
   - Snapping: Built in
   - Splitting: would need to be manually authored
   - FeatureLayers: supported via https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html
   - Accessibility: https://github.com/Leaflet/Leaflet/labels/accessibility