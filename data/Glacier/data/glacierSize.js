const chart1 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Thwaites Glacier vs all others'
    },
    xAxis: { title: {
            text: 'Glacier width in 500m sections'
        },labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Height in meter'
        },
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Thwaites',
        data: [-22,-28,-39,-50,-68,-82,-96,-108,-122,-144,-172,-190,-220,-241,-279,-303,-348,-372,-421,-448,-494,-505,-492,-465,-481,-520,-535,-550,-544,-523,-502,-483,-475,-457,-448,-440,-451,-454,-453,-458,-455,-447,-443,-419,-422,-427,-433,-431,-429,-419,-420,-433,-442,-451,-450,-464,-466,-474,-468,-475,-469,-483,-521,-557,-587,-609,-623,-630,-637,-633,-641,-654,-655,-650,-637,-618,-596,-573,-554,-544,-544,-545,-546,-566,-576,-617,-627,-648,-647,-661,-678,-677,-685,-679,-680,-680,-690,-694,-697,-690,-672,-667,-646,-638,-611,-592,-567,-562,-563,-572,-588,-588,-595,-600,-612,-624,-632,-628,-637,-648,-643,-644,-634,-633,-627,-635,-633,-644,-638,-643,-636,-616,-598,-578,-571,-573,-572,-532,-556,-598,-612,-643,-653,-679,-690,-699,-708,-721,-746,-772,-795,-811,-832,-842,-860,-870,-892,-908,-931,-951,-972,-988,-1010,-1022,-1042,-1048,-1062,-1060,-1065,-1055,-1042,-1036,-1024,-1017,-1011,-1006,-1006,-1002,-1000,-998,-986,-993,-986,-1009,-1006,-1016,-992,-986,-991,-983,-998,-997,-1018,-1022,-1046,-1051,-1058,-1034,-1002,-960,-920,-894,-865,-839,-808,-787,-767,-754,-746,-733,-725,-713,-706,-704,-708,-703,-701,-698,-709,-724,-719,-747,-746,-764,-756,-761,-744,-730,-722,-717,-742,-754,-781,-791,-808,-811,-819,-813,-807,-798,-778,-764,-744,-737,-719,-707,-677,-650,-621,-584,-552,-521,-485,-463,-437,-426,-414,-404,-381,-368,-349,-328,-283,-210,-136,-59,-38]
    }, {
        name: 'Pine Island',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,-260,-269,-287,-349,-392,-435,-474,-519,-560,-604,-647,-682,-731,-754,-775,-796,-839,-858,-878,-895,-912,-921,-920,-912,-901,-887,-881,-882,-891,-902,-911,-920,-928,-936,-941,-949,-956,-962,-966,-962,-964,-967,-973,-982,-981,-991,-1000,-1005,-1000,-1003,-1006,-1003,-993,-968,-943,-919,-893,-847,-813,-772,-728,-680,-611,-565,-501,-434,-365,-336,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Zachariae Isstrom',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,-12,-47,-77,-87,-104,-115,-128,-146,-168,-205,-239,-264,-291,-313,-339,-368,-386,-389,-394,-411,-433,-461,-506,-553,-560,-582,-594,-597,-601,-603,-588,-569,-551,-545,-512,-440,-418,-422,-420,-376,-355,-410,-542,-621,-641,-630,-611,-595,-583,-562,-541,-531,-525,-538,-513,-460,-418,-396,-440,-536,-399,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Nioghalvfjerdsbræ (79N)',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,40,-76,-149,-259,-347,-436,-543,-657,-774,-892,-995,-1068,-1124,-1130,-1107,-1061,-1013,-980,-952,-935,-922,-897,-869,-805,-739,-710,-687,-660,-628,-589,-547,-508,-476,-470,-467,-365,-245,-167,-133,-104,-101,-83,-72,-77,-99,-127,-47,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Petermann',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,73,-169,-193,-204,-264,-326,-392,-456,-510,-560,-614,-672,-739,-839,-934,-990,-1010,-989,-934,-846,-767,-721,-714,-730,-740,-720,-687,-655,-602,-550,-499,-425,-379,-363,-308,-229,-176,-189,-113,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Jakobshavn',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,46,-151,-783,-1213,-1123,-954,-764,-615,-378,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }]
}

