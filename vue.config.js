const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
      devServer:{
        host:"0.0.0.0",
        port:8080,

      },
    outputDir:"dist",
    publicPath:process.env.NODE_PATH==="production"
        ? '/vue/'
        : '/'
},
)







