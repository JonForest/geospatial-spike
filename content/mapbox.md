
- Documentation has more examples, but seems harder to navigate to find what I need somehow (this might be subjective)
- Adding controls seems like a lot more work, but on the other hand, having the flexibility might be of real benefits
   - For example, there is no inbuilt control for layer selection, so you have to write the code yourself. https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers/
   - This does seem to require a little more jumping through hoops to get everythign working within a React context
- Mapbox-gl-draw seems to be poorly maintained at this stage, and the merge/split polygon functionality was throwing errors for me

## Benefits
- Prefer how mapbox handles the geojson rendering. Still requires multiple layers, but seems a little easier to parse that out from a single 
source rather than the server having to break it up


## Criteria
- Browser support: No IE 11
- Price: Seems to charge for map-loads
- Offline: Currently no answer for how they may do this https://github.com/mapbox/mapbox-gl-js/issues/10200
- Drawing: Comes with a small selection of drawing utilities
   - Some things, like polygon split, look like they need to be hand-coded - though it doesn't look that hard, we might need to do it for a range of tools
- License: Not open source as far as I can tell (or even available on github under any license)
- Features:
   - Drawing: 
      - Fine out the box, plus some cool resize and rotate functionality. 
      - Polylines weirdly have to double-click the last point to stop drawing. Deleting a vertex is via a right-click on it
      - Because out the box, well maintained and supported long term
   - Snapping: would need to be manually authored
   - Splitting: would need to be manually authored
   - FeatureLayers: supported via https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html
   - Accessibility: https://github.com/mapbox/mapbox-gl-accessibility/


https://github.com/mapbox/mapbox-gl-accessibility/