const chart2 =  {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Antarctic Glacier Fronts'
    },
    xAxis: { title: {
            text: 'Glacier width in 500m intervals'
        },labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Height in meter'
        },
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Thwaites Surface',
        data: [266,270,266,269,261,257,246,236,223,208,196,184,172,158,142,127,112,104,98,91,82,69,61,55,59,74,79,81,83,104,116,118,124,129,145,142,144,135,147,141,152,158,149,160,147,148,144,152,151,165,173,162,159,149,151,137,135,128,131,124,125,126,117,118,116,112,107,106,105,113,112,105,105,105,107,118,133,145,161,159,171,190,186,197,189,178,169,169,169,172,169,167,165,160,153,141,125,114,111,122,139,151,164,172,183,200,203,200,180,171,163,154,148,132,131,119,137,143,152,155,148,150,143,140,129,115,105,95,94,91,98,108,120,126,125,104,87,71,73,68,59,62,61,68,75,84,86,86,80,74,71,67,65,64,66,65,68,66,67,67,64,66,66,70,72,76,79,82,84,90,89,84,82,83,85,84,90,94,101,110,116,119,120,117,119,128,138,158,176,184,191,189,188,181,177,173,173,175,183,195,197,206,204,210,201,197,187,188,190,191,201,206,218,217,223,229,248,255,262,262,265,254,258,254,258,261,265,279,291,289,284,278,274,270,276,277,287,283,284,280,278,281,283,285,283,284,289,288,284,286,284,282,284,282,293,291,298,293,304,313,308,319,316,325,325,338,333]
    }, {
        name: 'Thwaites Bedrock',
        data: [-22,-28,-39,-50,-68,-82,-96,-108,-122,-144,-172,-190,-220,-241,-279,-303,-348,-372,-421,-448,-494,-505,-492,-465,-481,-520,-535,-550,-544,-523,-502,-483,-475,-457,-448,-440,-451,-454,-453,-458,-455,-447,-443,-419,-422,-427,-433,-431,-429,-419,-420,-433,-442,-451,-450,-464,-466,-474,-468,-475,-469,-483,-521,-557,-587,-609,-623,-630,-637,-633,-641,-654,-655,-650,-637,-618,-596,-573,-554,-544,-544,-545,-546,-566,-576,-617,-627,-648,-647,-661,-678,-677,-685,-679,-680,-680,-690,-694,-697,-690,-672,-667,-646,-638,-611,-592,-567,-562,-563,-572,-588,-588,-595,-600,-612,-624,-632,-628,-637,-648,-643,-644,-634,-633,-627,-635,-633,-644,-638,-643,-636,-616,-598,-578,-571,-573,-572,-532,-556,-598,-612,-643,-653,-679,-690,-699,-708,-721,-746,-772,-795,-811,-832,-842,-860,-870,-892,-908,-931,-951,-972,-988,-1010,-1022,-1042,-1048,-1062,-1060,-1065,-1055,-1042,-1036,-1024,-1017,-1011,-1006,-1006,-1002,-1000,-998,-986,-993,-986,-1009,-1006,-1016,-992,-986,-991,-983,-998,-997,-1018,-1022,-1046,-1051,-1058,-1034,-1002,-960,-920,-894,-865,-839,-808,-787,-767,-754,-746,-733,-725,-713,-706,-704,-708,-703,-701,-698,-709,-724,-719,-747,-746,-764,-756,-761,-744,-730,-722,-717,-742,-754,-781,-791,-808,-811,-819,-813,-807,-798,-778,-764,-744,-737,-719,-707,-677,-650,-621,-584,-552,-521,-485,-463,-437,-426,-414,-404,-381,-368,-349,-328,-283,-210,-136,-59,-38]
    }, {
        name: 'Pine Island Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,77,66,54,31,34,39,42,45,51,61,68,69,63,64,69,78,82,86,89,92,93,94,97,99,97,92,92,95,101,106,109,110,110,108,106,106,106,107,106,104,101,97,94,93,93,98,103,106,105,101,98,96,94,88,83,82,82,76,73,70,67,63,54,51,48,57,73,94,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Pine Island Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,-260,-269,-287,-349,-392,-435,-474,-519,-560,-604,-647,-682,-731,-754,-775,-796,-839,-858,-878,-895,-912,-921,-920,-912,-901,-887,-881,-882,-891,-902,-911,-920,-928,-936,-941,-949,-956,-962,-966,-962,-964,-967,-973,-982,-981,-991,-1000,-1005,-1000,-1003,-1006,-1003,-993,-968,-943,-919,-893,-847,-813,-772,-728,-680,-611,-565,-501,-434,-365,-336,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }]
}


