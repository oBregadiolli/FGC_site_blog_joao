## Initial Configs

npm init -y
npm i -D @11ty/eleventy 
npm i sass npm-run-all --save-dev
npm i D- common-tags

## Estrutura de Diretórios

my_project/
.eleventy.config // 11ty configs
.gitignore
.package.json // Scripts config
.package.lock.json

 /src
  /_data
  /_includes
    /components
    /layouts
     base.html
    header.html
    basehead.html
    footer.html
  /assets
  /scss
  /blog
   /posts
    post1.md
    post1.md
   index.html
  index.html

## Estrutura do Blog

Blog:

/blog
index.html // página inicial do blog
 /posts // os posts em markdown ficam aqui
  post-1.md
  post-2.md
  ...


## Fazendo o build

1. Rodar o script 'node api.js' // Para fazer o fetch da API Bubble e converter os arquivos para .md
2. Rodar o script 'npm start' // Para fazer o build dos estáticos