/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root
var root = am5.Root.new("worldChartanimated"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  panY: "rotateY",
  rotationY: 90,
  projection: am5map.geoOrthographic(),
  background: am5.Rectangle.new(root, {
    fill: am5.Color.fromString("#000033"),
  }),
}));

// lat & lon lines
var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
graticuleSeries.mapLines.template.setAll({
  stroke: root.interfaceColors.get("alternativeBackground"),
  strokeOpacity: 0.2
});

// dark blue background
var backgroundSeries = chart.series.unshift(
  am5map.MapPolygonSeries.new(root, {})
);

backgroundSeries.mapPolygons.template.setAll({
  fill: am5.Color.fromString("#33a7ff"),
  stroke: am5.color(0xd4f1f9),
});

backgroundSeries.data.push({
  geometry: am5map.getGeoRectangle(90, 180, -90, -180)
});

// Create polygon series
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_region_world_worldRegionsHigh,
  fill: am5.Color.fromString("#323232"),
}));

// Create point series
var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
  latitudeField: "Latitude",
  longitudeField: "Longitude"
}));

pointSeries.bullets.push(function() {
  var circle = am5.Circle.new(root, {
    radius: 6,
    fill: am5.Color.fromString("#e6e6ff"),
    stroke: am5.color("#330000"),
    strokeWidth: 2,
    nonScaling: true,
    tooltipText: "{Iceberg}\nLat: {Latitude}\nLon: {Longitude}"
  });


  return am5.Bullet.new(root, {
    sprite: circle
  });
});

chart.appear(1000, 100);