const chart3 =  {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Greenland Glacier Fronts'
    },
    xAxis: { title: {
            text: 'Glacier width in 150m intervals'
        },labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Height in meter'
        },
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Zachariae Isstrom Surface',
        data: [247,249,261,263,264,266,265,263,265,265,269,272,275,276,273,275,277,273,276,275,278,280,283,283,280,282,278,275,279,276,274,277,274,269,272,271,269,270,268,268,269,267,264,261,257,254,256,252,248,248,244,239,236,232,227,224,220,219,214,210,212,210,207,212,206,199,203,199,190,198,190,182,190,182,175,178,169,162,162,153,147,157,159,163,184,189,191,196,193,190,193,194,196,204,207,210,210,208,210,207,205,203,200,199,199,197,194,189,185,179,171,163,156,145,137,128,116,111,113,131,141,150,170,171,170,181,179,175,187,183,179,196,194,214,219,225,250,253,254,265,262,258,259,253,246,238,232,230,227,225,224,222,223,225,225,226,227,229,230,232,236,237,238,241,243,244,246,248,250,251,253,254,256,257,258,259,261,262,262,261,260,260,262,263,264,265,265,264,265,265,268,271,272,273,273,274,275,277,278,278,278,274,274,272,267,264,261,258,255,254,249]
    }, {
        name: 'Zachariae Isstrom Bedrock',
        data: [2,0,-8,-10,-14,-35,-42,-49,-69,-75,-76,-85,-81,-79,-93,-91,-88,-105,-103,-118,-116,-114,-128,-127,-129,-141,-144,-145,-155,-158,-162,-175,-182,-192,-207,-214,-222,-237,-243,-248,-261,-265,-270,-285,-291,-296,-305,-310,-316,-327,-333,-340,-353,-360,-366,-376,-379,-384,-387,-389,-389,-389,-390,-387,-392,-399,-399,-404,-414,-408,-421,-434,-430,-446,-461,-461,-480,-501,-507,-532,-554,-550,-561,-571,-555,-562,-570,-570,-581,-590,-591,-594,-595,-594,-594,-597,-598,-600,-601,-602,-602,-605,-602,-598,-594,-588,-582,-578,-572,-565,-559,-555,-550,-549,-546,-545,-543,-539,-530,-498,-483,-469,-438,-435,-435,-417,-421,-429,-414,-425,-435,-415,-422,-398,-395,-391,-361,-360,-364,-354,-369,-387,-401,-435,-476,-519,-555,-582,-606,-621,-632,-641,-642,-639,-639,-634,-629,-626,-620,-612,-606,-600,-596,-594,-591,-587,-583,-578,-571,-564,-557,-552,-545,-539,-539,-536,-532,-527,-524,-524,-526,-530,-533,-539,-537,-529,-517,-503,-488,-470,-455,-440,-430,-419,-411,-407,-399,-392,-397,-415,-445,-494,-522,-536,-536,-491,-443,-371,-267,-114,40]
    }, {
        name: 'Nioghalvfjerdsbræ (79N) Surface',
        data: [40,34,32,37,42,43,45,49,50,47,45,47,48,48,47,49,49,49,48,47,46,46,44,45,44,41,39,38,41,43,43,42,41,40,42,45,47,47,45,43,44,46,48,48,49,50,51,51,50,49,48,48,50,53,55,55,55,55,55,56,56,57,56,56,54,51,50,51,51,54,57,59,60,60,61,62,63,64,66,67,67,66,63,63,64,65,66,65,64,64,65,67,67,66,64,62,58,56,54,54,53,52,50,52,53,52,51,50,48,48,49,51,52,53,53,51,51,53,55,59,60,63,66,72,81,88,93,97,99,101,106,112,122,124,127,128,118,123,135,147,161,167,166,167,169,172,177,181,180,179,175,169,164,157,151,147,144,146,149,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Nioghalvfjerdsbræ (79N) Bedrock',
        data: [40,5,-34,-71,-83,-106,-128,-155,-194,-220,-254,-282,-308,-335,-356,-381,-411,-438,-464,-502,-533,-564,-604,-635,-666,-707,-739,-770,-811,-840,-878,-906,-933,-971,-998,-1021,-1049,-1064,-1080,-1102,-1117,-1128,-1137,-1135,-1130,-1124,-1118,-1112,-1101,-1089,-1072,-1058,-1044,-1029,-1016,-1003,-995,-985,-976,-970,-961,-952,-948,-942,-936,-934,-929,-923,-921,-912,-908,-898,-888,-886,-876,-862,-846,-825,-803,-782,-761,-742,-730,-721,-713,-708,-700,-693,-688,-680,-671,-665,-655,-648,-637,-626,-615,-603,-592,-578,-566,-554,-542,-530,-519,-508,-496,-485,-478,-474,-471,-469,-470,-475,-476,-470,-450,-422,-390,-344,-312,-281,-243,-219,-196,-172,-158,-147,-137,-132,-125,-115,-105,-98,-97,-98,-105,-104,-95,-81,-73,-73,-71,-76,-81,-75,-78,-81,-89,-99,-110,-122,-127,-128,-122,-99,-35,19,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Petermann Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,127,36,22,22,22,22,22,21,21,21,22,21,22,22,21,22,22,22,21,21,21,21,21,21,21,21,21,21,21,20,21,20,20,18,17,17,18,20,22,23,23,24,25,26,27,28,29,29,28,28,27,27,27,27,27,27,26,25,24,24,23,22,21,19,17,16,16,17,17,18,18,18,18,19,20,22,23,24,25,26,26,26,26,27,26,27,27,27,26,25,24,24,24,24,23,23,23,23,22,22,22,21,20,19,19,18,18,18,18,18,19,19,19,19,20,20,20,20,19,18,18,17,18,19,20,21,21,21,22,24,32,67,148,null,null,null,null]
    }, {
        name: 'Petermann Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,73,-71,-136,-161,-182,-194,-196,-192,-191,-193,-201,-218,-236,-254,-272,-289,-308,-327,-347,-367,-386,-406,-425,-444,-461,-478,-494,-509,-524,-538,-553,-568,-583,-599,-616,-633,-650,-668,-685,-700,-723,-748,-775,-805,-838,-872,-901,-926,-946,-964,-980,-992,-1003,-1008,-1010,-1009,-1004,-996,-984,-970,-953,-933,-911,-886,-857,-827,-801,-780,-762,-745,-732,-722,-715,-712,-712,-716,-720,-725,-731,-736,-738,-740,-739,-735,-727,-717,-707,-698,-688,-679,-669,-660,-649,-635,-618,-599,-579,-565,-553,-540,-525,-509,-492,-472,-449,-425,-406,-391,-382,-375,-369,-366,-362,-351,-333,-312,-290,-266,-241,-219,-199,-182,-176,-177,-185,-190,-187,-166,-136,-103,-74,-29,86,null,null,null,null]
    }, {
        name: 'Jakobshavn Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,447,446,449,448,436,410,374,354,331,323,320,322,323,331,345,359,367,367,367,364,358,349,341,334,328,325,329,334,343,349,352,359,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Jakobshavn Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,46,3,-1,-91,-247,-450,-693,-809,-1035,-1174,-1214,-1205,-1186,-1149,-1102,-1048,-990,-952,-891,-833,-779,-732,-704,-655,-598,-524,-430,-390,-271,-147,-28,72,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }]
}

const glacierData = {
   chart1,chart2,chart3
}

export default glacierData;