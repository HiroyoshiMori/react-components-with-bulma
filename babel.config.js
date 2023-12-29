module.exports = function (api) {
    const isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

    return {
        plugins: ['macros'],
    };
};
