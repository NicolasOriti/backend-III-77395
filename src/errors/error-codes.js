export const ERROR_CODES = Object.freeze({
  USER_NOT_FOUND: {
    statusCode: 404,
    message: 'User not found',
  },
  INVALID_ID: {
    statusCode: 400,
    message: 'Invalid user id',
  },
  DUPLICATE_KEY: {
    statusCode: 409,
    message: 'Email already in use',
  },
  VALIDATION_ERROR: {
    statusCode: 400,
    message: 'Validation error',
  },
  ROUTE_NOT_FOUND: {
    statusCode: 404,
    message: 'Route not found',
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'Internal Server Error',
  },
})