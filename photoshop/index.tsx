 /* Got questions improvements? please do ask or share 
    regards Kristian Andersen krilleandersen@gmail.com
*/

let modify = {
   name: "박인권,엄석진,배종훈,이수영".split(','),
   job: "서울대학교 교수,서울대학교 교수,서울대학교 교수,서울대학교 교수".split(','),
   title: "의사결정 구조,행정업무 및 권한체계,행정조직 개선 방향,직원인사제도 개선 및 역량 강화".split(',')
};

 function ArtboardGenerator(layerName = "PIP", modifyList = ["name", "job"]) {
   // =======================================================
   var idslct = app.charIDToTypeID("slct");
   var desc1265 = new ActionDescriptor();
   var idnull = app.charIDToTypeID("null");
   var ref61 = new ActionReference();
   var idLyr = app.charIDToTypeID("Lyr ");
   ref61.putName(idLyr, layerName);
   desc1265.putReference(idnull, ref61);
   var idMkVs = app.charIDToTypeID("MkVs");
   desc1265.putBoolean(idMkVs, false);
   var idLyrI = app.charIDToTypeID("LyrI");
   var list61 = new ActionList();
   list61.putInteger(360);
   desc1265.putList(idLyrI, list61);
   app.executeAction(idslct, desc1265, DialogModes.NO);
   // =======================================================
   var idmove = app.charIDToTypeID("move");
   var desc7655 = new ActionDescriptor();
   var idnull = app.charIDToTypeID("null");
   var ref302 = new ActionReference();
   var idLyr = app.charIDToTypeID("Lyr ");
   var idOrdn = app.charIDToTypeID("Ordn"); 
   var idTrgt = app.charIDToTypeID("Trgt");
   ref302.putEnumerated(idLyr, idOrdn, idTrgt);
   desc7655.putReference(idnull, ref302);
   var idT = app.charIDToTypeID("T   ");
   var ref303 = new ActionReference();
   var idLyr = app.charIDToTypeID("Lyr ");
   var idOrdn = app.charIDToTypeID("Ordn");
   var idBack = app.charIDToTypeID("Back");
   ref303.putEnumerated(idLyr, idOrdn, idBack);
   desc7655.putReference(idT, ref303);
   app.executeAction(idmove, desc7655, DialogModes.NO);
    // =======================================================
    for (let i = 0; i < modify[modifyList[0]].length; i++) {
       for (let j = 0; j < modifyList.length; j++) {
          const key = modifyList[j]
          var idslct = app.charIDToTypeID("slct");
          var desc1265 = new ActionDescriptor();
          var idnull = app.charIDToTypeID("null");
          var ref61 = new ActionReference();
          var idLyr = app.charIDToTypeID("Lyr ");
          ref61.putName(idLyr, key);
          desc1265.putReference(idnull, ref61);
          var idMkVs = app.charIDToTypeID("MkVs");
          desc1265.putBoolean(idMkVs, false); 
          var idLyrI = app.charIDToTypeID("LyrI");
          var list61 = new ActionList();
          list61.putInteger(360);
          desc1265.putList(idLyrI, list61);
          app.executeAction(idslct, desc1265, DialogModes.NO);
          (app.activeDocument as any).activeLayer.textItem.contents = modify[key][i];
       }
       // =======================================================
       var idslct = app.charIDToTypeID("slct");
       var desc1265 = new ActionDescriptor();
       var idnull = app.charIDToTypeID("null");
       var ref61 = new ActionReference();
       var idLyr = app.charIDToTypeID("Lyr ");
       ref61.putName(idLyr, layerName);
       desc1265.putReference(idnull, ref61);
       var idMkVs = app.charIDToTypeID("MkVs");
       desc1265.putBoolean(idMkVs, false);
       var idLyrI = app.charIDToTypeID("LyrI");
       var list61 = new ActionList();
       list61.putInteger(360);
       desc1265.putList(idLyrI, list61);
       app.executeAction(idslct, desc1265, DialogModes.NO);
       // =======================================================
       var idDplc = app.charIDToTypeID("Dplc");
       var desc232 = new ActionDescriptor();
       var idnull = app.charIDToTypeID("null");
       var ref1 = new ActionReference();
       var idLyr = app.charIDToTypeID("Lyr ");
       var idOrdn = app.charIDToTypeID("Ordn");
       var idTrgt = app.charIDToTypeID("Trgt");
       ref1.putEnumerated(idLyr, idOrdn, idTrgt);
       desc232.putReference(idnull, ref1);
       var idNm = app.charIDToTypeID("Nm  ");
       desc232.putString(idNm, `${layerName}_${modify.name[i]}`);
       var idVrsn = app.charIDToTypeID("Vrsn");
       desc232.putInteger(idVrsn, 5);
       var idIdnt = app.charIDToTypeID("Idnt");
       var list4 = new ActionList();
       desc232.putList(idIdnt, list4);
       app.executeAction(idDplc, desc232, DialogModes.NO);
       // =======================================================
       var idslct = app.charIDToTypeID("slct");
       var desc1265 = new ActionDescriptor();
       var idnull = app.charIDToTypeID("null");
       var ref61 = new ActionReference();
       var idLyr = app.charIDToTypeID("Lyr ");
       ref61.putName(idLyr, `${layerName}_${modify.name[i]}`);
       desc1265.putReference(idnull, ref61);
       var idMkVs = app.charIDToTypeID("MkVs");
       desc1265.putBoolean(idMkVs, false);
       var idLyrI = app.charIDToTypeID("LyrI");
       var list61 = new ActionList();
       list61.putInteger(360);
       desc1265.putList(idLyrI, list61);
       app.executeAction(idslct, desc1265, DialogModes.NO);
       // =======================================================
       var idmove = app.charIDToTypeID("move");
       var desc1109 = new ActionDescriptor();
       var idnull = app.charIDToTypeID("null");
       var ref87 = new ActionReference();
       var idLyr = app.charIDToTypeID("Lyr ");
       var idOrdn = app.charIDToTypeID("Ordn");
       var idTrgt = app.charIDToTypeID("Trgt");
       ref87.putEnumerated(idLyr, idOrdn, idTrgt);
       desc1109.putReference(idnull, ref87);
       var idT = app.charIDToTypeID("T   ");
       var desc1110 = new ActionDescriptor();
       var idHrzn = app.charIDToTypeID("Hrzn");
       var idPxl = app.charIDToTypeID("#Pxl");
       desc1110.putUnitDouble(idHrzn, idPxl, 0);
       var idVrtc = app.charIDToTypeID("Vrtc");
       var idPxl = app.charIDToTypeID("#Pxl");
       desc1110.putUnitDouble(idVrtc, idPxl, i * 1180);
       var idOfst = app.charIDToTypeID("Ofst");
       desc1109.putObject(idT, idOfst, desc1110);
       app.executeAction(idmove, desc1109, DialogModes.NO);
    }
 }
//  ArtboardGenerator("간지", ["name", "job", "title"])
// ArtboardGenerator("NAMETAG", ["name", "job"]) 
ArtboardGenerator("PIP", ["name", "job", "title"])  