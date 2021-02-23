const path = require('path');
const fs = require('fs');

const FRUIT = 'banana';

function getPackage() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
}

function getPackageVersion() {
    return getPackage().version;
}

function getPackageName() {
    return getPackage().name;
}

function getPackageFruit() {
    return FRUIT;
}

module.exports = {
    getPackageVersion,
    getPackageName,
    getPackage,
    getPackageFruit
};