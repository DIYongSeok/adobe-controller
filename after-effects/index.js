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
/*
import { findCompInItems, searchAndReplaceTextInComp } from "./Duplicater";





 (function main() {

   const introCompName: string = "Intro_인터뷰"
   const modifyCompName: string = "강사소개"
   const modifyList = ["name", "job", "title"];
   const modify = {
      name: "김재원/백수빈/이재연/전재우".split('/'),
      job: "이화여대 사회학과/경찰대학 치안대학원/연세대 사회학과/서울대 행정대학원".split('/'),
      title: `윤리적 소비에 관한 의향 및 실천 연구/잠재계층분석을 활용한 데이트폭력 가해자 유형화 연구/남성과 돌봄: 배우자의 돌봄 시간이\r남성과 여성의 고용 유지에 미치는 성별화된 효과/정부-국민 소통에 대한 인식이 정부신뢰에 미치는 영향\r: 정치성향 및 정치효능감의 조절효과를 중심으로`.split('/')
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
 */ 
