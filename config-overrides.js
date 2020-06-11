const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    disableEsLint
} = require('customize-cra');

module.exports = override(

    addDecoratorsLegacy(),

    // disableEsLint(),

    // Doesn't work properly 
    // addWebpackAlias({
    //     '@': path.resolve(__dirname, './src/')
    // })
);