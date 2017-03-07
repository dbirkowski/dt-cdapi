# dt-cdapi
DefinitelyTyped cdapi definition

#Installing

globally:
```javascript
npm install typings -g
```

in your project folder:
```javascript
typings init
typings install
```

put `cdapi.d.ts` file inside `typings` folder

edit your `index.d.ts` file inside `typings` folder and add following line:

```javascript
/// <reference path="cdapi.d.ts" />
```

now the intellisense for cdapi should work in all subsequent subfolders
