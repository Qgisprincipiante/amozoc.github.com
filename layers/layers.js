var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REDVIAL_1 = new ol.format.GeoJSON();
var features_REDVIAL_1 = format_REDVIAL_1.readFeatures(json_REDVIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDVIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDVIAL_1.addFeatures(features_REDVIAL_1);
var lyr_REDVIAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REDVIAL_1, 
                style: style_REDVIAL_1,
                interactive: true,
    title: 'RED VIAL<br />\
    <img src="styles/legend/REDVIAL_1_0.png" /> MUNICIPAL<br />\
    <img src="styles/legend/REDVIAL_1_1.png" /> ESTATAL<br />\
    <img src="styles/legend/REDVIAL_1_2.png" /> FEDERAL<br />\
    <img src="styles/legend/REDVIAL_1_3.png" /> SIN INFORMACIÒN<br />'
        });
var format_MUNICIPIODEAMOZOC_2 = new ol.format.GeoJSON();
var features_MUNICIPIODEAMOZOC_2 = format_MUNICIPIODEAMOZOC_2.readFeatures(json_MUNICIPIODEAMOZOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIODEAMOZOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIODEAMOZOC_2.addFeatures(features_MUNICIPIODEAMOZOC_2);
var lyr_MUNICIPIODEAMOZOC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIODEAMOZOC_2, 
                style: style_MUNICIPIODEAMOZOC_2,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIODEAMOZOC_2.png" /> MUNICIPIO DE AMOZOC'
            });

lyr_OSMStandard_0.setVisible(true);lyr_REDVIAL_1.setVisible(true);lyr_MUNICIPIODEAMOZOC_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_REDVIAL_1,lyr_MUNICIPIODEAMOZOC_2];
lyr_REDVIAL_1.set('fieldAliases', {'qc_id': 'qc_id', 'id_red': 'id_red', 'tipo_vial': 'tipo_vial', 'nombre': 'nombre', 'codigo': 'codigo', 'cond_pav': 'cond_pav', 'recubri': 'recubri', 'carriles': 'carriles', 'estatus': 'estatus', 'condicion': 'condicion', 'nivel': 'nivel', 'peaje': 'peaje', 'administra': 'administra', 'jurisdi': 'jurisdi', 'circula': 'circula', 'escala_vis': 'escala_vis', 'velocidad': 'velocidad', 'union_ini': 'union_ini', 'union_fin': 'union_fin', 'longitud': 'longitud', 'ancho': 'ancho', 'fecha_act': 'fecha_act', 'calirepr': 'calirepr', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', });
lyr_MUNICIPIODEAMOZOC_2.set('fieldAliases', {'qc_id': 'qc_id', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', });
lyr_REDVIAL_1.set('fieldImages', {'qc_id': 'TextEdit', 'id_red': 'TextEdit', 'tipo_vial': 'TextEdit', 'nombre': 'TextEdit', 'codigo': 'TextEdit', 'cond_pav': 'TextEdit', 'recubri': 'TextEdit', 'carriles': 'TextEdit', 'estatus': 'TextEdit', 'condicion': 'TextEdit', 'nivel': 'Range', 'peaje': 'TextEdit', 'administra': 'TextEdit', 'jurisdi': 'TextEdit', 'circula': 'TextEdit', 'escala_vis': 'TextEdit', 'velocidad': 'TextEdit', 'union_ini': 'TextEdit', 'union_fin': 'TextEdit', 'longitud': 'TextEdit', 'ancho': 'TextEdit', 'fecha_act': 'TextEdit', 'calirepr': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'cve_mun': 'TextEdit', 'nomgeo': 'TextEdit', });
lyr_MUNICIPIODEAMOZOC_2.set('fieldImages', {'qc_id': '', 'cvegeo': '', 'cve_ent': '', 'cve_mun': '', 'nomgeo': '', });
lyr_REDVIAL_1.set('fieldLabels', {'qc_id': 'no label', 'id_red': 'no label', 'tipo_vial': 'no label', 'nombre': 'no label', 'codigo': 'no label', 'cond_pav': 'no label', 'recubri': 'no label', 'carriles': 'no label', 'estatus': 'no label', 'condicion': 'no label', 'nivel': 'no label', 'peaje': 'no label', 'administra': 'no label', 'jurisdi': 'no label', 'circula': 'no label', 'escala_vis': 'no label', 'velocidad': 'no label', 'union_ini': 'no label', 'union_fin': 'no label', 'longitud': 'no label', 'ancho': 'no label', 'fecha_act': 'no label', 'calirepr': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'no label', });
lyr_MUNICIPIODEAMOZOC_2.set('fieldLabels', {'qc_id': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'no label', });
lyr_MUNICIPIODEAMOZOC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});