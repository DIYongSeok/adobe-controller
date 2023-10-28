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

   const introCompName: string = "Intro"
   const modifyCompName: string = "강사소개"
   const modifyList = ["name", "job", "title"];
   const modify = {
      name: "정길수/김월회/김정하/임호준/고태우/박수철/노경덕/장진성/강성훈/도승연/윤비/안재원".split('/'),
      job: "국문과/중문과/영문과/서문과/국사/동양사/서양사/미술사/철학과/광운대 인제니움학부/성대 정치학과/인문학연구원".split('/'),
      title: `자유롭지 못한 존재의 욕망\r-운영, 춘향, 초옥의 사랑/호귀(狐鬼)의 욕망:\r<요재지이>속 여우와 귀신의 욕망/불가능한 기원:\r입양 서사와 친족의 욕망들/루이스 부뉴엘 영화의 욕망의 궤적 :\r<안달루시아의 개>에서 <욕망의 모호한 대상>까지/마이카로 향하는 여정\r20세기 후반 자동차 소유 욕망의 전개와 한계/16세기 일본 武士의 욕망과 古名/스탈린 시대 소련 공산당원의\r도덕률과 욕망 문제/삼세기영지가(三世耆英之家)의 영예 :\r강세황(姜世晃,1713-1791)의 명예욕/플라톤과 욕망의 다면성/푸코의 자기배려의 윤리/더러운 욕망 :\r서구 정치사상사에서 욕망을 바라보는 시각들/아풀레이우스의 "퓌시케와 쿠피도의 사랑이야기" :\r쾌락의 탄생`.split('/')
   };

    for (let modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
       try {
          let modifyComp = findCompInItems(app.project.items, modifyCompName) as CompItem;
          let modifiedComp: CompItem
          if (modifyComp != null) modifiedComp = modifyComp.duplicate();
          else throw new Error('check modify composition name')

          for(let i=0;i<modifyList.length;i++){
            const modifyListKey = modifyList[i];
            searchAndReplaceTextInComp(modifiedComp, modifyListKey, modify[modifyListKey as keyof typeof modify][modifiedIndex]);
          }

          let newIntroComp = (findCompInItems(app.project.items, introCompName) as CompItem).duplicate();

          const insertedCompLayer = newIntroComp.layers.add(modifiedComp)
          const removedCompLayer = findCompInItems(newIntroComp.layers, modifyCompName) as Layer
          insertedCompLayer.moveAfter(removedCompLayer)
          insertedCompLayer.startTime = removedCompLayer.startTime
         //  insertedCompLayer.opacity.setValuesAtTimes([5.9,6.27],[0,100])
          removedCompLayer.remove();
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