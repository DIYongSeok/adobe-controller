 /* 
 duplcate the final composition changing a composition in it 
*/

 (function main() {

   const introCompName: string = ""
   const modifyCompName: string = ""
   const modify = {
       name: "".split('/'),
       job: "".split('/'),
       title: "".split('/'),
   }; //write the name of items that you want to duplicate in the composition
   const modifyList: (keyof typeof modify)[] = ["name", "job", "title"];

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
          newIntroComp.name = `${introCompName}_${modifiedIndex+1}`
          const insertedCompLayer = newIntroComp.layers.add(modifiedComp)
         
          const removedCompLayer = findCompInItems(newIntroComp.layers, modifyCompName) as Layer
          insertedCompLayer.moveAfter(removedCompLayer)
          insertedCompLayer.startTime = removedCompLayer.startTime
          //  insertedCompLayer.name = `${modifyCompName}_${modifiedIndex+1}`
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