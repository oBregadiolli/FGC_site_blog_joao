
module.exports = function (eleventyConfig) {

    // Adicionando os assets ao build:
    eleventyConfig.addPassthroughCopy("src/assets/");
    // Configurando coleções:
    eleventyConfig.addCollection('posts', function (collectionApi) {
        console.log(collectionApi.getFilteredByGlob('src/blog/posts/**/*.md'));
        return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
      });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'dist',
        },

        // Definindo os formatos de template para conseguir utilizar html, md e njk como linguagens de:
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}