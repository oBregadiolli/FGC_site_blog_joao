module.exports = function (eleventyConfig) {
    // Adicionando os assets ao build (arquivos estáticos)
    eleventyConfig.addPassthroughCopy("src/assets/");

    // Configurando coleção "posts" - Todos os posts no blog
    eleventyConfig.addCollection("posts", function (collectionApi) {
        console.log(collectionApi.getFilteredByGlob("src/blog/posts/**/*.md"));  // Apenas para debugging, pode ser removido
        return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
    });

    // Criando uma coleção "featured" - Posts destacados
    eleventyConfig.addCollection("featured", function(collectionApi) {
        // Filtra todos os arquivos dentro da pasta "featured"
        return collectionApi.getFilteredByGlob("src/blog/featured/*.md");
    });

    // Filtro personalizado para repetir caracteres (como "*****")
    eleventyConfig.addFilter("repeat", function (string, times) {
        return string.repeat(times);
    });

    return {
        dir: {
            input: "src",  // Diretório de entrada
            includes: "_includes",  // Diretório de includes
            output: "dist",  // Diretório de saída
        },

        // Definindo os formatos de template a serem usados
        templateFormats: ["md", "njk", "html"],  // Suporta Markdown, Nunjucks e HTML
        markdownTemplateEngine: "njk",  // Usando Nunjucks para renderizar Markdown
        htmlTemplateEngine: "njk",  // Usando Nunjucks para renderizar HTML
        dataTemplateEngine: "njk",  // Usando Nunjucks para renderizar dados
    };
};
