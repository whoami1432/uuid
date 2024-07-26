# node-uuid-unique

A simple Node.js package for generating and validating UUIDs.

## Installation

Install the package using npm:

```bash
npm install node-uuid-unique
```

## UUID Generation
To generate a new UUID, import the uuid function from the node-uuid-unique package and call it:
```bash
const { uuid } = require('node-uuid-unique');

const newUUID = uuid();
console.log(`Generated UUID: ${newUUID}`);
```
## UUID Validation
To validate a UUID, import the validate function from the node-uuid-unique package and call it with the UUID you want to validate:
```bash
const { validate } = require('node-uuid-unique');

const isValid = validate('123e4567-e89b-12d3-a456-426614174000');
console.log(`Is the UUID valid? ${isValid}`);
```