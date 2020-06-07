ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3035").setExtent([5057350.236612, 2508050.697576, 5332672.470091, 2634790.360405]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_antena_1 = new ol.format.GeoJSON();
var features_antena_1 = format_antena_1.readFeatures(json_antena_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_antena_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_antena_1.addFeatures(features_antena_1);
var lyr_antena_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_antena_1,
maxResolution:28.00446615226196,
 
                style: style_antena_1,
                interactive: true,
                title: '<img src="styles/legend/antena_1.png" /> antena'
            });
var format_prx_ant_omni_2 = new ol.format.GeoJSON();
var features_prx_ant_omni_2 = format_prx_ant_omni_2.readFeatures(json_prx_ant_omni_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_prx_ant_omni_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prx_ant_omni_2.addFeatures(features_prx_ant_omni_2);
var lyr_prx_ant_omni_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_prx_ant_omni_2,
maxResolution:5.600893230452393,
 
                style: style_prx_ant_omni_2,
                interactive: true,
    title: 'prx_ant_omni<br />\
    <img src="styles/legend/prx_ant_omni_2_0.png" /> -42,4 - -36,5 <br />\
    <img src="styles/legend/prx_ant_omni_2_1.png" /> -36,5 - -30,6 <br />\
    <img src="styles/legend/prx_ant_omni_2_2.png" /> -30,6 - -24,7 <br />\
    <img src="styles/legend/prx_ant_omni_2_3.png" /> -24,7 - -18,8 <br />\
    <img src="styles/legend/prx_ant_omni_2_4.png" /> -18,8 - -12,9 <br />'
        });
var lyr_raster_acoperire_v2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "raster_acoperire_v2",
                            
maxResolution:140.0223307613098,

                            minResolution:5.600893230452393,

                            source: new ol.source.ImageStatic({
                               url: "./layers/raster_acoperire_v2_3.png",
    attributions: ' ',
                                projection: 'EPSG:3035',
                                alwaysInRange: true,
                                imageExtent: [5162028.530000, 2550828.990000, 5222028.530000, 2610828.990000]
                            })
                        });
var lyr_low_res_1000_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "low_res_1000",
                            
maxResolution:28004.466152261964,

                            minResolution:140.0223307613098,

                            source: new ol.source.ImageStatic({
                               url: "./layers/low_res_1000_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2314513.643738, 5690995.806524, 2411822.048563, 5789077.705047]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_antena_1.setVisible(true);lyr_prx_ant_omni_2.setVisible(true);lyr_raster_acoperire_v2_3.setVisible(true);lyr_low_res_1000_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_antena_1,lyr_prx_ant_omni_2,lyr_raster_acoperire_v2_3,lyr_low_res_1000_4];
lyr_antena_1.set('fieldAliases', {'id': 'id', 'nume': 'Antena: ', 'geom_polygon': 'geom_polygon', 'ptx': 'PTX[dBm]:', 'frecventa': 'Frecventa[MHz]:', });
lyr_prx_ant_omni_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'dist_antena': 'Distanta fata de antenă[m]', 'prx': 'PRX[dBm]', });
lyr_antena_1.set('fieldImages', {'id': 'Hidden', 'nume': 'TextEdit', 'geom_polygon': 'Hidden', 'ptx': 'Range', 'frecventa': 'TextEdit', });
lyr_prx_ant_omni_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'dist_antena': 'TextEdit', 'prx': 'TextEdit', });
lyr_antena_1.set('fieldLabels', {'nume': 'header label', 'ptx': 'header label', 'frecventa': 'header label', });
lyr_prx_ant_omni_2.set('fieldLabels', {'dist_antena': 'header label', 'prx': 'header label', });
lyr_prx_ant_omni_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});