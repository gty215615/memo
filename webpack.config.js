
const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: "[name].js"
    },
    resolve:{
        extensions:['.ts','tsx','js','jsx']
    },
    mode:'development',

    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:{
                    loader:'awesome-typescript-loader'
                }
            }
        ]
    },
    plugins:[
        new CheckerPlugin()
    ]
}