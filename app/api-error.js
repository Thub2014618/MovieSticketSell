class ApiError extends Error {
    constructor(statuscode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;