"use strict";
//  /* Got questions improvements? please do ask or share 
//     regards Kristian Andersen krilleandersen@gmail.com
// */
//  /*
//   1. 강사소개 composition duplicate
//   2. 안에 text replace
//   3. 인트로 composition duplicate
//   4. 강사소개 composition replace 또는 삽입
//  */
//  (function main() {
//    const introCompName: string = "intro"
//    const modifyCompName: string = "강사소개"
//    const modifyList = ["name", "job", "title"];
//    const modify = {
//       name: "구형찬/백승무/김지현/이행남/노경덕/김태우".split('/'),
//       job: "서강대 K종교학술확산연구소/서울대 노어노문학과/서강대 유럽문화학과/서울대 철학과/서울대 역사학부 서양사전공/한국외대 한국학과".split('/'),
//       title: "폭력의 구조에 대한 종교인류학적 접근/러시아-우크라이나 전쟁: 긴 싸움의 3막/프랑스어권 아프리카 문학 속 여성의 전쟁 경험/투쟁하는 개인과 전쟁하는 국가-해겔, 그리고 주디스 버틀러의 관점에서 보다/푸틴 정권의 위기와 우크라이나 전쟁/한국전쟁기 북한 주민들의 전복된 시공간과 그 함의".split('/'),
//    };
//     for (let modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
//        try {
//           let modifyComp = findCompInItems(app.project.items, modifyCompName) as CompItem;
//           let modifiedComp: CompItem
//           if (modifyComp != null) modifiedComp = modifyComp.duplicate();
//           else throw new Error('check modify composition name')
//           for(let i=0;i<modifyList.length;i++){
//             const modifyListKey = modifyList[i];
//             searchAndReplaceTextInComp(modifiedComp, modifyListKey, modify[modifyListKey as keyof typeof modify][modifiedIndex]);
//           }
//           let newIntroComp = (findCompInItems(app.project.items, introCompName) as CompItem).duplicate();
//           newIntroComp.name = `${introCompName}_${modifiedIndex+1}`
//           const insertedCompLayer = newIntroComp.layers.add(modifiedComp)
//           const removedCompLayer = findCompInItems(newIntroComp.layers, modifyCompName) as Layer
//           insertedCompLayer.moveAfter(removedCompLayer)
//           insertedCompLayer.startTime = removedCompLayer.startTime
//           //  insertedCompLayer.name = `${modifyCompName}_${modifiedIndex+1}`
//           //  insertedCompLayer.opacity.setValuesAtTimes([5.9,6.27],[0,100])
//           removedCompLayer.remove();
//        } catch (err) {
//           alert(err)
//        }
//     }
//  })()
//  function findCompInItems < T extends LayerCollection | ItemCollection > (items: T, itemName: string): T[number] | undefined {
//    for (let i = 1; i <= items.length; i++) {
//       if (items[i].name == itemName) {
//          return items[i];
//       }
//    }
// }
// // This funciton changes the text content inside a composition if it finds a matching layer name
// function searchAndReplaceTextInComp(myComp: CompItem, replaceTextLayerName: string, newText: string) {
//    // This goes through all of the layers in a composition
//    for (var i = 1; i <= myComp.numLayers; i++) {
//       var curLayer = myComp.layer(i);
//       // if the current layer name is equal to replaceTextLayerName, change the text content
//       if (curLayer.name == replaceTextLayerName && curLayer instanceof TextLayer) {
//         curLayer.sourceText.setValue(newText as any);
//          return;
//       }
//    }
// }
