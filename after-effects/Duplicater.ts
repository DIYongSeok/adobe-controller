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

   const compName: string = "강사소개"
   const modifyList = ["name", "job", "title"];
   const modify = {
      name: "설동훈/김경학/김종호/최아영".split('/'),
      job: "전북대학교 사회학과/전남대학교 문화인류고고학과/서강대학교 동아연구소/서울대학교 아시아연구소".split('/'),
      title: "[동북아시아 네트워크]\r국제인구이동과 사회경제적 연결 구조:\r한국과 일본의 이민자 수용 사례분석/[남아시아와 서아시아 네트워크]\r걸프 지역 남아시아 이주 노동자의\r기회와 도전/[동남아시아의 네트워크]\r남중국해 화인 네트워크 속 사람, 자본, 물자 그리고 문화의 이동:\r근대 화교 송금 네트워크 형성과 이동의 구조/[중앙아시아의 네트워크]\r중앙아시아 부하라 유대인의 초국가적 공동체:\r네트워크, 미디어, 정체성".split('/'),
   };

    for (let modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
       try {
          let comp = findCompInItems(app.project.items, compName) as CompItem;
          let newComp: CompItem
          if (comp != null) newComp = comp.duplicate();
          else throw new Error('check modify composition name')

          for(let i=0;i<modifyList.length;i++){
            const modifyListKey = modifyList[i];
            searchAndReplaceTextInComp(newComp, modifyListKey, modify[modifyListKey as keyof typeof modify][modifiedIndex]);
          }
       } catch (err) {
          alert(err)
       }
    }
 })()

 function findCompInItems < T extends LayerCollection | ItemCollection > (items: T, itemName: string): T[number] | undefined {
    for (let i = 1; i <= items.length; i++) {
       if (items[i].name == itemName) {
          return items[i];
       }
    }
 }

 // This funciton changes the text content inside a composition if it finds a matching layer name
 function searchAndReplaceTextInComp(myComp: CompItem, replaceTextLayerName: string, newText: string) {
    // This goes through all of the layers in a composition
    for (var i = 1; i <= myComp.numLayers; i++) {
       var curLayer = myComp.layer(i);
       // if the current layer name is equal to replaceTextLayerName, change the text content
       if (curLayer.name == replaceTextLayerName && curLayer instanceof TextLayer) {
         curLayer.sourceText.setValue(newText as any);
          return;
       }

    }

 }