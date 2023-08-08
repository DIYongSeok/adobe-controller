 /* Got questions improvements? please do ask or share 
    regards Kristian Andersen krilleandersen@gmail.com
*/

 var oldHH = 0;

 var createNewArtboard = function (w, h, t, n ){

     var ww = w + '.' + '000000';
     var hh = h + '.' + '000000';
     var tt = oldHH + '.' + '000000';
     var nme = w + 'x' + h;
     //Make the Artboard    
     // =======================================================
     var idMk = app.charIDToTypeID("Mk  ");
     var desc510 = new ActionDescriptor();
     var idnull = app.charIDToTypeID("null");
     var ref39 = new ActionReference();
     var idartboardSection = app.stringIDToTypeID("artboardSection");
     ref39.putClass(idartboardSection);
     desc510.putReference(idnull, ref39);
     var idlayerSectionStart = app.stringIDToTypeID("layerSectionStart");
     desc510.putInteger(idlayerSectionStart, 5);
     var idlayerSectionEnd = app.stringIDToTypeID("layerSectionEnd");
     desc510.putInteger(idlayerSectionEnd, 6);
     var idNm = app.charIDToTypeID("Nm  ");
     desc510.putString(idNm, "" + nme + "");

     var idartboardRect = app.stringIDToTypeID("artboardRect");
     var desc511 = new ActionDescriptor();

     var idTop = app.charIDToTypeID("Top ");
     desc511.putDouble(idTop, 0.000000);

     var idLeft = app.charIDToTypeID("Left");
     desc511.putDouble(idLeft, 0.000000);


     var idBtom = app.charIDToTypeID("Btom");
     desc511.putDouble(idBtom, parseInt(hh)); //<--- Height

     var idRght = app.charIDToTypeID("Rght");
     desc511.putDouble(idRght, parseInt(ww)); //<--- Width

     var idclassFloatRect = app.stringIDToTypeID("classFloatRect");
     desc510.putObject(idartboardRect, idclassFloatRect, desc511);
     app.executeAction(idMk, desc510, DialogModes.NO);



     //Change artboard default name    
     // =======================================================
     var idsetd = app.charIDToTypeID("setd");
     var desc907 = new ActionDescriptor();
     var idnull = app.charIDToTypeID("null");
     var ref132 = new ActionReference();
     var idLyr = app.charIDToTypeID("Lyr ");
     var idOrdn = app.charIDToTypeID("Ordn");
     var idTrgt = app.charIDToTypeID("Trgt");
     ref132.putEnumerated(idLyr, idOrdn, idTrgt);
     desc907.putReference(idnull, ref132);
     var idT = app.charIDToTypeID("T   ");
     var desc908 = new ActionDescriptor();
     var idNm = app.charIDToTypeID("Nm  ");

     desc908.putString(idNm, "" + 'xxx_' + 'oooo' + '_' + nme + ""); //<-- artboard name


     var idLyr = app.charIDToTypeID("Lyr ");
     desc907.putObject(idT, idLyr, desc908);
     app.executeAction(idsetd, desc907, DialogModes.NO);


     //Space out artboard    
     // =======================================================
     var ideditArtboardEvent = app.stringIDToTypeID("editArtboardEvent");
     var desc95 = new ActionDescriptor();
     var idnull = app.charIDToTypeID("null");
     var ref12 = new ActionReference();
     var idLyr = app.charIDToTypeID("Lyr ");
     var idOrdn = app.charIDToTypeID("Ordn");
     var idTrgt = app.charIDToTypeID("Trgt");
     ref12.putEnumerated(idLyr, idOrdn, idTrgt);
     desc95.putReference(idnull, ref12);
     var idartboard = app.stringIDToTypeID("artboard");
     var desc96 = new ActionDescriptor();
     var idartboardRect = app.stringIDToTypeID("artboardRect");
     var desc97 = new ActionDescriptor();

     var idTop = app.charIDToTypeID("Top ");
     desc97.putDouble(idTop, parseInt(tt)); //<-- artboard y

     var idLeft = app.charIDToTypeID("Left");
     desc97.putDouble(idLeft, 0.000000); //<-- artboard x

     var idBtom = app.charIDToTypeID("Btom");
     desc97.putDouble(idBtom, parseInt(hh) );

     var idRght = app.charIDToTypeID("Rght");
     desc97.putDouble(idRght, parseInt(ww) );

     var idclassFloatRect = app.stringIDToTypeID("classFloatRect");
     desc96.putObject(idartboardRect, idclassFloatRect, desc97);
     var idguideIDs = app.stringIDToTypeID("guideIDs");
     var list10 = new ActionList();
     desc96.putList(idguideIDs, list10);
     var idartboardPresetName = app.stringIDToTypeID("artboardPresetName");
     desc96.putString(idartboardPresetName, "" + nme + "");

     var idClr = app.charIDToTypeID("Clr ");
     var desc98 = new ActionDescriptor();
     var idRd = app.charIDToTypeID("Rd  ");
     desc98.putDouble(idRd, 255.000000);
     var idGrn = app.charIDToTypeID("Grn ");
     desc98.putDouble(idGrn, 255.000000);
     var idBl = app.charIDToTypeID("Bl  ");
     desc98.putDouble(idBl, 255.000000);
     var idRGBC = app.charIDToTypeID("RGBC");
     desc96.putObject(idClr, idRGBC, desc98);
     var idartboardBackgroundType = app.stringIDToTypeID("artboardBackgroundType");

     desc96.putInteger(idartboardBackgroundType, 3); //<-- artboardBackgroundType 1 = white, 2 = black, 3 = transparent 

     var idartboard = app.stringIDToTypeID("artboard");
     desc95.putObject(idartboard, idartboard, desc96);
     var idchangeSizes = app.stringIDToTypeID("changeSizes");
     desc95.putInteger(idchangeSizes, 5);
     app.executeAction(ideditArtboardEvent, desc95, DialogModes.NO);


     oldHH = oldHH + parseInt(hh) + 20; //<-- calculate artboart y position (artboard height + pervious artboard height+20)
 };


 (function makeshithappen() {
     //banner sizes /,
     var sizes = [
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
         [1920, 1080],
     ];


     var count = 1;
     var sizeW;
     var sizeH;
     for (var i = 0; i < sizes.length; i++) {

         var size = sizes[i];

         for (var j = 0; j < size.length; j++) {
             if (count == 1) {
                 sizeW = size[j];
             }
             if (count == 2) {
                 sizeH = size[j];
                 createNewArtboard(sizeW, sizeH, (sizeH + sizeH), size);
                 count = 0;
             }
             count++
         }
     }

 })()

 