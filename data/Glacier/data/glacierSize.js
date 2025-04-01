const chart1 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Glacier Front Bedrock comparison'
    },
    xAxis: { title: {
            text: 'Glacier width in kilometer'
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
        data: [-259,-275,-306,-349,-404,-467,-539,-609,-679,-745,-807,-839,-850,-853,-857,-868,-874,-896,-921,-942,-952,-946,-875,-846,-818,-796,-785,-782,-783,-755,-765,-777,-795,-821,-849,-836,-855,-863,-864,-853,-833,-805,-773,-738,-706,-684,-676,-671,-684,-701,-721,-741,-758,-744,-746,-741,-725,-704,-681,-635,-628,-633,-645,-662,-677,-693,-690,-678,-663,-651,-644,-660,-671,-686,-703,-719,-731,-739,-748,-751,-754,-756,-758,-755,-723,-706,-676,-638,-598,-565,-548,-545,-557,-575,-592,-600,-619,-616,-614,-621,-643,-679,-730,-777,-822,-852,-861,-851,-826,-799,-780,-785,-817,-858,-923,-957,-985,-1002,-1019,-1028,-1031,-1025,-1024,-1025,-1020,-1006,-975,-973,-922,-877,-844,-830,-828,-845,-844,-836,-814,-786,-746,-706,-664,-627,-600,-570,-542,-488,-454,-424,-387,-350,-310,-269,-228,-190,-174]
    }, {
        name: 'Pine Island',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,56,116,167,142,104,116,52,-27,-103,-174,-178,-165,-166,-191,-241,-279,-339,-391,-426,-429,-448,-468,-491,-517,-542,-569,-596,-622,-648,-676,-701,-726,-748,-770,-788,-800,-812,-823,-835,-836,-835,-824,-798,-782,-767,-741,-735,-733,-727,-729,-729,-725,-719,-711,-700,-686,-669,-658,-647,-647,-646,-642,-625,-614,-601,-582,-568,-555,-551,-551,-552,-555,-562,-570,-585,-608,-632,-646,-655,-658,-659,-655,-642,-617,-579,-516,-467,-419,-366,-318,-273,-240,-244,-254,-284,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Zachariae Isstrom',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,54,63,72,-103,-153,-152,-171,-218,-266,-285,-274,-261,-329,-463,-496,-519,-557,-566,-557,-558,-572,-581,-560,-461,-408,-352,-329,-313,-265,-224,-147,-81,-28,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Nioghalvfjerdsfjorden',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,200,230,25,-211,-441,-612,-772,-897,-962,-989,-995,-1001,-1041,-1106,-1123,-1042,-856,-612,-331,-73,200,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Petermann',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,200,-116,-178,-359,-548,-738,-872,-883,-889,-897,-905,-913,-922,-930,-924,-725,-452,-181,200,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    }, {
        name: 'Jakobshavn',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,50,-262,-1102,-1007,-644,-254,50,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
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
            text: 'Glacier width in kilometer'
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
        data: [720,714,705,695,698,688,678,671,667,666,677,677,676,673,669,666,669,664,658,650,643,638,630,631,632,632,632,633,637,642,652,665,671,670,664,663,653,647,643,646,649,661,660,656,650,644,638,652,645,636,628,622,621,624,625,625,621,614,605,598,591,587,585,583,581,583,582,581,579,575,570,571,564,556,547,537,529,522,521,514,507,501,495,491,495,491,486,481,474,467,471,463,454,445,437,433,444,441,436,427,416,405,409,400,389,376,362,348,360,361,368,373,368,361,365,369,372,375,376,381,387,388,398,405,409,413,415,416,417,416,415,413,412,427,425,422,417,411,406,411,407,402,393,383,373,386,385,385,387,392,400,437,444,446,441,430,416,434,424,419,422]
    }, {
        name: 'Thwaites Bedrock',
        data: [-259,-275,-306,-349,-404,-467,-539,-609,-679,-745,-807,-839,-850,-853,-857,-868,-874,-896,-921,-942,-952,-946,-875,-846,-818,-796,-785,-782,-783,-755,-765,-777,-795,-821,-849,-836,-855,-863,-864,-853,-833,-805,-773,-738,-706,-684,-676,-671,-684,-701,-721,-741,-758,-744,-746,-741,-725,-704,-681,-635,-628,-633,-645,-662,-677,-693,-690,-678,-663,-651,-644,-660,-671,-686,-703,-719,-731,-739,-748,-751,-754,-756,-758,-755,-723,-706,-676,-638,-598,-565,-548,-545,-557,-575,-592,-600,-619,-616,-614,-621,-643,-679,-730,-777,-822,-852,-861,-851,-826,-799,-780,-785,-817,-858,-923,-957,-985,-1002,-1019,-1028,-1031,-1025,-1024,-1025,-1020,-1006,-975,-973,-922,-877,-844,-830,-828,-845,-844,-836,-814,-786,-746,-706,-664,-627,-600,-570,-542,-488,-454,-424,-387,-350,-310,-269,-228,-190,-174]
    }, {
        name: 'Pine Island Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,208,220,209,219,228,208,214,217,217,195,194,190,173,167,160,145,138,129,117,104,94,87,85,85,85,83,81,77,73,69,67,66,66,67,68,68,69,69,68,69,71,72,72,73,73,73,73,73,72,71,70,70,68,67,66,64,63,61,61,62,64,66,69,71,72,73,73,74,77,80,82,83,87,86,86,86,89,99,119,140,161,182,206,224,242,261,282,309,342,377,412,443,466,484,500,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    },{
        name: 'Pine Island Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,56,116,167,142,104,116,52,-27,-103,-174,-178,-165,-166,-191,-241,-279,-339,-391,-426,-429,-448,-468,-491,-517,-542,-569,-596,-622,-648,-676,-701,-726,-748,-770,-788,-800,-812,-823,-835,-836,-835,-824,-798,-782,-767,-741,-735,-733,-727,-729,-729,-725,-719,-711,-700,-686,-669,-658,-647,-647,-646,-642,-625,-614,-601,-582,-568,-555,-551,-551,-552,-555,-562,-570,-585,-608,-632,-646,-655,-658,-659,-655,-642,-617,-579,-516,-467,-419,-366,-318,-273,-240,-244,-254,-284,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
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
        data: [55,55,54,54,56,56,55,55,57,59,63,67,72,75,80,86,92,96,100,105,111,116,116,116,116,117,118,119,122,125,127,126,127,128,132,136,141,145,149,153,155,158,160,162,164,166,166,166,165,164,162,163,165,166,166,164,167,171,176,180,184,187,185,187,189,191,192,193,192,187,189,189,188,186,185,185,184,184,184,183,182,182,184,186,177,181,186,187,186,189,192,180,175,170,165,164,164,162,159,156,154,150,148,146,148,148,145,143,138,133,130,131,132,130,131,132,133,133,133,131,127,123,119,118,117,117,117,116,117,119,121,124,126,128,126,126,127,129,130,131,131,131,130,132,133,133,132,131,132,131,133,136,138,139,141,143,140,141,142,144,146,149,151,153,155,153,151,146,140,132,126,122,119,119,124,132,141,148,145,144,145,149,154,158,161,160,164,169,173,175,174,172,171,169,173,176,180,185,189,192,192,194,194,193,191,189,188,181,184,188,193,199,206,214,216,221,223,223,221,219,219,221,221,225,226,227,228,230,231,224,223,223,224]
    }, {
        name: 'Zachariae Isstrom Bedrock',
        data: [54,54,53,53,55,55,54,54,56,58,62,66,71,74,78,84,89,92,80,62,21,-27,-64,-94,-118,-135,-138,-145,-147,-146,-148,-152,-156,-159,-162,-164,-160,-153,-146,-144,-148,-151,-155,-159,-162,-171,-179,-184,-186,-189,-195,-203,-216,-230,-244,-248,-252,-255,-260,-265,-270,-275,-283,-285,-286,-286,-285,-285,-285,-281,-279,-277,-276,-276,-274,-271,-268,-258,-256,-257,-259,-262,-266,-271,-292,-300,-310,-325,-343,-360,-377,-411,-434,-457,-475,-485,-488,-490,-492,-495,-496,-497,-497,-497,-496,-497,-501,-508,-519,-529,-537,-542,-547,-553,-558,-559,-560,-561,-561,-562,-565,-567,-568,-568,-566,-564,-562,-563,-560,-558,-556,-552,-551,-550,-553,-557,-559,-560,-562,-564,-567,-569,-572,-572,-573,-575,-578,-580,-581,-584,-583,-581,-580,-579,-578,-576,-572,-565,-556,-544,-528,-509,-492,-476,-451,-441,-432,-427,-423,-423,-420,-407,-403,-396,-385,-372,-359,-348,-349,-349,-347,-343,-338,-335,-333,-334,-328,-322,-316,-315,-316,-319,-318,-314,-308,-300,-291,-281,-272,-264,-257,-249,-242,-237,-233,-229,-225,-225,-215,-203,-191,-176,-161,-146,-130,-117,-107,-100,-95,-91,-86,-78,-64,-55,-47,-40,-33,-25,-20,-15,-16,-17,-17]
    }, {
        name: 'Nioghalvfjerdsfjorden Surface',
        data: [222,185,105,80,44,33,35,41,41,34,30,26,25,26,26,24,24,25,25,27,28,30,30,29,30,32,33,32,31,33,38,38,36,36,37,38,39,39,39,39,39,39,39,38,38,38,38,35,34,33,34,33,33,33,33,33,33,34,34,34,33,32,32,32,33,33,33,33,33,33,32,32,32,31,30,32,34,34,33,32,32,32,32,32,33,32,32,31,31,31,31,32,33,32,32,31,30,29,28,27,27,26,25,25,24,25,27,30,31,31,29,27,25,25,25,26,25,27,28,28,28,28,30,30,27,25,24,24,26,43,149]
    },{
        name: 'Nioghalvfjerdsfjorden Bedrock',
        data: [222,185,105,80,44,32,30,17,2,-32,-62,-131,-177,-229,-257,-299,-323,-360,-382,-417,-439,-471,-500,-517,-545,-562,-591,-609,-639,-655,-684,-700,-731,-747,-777,-791,-818,-842,-853,-874,-884,-903,-910,-925,-929,-943,-947,-959,-963,-971,-973,-979,-981,-985,-989,-990,-993,-993,-995,-994,-995,-995,-995,-995,-995,-995,-995,-995,-996,-999,-1002,-1007,-1011,-1016,-1021,-1030,-1038,-1049,-1059,-1070,-1079,-1091,-1099,-1108,-1116,-1122,-1127,-1133,-1131,-1132,-1124,-1122,-1111,-1108,-1093,-1085,-1061,-1049,-1021,-1007,-977,-944,-925,-885,-864,-821,-798,-753,-729,-680,-656,-605,-580,-528,-502,-449,-398,-374,-324,-300,-248,-223,-170,-145,-92,-66,-23,-12,-5,9,116]
    }, {
        name: 'Petermann Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,164,68,22,17,16,15,15,14,14,14,14,14,13,13,13,13,12,12,12,13,13,14,14,14,15,15,16,16,16,16,17,18,18,18,18,18,18,18,18,18,18,17,17,16,16,16,16,15,14,14,13,13,13,13,12,12,12,12,12,13,13,14,14,15,15,16,17,17,18,18,18,18,18,18,19,18,19,18,17,16,16,17,17,17,17,17,15,14,14,14,15,15,15,14,15,15,15,14,15,15,15,15,14,14,13,14,14,14,14,14,14,13,13,14,16,16,16,16,16,15,14,15,15,15,20,75,179]
    }, {
        name: 'Petermann Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,148,36,-32,-49,-68,-98,-119,-134,-131,-131,-128,-128,-132,-147,-169,-196,-224,-251,-278,-305,-332,-359,-386,-413,-440,-467,-494,-521,-548,-575,-602,-629,-656,-683,-711,-738,-766,-793,-821,-848,-866,-876,-877,-878,-879,-880,-881,-881,-882,-883,-884,-885,-886,-887,-888,-888,-889,-890,-891,-892,-893,-894,-896,-897,-899,-900,-901,-902,-903,-904,-905,-906,-907,-909,-910,-911,-912,-913,-914,-915,-916,-917,-918,-920,-922,-924,-925,-926,-927,-928,-929,-930,-931,-932,-933,-934,-935,-936,-937,-932,-913,-882,-844,-805,-765,-724,-684,-645,-607,-568,-529,-490,-452,-413,-374,-335,-296,-258,-219,-180,-142,-103,-70,-32,1,75,179]
    }, {
        name: 'Jakobshavn Surface',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,406,402,395,383,357,321,299,297,301,307,307,300,292,291,289,290,291,291,288,284,283,284,280,278,274,273,272,262,262,270,281,288,285,287,294,309,327,325,334,337]
    }, {
        name: 'Jakobshavn Bedrock',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,87,105,113,100,60,-40,-195,-377,-475,-659,-802,-909,-982,-1006,-1040,-1048,-1033,-1004,-984,-942,-891,-833,-806,-748,-689,-625,-569,-566,-505,-416,-311,-203,-139,-36,60,134,180,189,205,216]
    }]
}

const glacierData = {
   chart1,chart2,chart3
}

export default glacierData;