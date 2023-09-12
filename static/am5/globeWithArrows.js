 // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create the map chart
  // https://www.amcharts.com/docs/v5/charts/map-chart/
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "rotateY",
    projection: am5map.geoOrthographic()
  }));
  
  var cont = chart.children.push(am5.Container.new(root, {
    layout: root.horizontalLayout,
    x: 20,
    y: 40
  }));
  
  // Add labels and controls
  cont.children.push(am5.Label.new(root, {
    centerY: am5.p50,
    text: "Iceberg Movement"
  }));
  

  
  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_region_world_worldRegionsHigh
  }));
  
  // lat & lon lines
  var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
  graticuleSeries.mapLines.template.setAll({
    stroke: root.interfaceColors.get("alternativeBackground"),
    strokeOpacity: 0.2
  });
  
  // Create line series for trajectory lines
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
  var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
  lineSeries.mapLines.template.setAll({
    stroke: root.interfaceColors.get("alternativeBackground"),
  });
  
  // destination series
  var citySeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  );
  
  citySeries.bullets.push(function() {
    var circle = am5.Circle.new(root, {
      radius: 5,
      tooltipText: "{title}",
      tooltipY: 0,
      fill: am5.color(0xffba00),
      stroke: root.interfaceColors.get("background"),
      strokeWidth: 2
    });
  
    return am5.Bullet.new(root, {
      sprite: circle
    });
  });
  
  // arrow series
  var arrowSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  );
  
  arrowSeries.bullets.push(function() {
    var arrow = am5.Graphics.new(root, {
      fill: am5.color(0x000000),
      stroke: am5.color(0x000000),
      draw: function (display) {
        display.moveTo(0, -3);
        display.lineTo(8, 0);
        display.lineTo(0, 3);
        display.lineTo(0, -3);
      }
    });
  
    return am5.Bullet.new(root, {
      sprite: arrow
    });
  });
  
  var cities = [
    {
      id: "london",
      title: "London",
      geometry: { type: "Point", coordinates: [-10, -23] },
    },
    {
      id: "brussels",
      title: "Brussels",
      geometry: { type: "Point", coordinates: [15, -45] }
    }];
  
  citySeries.data.setAll(cities);

  var icebergSeries = chart.series.push(am5map.MapPointSeries.new(root, {
    latitudeField: "Latitude",
    longitudeField: "Longitude"
  }));

  icebergSeries.bullets.push(function() {
    var circle = am5.Circle.new(root, {
      radius: 6,
      fill: am5.Color.fromString("#e6e6ff"),
      stroke: am5.color("#330000"),
      strokeWidth: 2,
      nonScaling: true,
      tooltipText: "{Iceberg}"
    //   tooltipText: "{Iceberg}\nLat: {Latitude}\nLon: {Longitude}"
    });

    return am5.Bullet.new(root, {
        sprite: circle
      });
    });

//   const jsonURL = "https://nrt.cryospherecomputing.com/icebergs/iceberg_northness.json";
    am5.net.load("./static/am5/icebergs.json").then(function(result) {
    // This gets executed when data finishes loading
    icebergSeries.data.setAll(am5.JSONParser.parse(result.response));
    }).catch(function(result) {
    // This gets executed if there was an error loading URL
    // ... handle error
    console.log("Error loading " + result.xhr.responseURL);
    });
    console.log(icebergSeries.startIndex());
    console.log(icebergSeries.endIndex());

  
  // prepare line series data
  var destinations = ["brussels"];
  // London coordinates
  var originLongitude = cities[0].geometry.coordinates[0];
  var originLatitude = cities[0].geometry.coordinates[1];
  
  am5.array.each(destinations, function (did) {
    var destinationDataItem = citySeries.getDataItemById(did);
    var lineDataItem = lineSeries.pushDataItem({ geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]] } });
  
    arrowSeries.pushDataItem({
      lineDataItem: lineDataItem,
      positionOnLine: 0.5,
      autoRotate: true
    });
  })
  

  chart.appear(1000, 100);