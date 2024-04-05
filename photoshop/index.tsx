 /* Got questions improvements? please do ask or share 
    regards Kristian Andersen krilleandersen@gmail.com
*/

const modify = {
   name: "설동훈/김경학/김종호/최아영".split('/'),
   job: "전북대학교 사회학과/전남대학교 문화인류고고학과/서강대학교 동아연구소/서울대학교 아시아연구소".split('/'),
   title: "[동북아시아 네트워크]\r국제인구이동과 사회경제적 연결 구조:\r한국과 일본의 이민자 수용 사례분석/[남아시아와 서아시아 네트워크]\r국제이주노동으로 본 남아시아와\r서아시아 네트워크/[동남아시아의 네트워크]\r남중국해 화인 네트워크 속 사람, 자본, 물자 그리고 문화의 이동:\r근대 화교 송금 네트워크 형성과 이동의 구조/[중앙아시아의 네트워크]\r중앙아시아 부하라 유대인의 초국가적 공동체:\r네트워크, 미디어, 정체성".split('/'),
};

 function ArtboardGenerator(layerName = "PIP", modifyList = ["name", "job"]) {
   try{
      // move artboard to last order
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
   }
   catch(err){}
  
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
       desc232.putString(idNm, `${i+1}_${layerName}`);
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
       ref61.putName(idLyr, `${i+1}_${layerName}`);
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
// ArtboardGenerator("NAMETAG", ["name", "job"]) 
ArtboardGenerator("PIP", ["name", "job", "title"])    
// ArtboardGenerator("간지", ["name", "job", "title"])    