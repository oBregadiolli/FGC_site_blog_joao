module.exports = function (eleventyConfig) {
    // Adicionando os assets ao build
    eleventyConfig.addPassthroughCopy("src/assets/");

    // Configurando coleções
    eleventyConfig.addCollection("posts", function (collectionApi) {
        console.log(collectionApi.getFilteredByGlob("src/blog/posts/**/*.md"));
        return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
    });

    // Filtro personalizado para repetir caracteres
    eleventyConfig.addFilter("repeat", function (string, times) {
        return string.repeat(times);
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "dist",
        },

        // Definindo os formatos de template para usar html, md e njk
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};