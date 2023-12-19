module.exports = function (api) {
    var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

    return {
        plugins: ['macros'],
    };
};
