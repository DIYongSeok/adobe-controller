## Introduction
This project involves duplicating compositions or artboards in Adobe programs (After Effects, Photoshop) while modifying their contents.

![adobe-controller](https://github.com/DIYongSeok/adobe-controller/assets/146920174/0e313fce-e580-4ae0-bf26-8fa0156d9806)

## To start
```
git clone https://github.com/DIYongSeok/adobe-controller.git
cd photoshop/ (or after-effects/)
npm i
```
- Then change the content of files(index.ts or duplicater.ts) in the folder. 
- Change the names of the layers, compositions and artboards that you want to duplicate making them same as the name of variables in the files.
```
npx tsc
```
- After converting the files into index.js or duplicater.js, load the files in adobe software (File > Scripts > Browse)
- or you can launch it pressing F5 through downloading the plugin(ExtendScript Debugger)