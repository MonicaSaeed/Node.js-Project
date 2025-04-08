const Ajv = require('ajv'); // import ajv
const ajv = new Ajv(); // create ajv instance

//#region ajv schema
const ajvFoodSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        name: {type: "string", pattern: "^[A-Za-z\\s'-]{2,50}$"},
        price: {type: "number"},
        description: {type: "string"},
        availability: {type: "string", enum: ["Yes", "No"]}
    },
    required: ["id", "name", "price", "description", "availability"],
    additionalProperties: false
};
const foodValidator = ajv.compile(ajvFoodSchema); 
//#endregion

module.exports = foodValidator; 