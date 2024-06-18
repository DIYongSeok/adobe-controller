"use strict";
/*
duplcate the final composition changing a composition in it
*/
(function main() {
    var introCompName = "";
    var modifyCompName = "";
    var modify = {
        name: "".split('/'),
        job: "".split('/'),
        title: "".split('/'),
    }; //write the name of items that you want to duplicate in the composition
    var modifyList = ["name", "job", "title"];
    for (var modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
        try {
            var modifyComp = findCompInItems(app.project.items, modifyCompName);
            var modifiedComp = void 0;
            if (modifyComp != null)
                modifiedComp = modifyComp.duplicate();
            else
                throw new Error('check modify composition name');
            for (var i = 0; i < modifyList.length; i++) {
                var modifyListKey = modifyList[i];
                searchAndReplaceTextInComp(modifiedComp, modifyListKey, modify[modifyListKey][modifiedIndex]);
            }
            var newIntroComp = findCompInItems(app.project.items, introCompName).duplicate();
            newIntroComp.name = "".concat(introCompName, "_").concat(modifiedIndex + 1);
            var insertedCompLayer = newIntroComp.layers.add(modifiedComp);
            var removedCompLayer = findCompInItems(newIntroComp.layers, modifyCompName);
            insertedCompLayer.moveAfter(removedCompLayer);
            insertedCompLayer.startTime = removedCompLayer.startTime;
            //  insertedCompLayer.name = `${modifyCompName}_${modifiedIndex+1}`
            //  insertedCompLayer.opacity.setValuesAtTimes([5.9,6.27],[0,100])
            removedCompLayer.remove();
        }
        catch (err) {
            alert(err);
        }
    }
})();
function findCompInItems(items, itemName) {
    for (var i = 1; i <= items.length; i++) {
        if (items[i].name == itemName) {
            return items[i];
        }
    }
}
// This funciton changes the text content inside a composition if it finds a matching layer name
function searchAndReplaceTextInComp(myComp, replaceTextLayerName, newText) {
    // This goes through all of the layers in a composition
    for (var i = 1; i <= myComp.numLayers; i++) {
        var curLayer = myComp.layer(i);
        // if the current layer name is equal to replaceTextLayerName, change the text content
        if (curLayer.name == replaceTextLayerName && curLayer instanceof TextLayer) {
            curLayer.sourceText.setValue(newText);
            return;
        }
    }
}
