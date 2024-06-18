## Introduction
this project is built to duplicate a composition or an artboard in adobe programs(after effects, photoshop)

![adobe-controller](https://github.com/DIYongSeok/adobe-controller/assets/146920174/a9dde2e4-5391-4415-a2bd-4016dd189926)

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