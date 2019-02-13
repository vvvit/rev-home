const isProduction = process.env.YENV === 'production';
const isTesting = process.env.YENV === 'testing';
const isDevelopment = !isProduction && !isTesting;

module.exports = {
    isProduction,
    isTesting,
    isDevelopment
};
