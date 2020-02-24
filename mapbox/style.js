
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "CartoDB_0": {
            "type": "raster",
            "tiles": ["https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "webmapgpkgMetroManilaHouseholdCountandPercentageBottledWaterasWaterSource_1": {
            "type": "geojson",
            "data": json_webmapgpkgMetroManilaHouseholdCountandPercentageBottledWaterasWaterSource_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_CartoDB_0_0",
            "type": "raster",
            "source": "CartoDB_0"
        },
        {
            "id": "lyr_webmapgpkgMetroManilaHouseholdCountandPercentageBottledWaterasWaterSource_1_0",
            "type": "fill",
            "source": "webmapgpkgMetroManilaHouseholdCountandPercentageBottledWaterasWaterSource_1",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#f3a6b2'}
        }
],
}