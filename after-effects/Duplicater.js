"use strict";
/*
* Duplicater that duplcate the composition changing the content of items
*/
(function main() {
    var compName = ""; //write the name of composition that you want to duplicate
    var modify = {
        name: "".split('/'),
        job: "".split('/'),
        title: "".split('/'),
    }; //write the name of items that you want to duplicate in the composition
    var modifyList = ["name", "job", "title"];
    for (var modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
        try {
            var comp = findCompositionInItems(app.project.items, compName);
            var newComp = void 0;
            if (comp != null)
                newComp = comp.duplicate();
            else
                throw new Error('check modify composition name');
            for (var i = 0; i < modifyList.length; i++) {
                var modifyListKey = modifyList[i];
                searchAndReplaceTextInComposition(newComp, modifyListKey, modify[modifyListKey][modifiedIndex]);
            }
        }
        catch (err) {
            alert(err);
        }
    }
})();
function findCompositionInItems(items, itemName) {
    for (var i = 1; i <= items.length; i++) {
        if (items[i].name == itemName) {
            return items[i];
        }
    }
}
// This funciton changes the text content inside a composition if it finds a matching layer name
function searchAndReplaceTextInComposition(myComp, replaceTextLayerName, newText) {
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
