- The introductory/getting started documentation is a horror - possibly because I'm on a free account and don't appear to be able to do the second thing it requires, which is get an API key
- The map containing div needs a fixed height, or it continues to load forever
- Need to include the arcgis global style-sheet

## Custom tile layers

- The docs (e.g. https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-BaseTileLayer.html) couldn't be implemented as-is; threw errors.
  Probably a difference between how the JS is imported rather than the docs being wrong, but does indicate there will be some fiddling.
- There are some limitations with GeoJSON that could be problematic https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
  - In particular one that caught me out was that each geometry type in the GeoJSON had to be the same! (i.e. had a polygon and then a linestring, linestring didn't show. Linestring
    and then polygon, polygon didn't show)

## Benefits

- Building custom UI for integrations with the map looks pretty great https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=sketch-3d


## Criteria
- Browser support: No IE 11
- Price: Seems much cheaper than Mapbox on the face of it. 
   - Can create multiple API tokens for different customers - no indication of limitations
   - Can see usage by key (and thankfully limit a key to use by specific refers)
   - Does not appear to need a specific license other than a free Developer Subscription https://developers.arcgis.com/pricing/
- Offline: Looks like allowed, but not ArcGIS basemaps (https://www.arcgis.com/home/termsofuse.html - 3.2c, and https://github.com/Esri/offline-editor-js/issues/468#issuecomment-788094858 )
- Drawing: Comes with a small selection of drawing utilities
   - Some things, like polygon split, look like they need to be hand-coded - though it doesn't look that hard, we might need to do it for a range of tools
- License: Not open source as far as I can tell (or even available on github under any license) (https://www.esri.com/content/dam/esrisites/en-us/media/legal/product-specific-terms-of-use/e300.pdf)
- Features:
   - Drawing: 
      - Fine out the box, plus some cool resize and rotate functionality. 
      - Polylines weirdly have to double-click the last point to stop drawing. Deleting a vertex is via a right-click on it
      - Because out the box, well maintained and supported long term
   - Snapping: would need to be manually authored
   - Splitting: would need to be manually authored
   - FeatureLayers: supported via https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html
   - Accessibility: 
