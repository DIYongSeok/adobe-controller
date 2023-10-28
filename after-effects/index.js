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
    var introCompName = "Intro";
    var modifyCompName = "강사소개";
    var modifyList = ["name", "job", "title"];
    var modify = {
        name: "정길수/김월회/김정하/임호준/고태우/박수철/노경덕/장진성/강성훈/도승연/윤비/안재원".split('/'),
        job: "국문과/중문과/영문과/서문과/국사/동양사/서양사/미술사/철학과/광운대 인제니움학부/성대 정치학과/인문학연구원".split('/'),
        title: "\uC790\uC720\uB86D\uC9C0 \uBABB\uD55C \uC874\uC7AC\uC758 \uC695\uB9DD\r-\uC6B4\uC601, \uCD98\uD5A5, \uCD08\uC625\uC758 \uC0AC\uB791/\uD638\uADC0(\u72D0\u9B3C)\uC758 \uC695\uB9DD:\r<\uC694\uC7AC\uC9C0\uC774>\uC18D \uC5EC\uC6B0\uC640 \uADC0\uC2E0\uC758 \uC695\uB9DD/\uBD88\uAC00\uB2A5\uD55C \uAE30\uC6D0:\r\uC785\uC591 \uC11C\uC0AC\uC640 \uCE5C\uC871\uC758 \uC695\uB9DD\uB4E4/\uB8E8\uC774\uC2A4 \uBD80\uB274\uC5D8 \uC601\uD654\uC758 \uC695\uB9DD\uC758 \uADA4\uC801 :\r<\uC548\uB2EC\uB8E8\uC2DC\uC544\uC758 \uAC1C>\uC5D0\uC11C <\uC695\uB9DD\uC758 \uBAA8\uD638\uD55C \uB300\uC0C1>\uAE4C\uC9C0/\uB9C8\uC774\uCE74\uB85C \uD5A5\uD558\uB294 \uC5EC\uC815\r20\uC138\uAE30 \uD6C4\uBC18 \uC790\uB3D9\uCC28 \uC18C\uC720 \uC695\uB9DD\uC758 \uC804\uAC1C\uC640 \uD55C\uACC4/16\uC138\uAE30 \uC77C\uBCF8 \u6B66\u58EB\uC758 \uC695\uB9DD\uACFC \u53E4\u540D/\uC2A4\uD0C8\uB9B0 \uC2DC\uB300 \uC18C\uB828 \uACF5\uC0B0\uB2F9\uC6D0\uC758\r\uB3C4\uB355\uB960\uACFC \uC695\uB9DD \uBB38\uC81C/\uC0BC\uC138\uAE30\uC601\uC9C0\uAC00(\u4E09\u4E16\u8006\u82F1\u4E4B\u5BB6)\uC758 \uC601\uC608 :\r\uAC15\uC138\uD669(\u59DC\u4E16\u6643,1713-1791)\uC758 \uBA85\uC608\uC695/\uD50C\uB77C\uD1A4\uACFC \uC695\uB9DD\uC758 \uB2E4\uBA74\uC131/\uD478\uCF54\uC758 \uC790\uAE30\uBC30\uB824\uC758 \uC724\uB9AC/\uB354\uB7EC\uC6B4 \uC695\uB9DD :\r\uC11C\uAD6C \uC815\uCE58\uC0AC\uC0C1\uC0AC\uC5D0\uC11C \uC695\uB9DD\uC744 \uBC14\uB77C\uBCF4\uB294 \uC2DC\uAC01\uB4E4/\uC544\uD480\uB808\uC774\uC6B0\uC2A4\uC758 \"\uD4CC\uC2DC\uCF00\uC640 \uCFE0\uD53C\uB3C4\uC758 \uC0AC\uB791\uC774\uC57C\uAE30\" :\r\uCF8C\uB77D\uC758 \uD0C4\uC0DD".split('/')
    };
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
            var insertedCompLayer = newIntroComp.layers.add(modifiedComp);
            var removedCompLayer = findCompInItems(newIntroComp.layers, modifyCompName);
            insertedCompLayer.moveAfter(removedCompLayer);
            insertedCompLayer.startTime = removedCompLayer.startTime;
            insertedCompLayer.opacity.setValuesAtTimes([5.9, 6.27], [0, 100]);
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
