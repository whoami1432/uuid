const crypto = require('node:crypto');
const uuid = () => {
	try {
		return crypto.randomUUID();
	} catch (error) {
		throw new Error(error);
	}
};

function validate(uuid) {

    if (!uuid) {
        throw new Error(
            'Invalid UUID: UUID is required and cannot be empty'
        )
    }

	const _regex = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
	return typeof uuid === 'string' && _regex.test(uuid);
}
module.exports = { uuid, validate };
