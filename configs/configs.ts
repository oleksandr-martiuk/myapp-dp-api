/**
 * APP configurations
 */
export const APP_NAME = process.env.APP_NAME;
export const APP_PORT = process.env.PORT;
export const APP_VERSION = process.env.APP_VERSION;

/**
 * MongoDB configurations
 */
const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASS = process.env.MONGODB_PASS;
const MONGODB_NAME = process.env.MONGODB_NAME;
const MONGODB_PARAMS_RETRY_W = process.env.MONGODB_PARAMS_RETRY_W;
const MONGODB_PARAMS_W = process.env.MONGODB_PARAMS_W;

const MONGODB_AUTH = MONGODB_USER + ':' + MONGODB_PASS;
const MONGODB_PARAMS = MONGODB_PARAMS_RETRY_W + '&' + MONGODB_PARAMS_W;

export const MONGO_URI = `mongodb+srv://${MONGODB_AUTH}@${MONGODB_HOST}/${MONGODB_NAME}?${MONGODB_PARAMS}`;
