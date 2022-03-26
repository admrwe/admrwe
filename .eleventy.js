module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/')
    eleventyConfig.addPassthroughCopy('./src/img/')
    eleventyConfig.addPassthroughCopy('./src/js/')

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    }
}
