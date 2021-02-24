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
