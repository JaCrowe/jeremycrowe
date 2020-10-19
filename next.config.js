// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.glsl$/,
                use: 'webpack-glsl'
            },
        ],
    },
};
