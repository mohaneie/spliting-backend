const createSplit = require('./create-split-api');

module.exports = (app) => {
    app.use(createSplit)
}