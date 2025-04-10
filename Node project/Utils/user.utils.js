const Ajv = require('ajv'); 
const ajv = new Ajv(); 

const ajvUserSchema = {
    type: "object",
    properties: {
        email: {type: "string", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"},
        name: {type: "string", pattern: "^[A-Za-z\\s'-]{2,50}$"},
        age: {type: "number", minimum: 0, maximum: 120},
        password: {type: "string", minLength: 8},
        isAdmain: {type: "boolean"}
    },
    required: ["email", "name", "age", "password", "isAdmain"],
    additionalProperties: false
};
const userValidator = ajv.compile(ajvUserSchema); 

module.exports = userValidator; 