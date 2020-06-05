const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    disableEsLint
} = require('customize-cra');

module.exports = override(

    addDecoratorsLegacy(),

    disableEsLint(),

    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
);