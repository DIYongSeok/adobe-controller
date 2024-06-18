"use strict";
/* Got questions improvements? please do ask or share
   regards Kristian Andersen krilleandersen@gmail.com
*/
/*
 1. 강사소개 composition duplicate
 2. 안에 text replace
 3. 인트로 composition duplicate
 4. 강사소개 composition replace 또는 삽입
*/
(function main() {
    var compName = "강사소개";
    var modifyList = ["name", "job", "title"];
    var modify = {
        name: "한  준/임영희/정진수/구혜란/송신욱/박현우".split('/'),
        job: "연세대 사회학과 교수/서울대 중앙도서관 행정관/서울대 규장각한국학연구원 학예연구사/서울대 사회발전연구소 객원연구원/통계청 마이크로데이터 사무관/서울대 데이터사이언스대학원 교수".split('/'),
        title: "부단히 확장되는 데이터의 세계/도서관 소개/규장각한국학연구원 소개/한국사회과학자료원 소개/통계데이터센터 소개/데이터사이언스대학원 소개".split('/'),
    };
    for (var modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
        try {
            var comp = findCompInItems(app.project.items, compName);
            var newComp = void 0;
            if (comp != null)
                newComp = comp.duplicate();
            else
                throw new Error('check modify composition name');
            for (var i = 0; i < modifyList.length; i++) {
                var modifyListKey = modifyList[i];
                searchAndReplaceTextInComp(newComp, modifyListKey, modify[modifyListKey][modifiedIndex]);
            }
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
