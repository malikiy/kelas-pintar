/**
 *
 * Configuration for application
 *
 * @param
 */
if (process.env.NODE_ENV !== 'production') { require('dotenv').config({path: '.env'}) }
require('dotenv').config({ path: 'ENV_FILENAME' });

module.exports = {
    dbUrl : process.env.DATABASE_URL,
    port : process.env.PORT || 3000
};