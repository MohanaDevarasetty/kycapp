var jp = require('jsonpath');


function getDataUsingJsonPath(object, jsonPathExpression) {
    if (!jsonPathExpression) {
        return '';
    }
    const result = jp.query(object, jsonPathExpression.replace('${language}', 'english'));
    return result.length ? result[0] : '';
}


export {
    getDataUsingJsonPath
}