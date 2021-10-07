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
var format_MUNICIPIODEAMOZOC_1 = new ol.format.GeoJSON();
var features_MUNICIPIODEAMOZOC_1 = format_MUNICIPIODEAMOZOC_1.readFeatures(json_MUNICIPIODEAMOZOC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIODEAMOZOC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIODEAMOZOC_1.addFeatures(features_MUNICIPIODEAMOZOC_1);
var lyr_MUNICIPIODEAMOZOC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIODEAMOZOC_1, 
                style: style_MUNICIPIODEAMOZOC_1,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIODEAMOZOC_1.png" /> MUNICIPIO DE AMOZOC'
            });
var format_REDVIAL_2 = new ol.format.GeoJSON();
var features_REDVIAL_2 = format_REDVIAL_2.readFeatures(json_REDVIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDVIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDVIAL_2.addFeatures(features_REDVIAL_2);
var lyr_REDVIAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REDVIAL_2, 
                style: style_REDVIAL_2,
                interactive: true,
    title: 'RED VIAL<br />\
    <img src="styles/legend/REDVIAL_2_0.png" /> MUNICIPAL<br />\
    <img src="styles/legend/REDVIAL_2_1.png" /> ESTATAL<br />\
    <img src="styles/legend/REDVIAL_2_2.png" /> FEDERAL<br />\
    <img src="styles/legend/REDVIAL_2_3.png" /> N/D<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_MUNICIPIODEAMOZOC_1.setVisible(true);lyr_REDVIAL_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MUNICIPIODEAMOZOC_1,lyr_REDVIAL_2];
lyr_MUNICIPIODEAMOZOC_1.set('fieldAliases', {'qc_id': 'qc_id', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', });
lyr_REDVIAL_2.set('fieldAliases', {'ID_RED': 'ID_RED', 'TIPO_VIAL': 'TIPO_VIAL', 'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'COND_PAV': 'COND_PAV', 'RECUBRI': 'RECUBRI', 'CARRILES': 'CARRILES', 'ESTATUS': 'ESTATUS', 'CONDICION': 'CONDICION', 'NIVEL': 'NIVEL', 'PEAJE': 'PEAJE', 'ADMINISTRA': 'ADMINISTRA', 'JURISDI': 'JURISDI', 'CIRCULA': 'CIRCULA', 'ESCALA_VIS': 'ESCALA_VIS', 'VELOCIDAD': 'VELOCIDAD', 'UNION_INI': 'UNION_INI', 'UNION_FIN': 'UNION_FIN', 'LONGITUD': 'LONGITUD', 'ANCHO': 'ANCHO', 'FECHA_ACT': 'FECHA_ACT', 'CALIREPR': 'CALIREPR', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_MUNICIPIODEAMOZOC_1.set('fieldImages', {'qc_id': '', 'cvegeo': '', 'cve_ent': '', 'cve_mun': '', 'nomgeo': '', });
lyr_REDVIAL_2.set('fieldImages', {'ID_RED': 'TextEdit', 'TIPO_VIAL': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'COND_PAV': 'TextEdit', 'RECUBRI': 'TextEdit', 'CARRILES': 'TextEdit', 'ESTATUS': 'TextEdit', 'CONDICION': 'TextEdit', 'NIVEL': 'Range', 'PEAJE': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'JURISDI': 'TextEdit', 'CIRCULA': 'TextEdit', 'ESCALA_VIS': 'TextEdit', 'VELOCIDAD': 'TextEdit', 'UNION_INI': 'TextEdit', 'UNION_FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ANCHO': 'TextEdit', 'FECHA_ACT': 'TextEdit', 'CALIREPR': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_MUNICIPIODEAMOZOC_1.set('fieldLabels', {'qc_id': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'no label', });
lyr_REDVIAL_2.set('fieldLabels', {'ID_RED': 'no label', 'TIPO_VIAL': 'no label', 'NOMBRE': 'no label', 'CODIGO': 'no label', 'COND_PAV': 'no label', 'RECUBRI': 'no label', 'CARRILES': 'no label', 'ESTATUS': 'no label', 'CONDICION': 'no label', 'NIVEL': 'no label', 'PEAJE': 'no label', 'ADMINISTRA': 'no label', 'JURISDI': 'no label', 'CIRCULA': 'no label', 'ESCALA_VIS': 'no label', 'VELOCIDAD': 'no label', 'UNION_INI': 'no label', 'UNION_FIN': 'no label', 'LONGITUD': 'no label', 'ANCHO': 'no label', 'FECHA_ACT': 'no label', 'CALIREPR': 'no label', 'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_REDVIAL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});