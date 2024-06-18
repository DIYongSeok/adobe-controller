 /* 
 * Duplicater that duplcate the composition changing the content of items 
*/

 (function main() {

   const compName: string = "" //write the name of composition that you want to duplicate
   const modify = {
      name: "".split('/'),
      job: "".split('/'),
      title: "".split('/'),
   }; //write the name of items that you want to duplicate in the composition
   const modifyList : (keyof typeof modify)[] = ["name", "job", "title"]; 

    for (let modifiedIndex = 0; modifiedIndex < modify.name.length; modifiedIndex++) {
       try {
          let comp = findCompositionInItems(app.project.items, compName) as CompItem;
          let newComp: CompItem
          if (comp != null) newComp = comp.duplicate();
          else throw new Error('check modify composition name')

          for(let i=0;i<modifyList.length;i++){
            const modifyListKey = modifyList[i];
            searchAndReplaceTextInComposition(newComp, modifyListKey, modify[modifyListKey as keyof typeof modify][modifiedIndex]);
          }
       } catch (err) {
          alert(err)
       }
    }
 })()

 function findCompositionInItems < T extends LayerCollection | ItemCollection > (items: T, itemName: string): T[number] | undefined {
    for (let i = 1; i <= items.length; i++) {
       if (items[i].name == itemName) {
          return items[i];
       }
    }
 }

 // This funciton changes the text content inside a composition if it finds a matching layer name
 function searchAndReplaceTextInComposition(myComp: CompItem, replaceTextLayerName: string, newText: string) {
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
 