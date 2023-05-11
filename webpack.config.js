const baseConfig = require('../../webpack.config.base');

module.exports = baseConfig({
    entryPoint: './src/index.tsx',
    outputPath: `${__dirname}/dist`,
    templatePath: './public/index.html',
    port: 3000, // choose a unique port for each MFE
});