# cianh-rollup-dd-trace-repro

# Run
```
corepack enable
yarn install
yarn tsc -b
yarn rollup -c
```

## Expected error
```
yarn rollup -c

node_modules/dd-trace/packages/dd-trace/src/appsec/iast/analyzers/template-injection-analyzer.js → output...
[!] (plugin commonjs--resolver) RollupError: node_modules/dd-trace/packages/dd-trace/src/supported-configurations.json (2:27): Expected ';', '}' or <eof> (Note that you need @rollup/plugin-json to import JSON files)
node_modules/dd-trace/packages/dd-trace/src/supported-configurations.json (2:27)
1: {
2:   "supportedConfigurations": {
                              ^
3:     "DD_AAS_DOTNET_EXTENSION_VERSION": ["A"],
4:     "DD_ACTION_EXECUTION_ID": ["A"],
    at Object.getRollupError (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/parseAst.js:285:41)
    at ParseError.initialise (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:16064:40)
    at convertNode (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:17947:10)
    at convertProgram (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:17187:12)
    at Module.setSource (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:18935:24)
    at async ModuleLoader.addModuleSource (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:22581:13)
  [cause] RollupError: Expected ';', '}' or <eof>
      at Object.getRollupError (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/parseAst.js:285:41)
      at ParseError.initialise (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:16064:40)
      at convertNode (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:17947:10)
      at convertProgram (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:17187:12)
      at Module.setSource (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:18935:24)
      at async ModuleLoader.addModuleSource (/Users/cian/Code/cianh-rollup-dd-trace-repro/node_modules/rollup/dist/shared/rollup.js:22581:13)
```