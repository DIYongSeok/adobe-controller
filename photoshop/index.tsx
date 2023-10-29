 /* Got questions improvements? please do ask or share 
    regards Kristian Andersen krilleandersen@gmail.com
*/

const modify = {
   name: "정길수/김월회/김정하/임호준/고태우/박수철/노경덕/장진성/강성훈/도승연/윤비/안재원".split('/'),
   job: "국문과/중문과/영문과/서문과/국사/동양사/서양사/미술사/철학과/광운대 인제니움학부/성대 정치학과/인문학연구원".split('/'),
   title: `자유롭지 못한 존재의 욕망\r-운영, 춘향, 초옥의 사랑/호귀(狐鬼)의 욕망:\r<요재지이>속 여우와 귀신의 욕망/불가능한 기원:\r입양 서사와 친족의 욕망들/루이스 부뉴엘 영화의 욕망의 궤적 :\r<안달루시아의 개>에서 <욕망의 모호한 대상>까지/마이카로 향하는 여정\r20세기 후반 자동차 소유 욕망의 전개와 한계/16세기 일본 武士의 욕망과 古名/스탈린 시대 소련 공산당원의\r도덕률과 욕망 문제/삼세기영지가(三世耆英之家)의 영예 :\r강세황(姜世晃,1713-1791)의 명예욕/플라톤과 욕망의 다면성/푸코의 자기배려의 윤리/더러운 욕망 :\r서구 정치사상사에서 욕망을 바라보는 시각들/아풀레이우스의 "퓌시케와 쿠피도의 사랑이야기" :\r쾌락의 탄생`.split('/')
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
ArtboardGenerator("NAMETAG", ["name", "job"]) 
ArtboardGenerator("PIP", ["name", "job", "title"])  