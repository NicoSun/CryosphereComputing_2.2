am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    
    // Themes end
    
    // Create map instance
    var chart = am4core.create("worldChartanimated", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#33a7ff");
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
    chart.background.fill = am4core.color("#000033");
    chart.background.fillOpacity = 1;
    chart.deltaLatitude = 90;
    
    var grid = chart.series.push(new am4maps.GraticuleSeries());
    grid.toBack();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.nonScalingStroke = true;
    polygonSeries.mapPolygons.template.strokeOpacity = 0.5;
    
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 5;
    circle.fill = am4core.color("#808080");
    circle.stroke = am4core.color("#330000");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{Iceberg}";
    
    imageSeriesTemplate.propertyFields.latitude = "Latitude";
    imageSeriesTemplate.propertyFields.longitude = "Longitude";
    
    }); // end am4core.ready()