## run
```
npm start
```

## deploy
```
npm run build
```

## sass、scss
```
npm i -D sass sass-loader
```

### less
```
npm i -D less less-loader
```

### analyzer
```
npm i -D webpack-bundle-analyzer
```

```js
// config/webpack.prod.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
...
plugins: [
    new BundleAnalyzerPlugin()
]
...
```
