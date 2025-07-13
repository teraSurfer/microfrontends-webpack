# Commands for day 1

## Setup Commands

```bash
mkdir webpack-day1-project && cd webpack-day1-project
npm init -y

npm install --save-dev webpack webpack-cli webpack-dev-server

npm install --save-dev html-webpack-plugin style-loader css-loader
```

## Application Commands

```bash
npm run dev # starts webpack devServer locally, this does not create a bundle.
npm run build:dev # builds a development bundle, this does not start devServer
npm run build:prod # build a prod optimized bundle, does not start devServer
```

