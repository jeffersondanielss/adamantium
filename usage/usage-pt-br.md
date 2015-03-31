### Iniciando
Com esse comando você visualiza seu ambiente de desenvolvimento.
```sh
$ grunt serve
```
####Build
Build vai gerar seu projeto para produção, com todos os arquivos minificados.
```sh
$ grunt build
```

#Features

####Padrao
* livereload
* Minificação de js
* Minificação de css
* Minificação de svg
* Conversão de Sass para css

####grunt-bake
Adamantium vem o grunt-bake como uma opção de instalação, com ele você pode fazer:

  - Includes
  - requisições para .json ainda no seu ambiente de desenvolvimento com livereload.
  - IF Statement
  - Foreach Loop
  - Etc..

[veja mais](https://github.com/MathiasPaumgarten/grunt-bake)

#### Fácil minificação de arquivos
Use e abuse desse shortcode para minificar qualquer conjunto de seus arquivos js e/ou css.
```sh
  <!-- build:js({app,.tmp}) assets/scripts/main.js -->
    <script scr="file-1.js"></script>
    <script scr="file-2.js"></script>
  <!-- endbuild -->

```
> Vai resultar em: dist/assets/scipts/main.js com todos arquivos juntos e minificados.

o mesmo funciona para o css:

```sh
// app/assets/styles/file-1.scss e app/assets/styles/file-2.scss

  <!-- build:js({app,.tmp}) assets/styles/other-application.css -->
    <script scr="file-1.css"></script>
    <script scr="file-2.css"></script>
  <!-- endbuild -->

```
> Vai resultar em: dist/assets/styles/other-application.css com todos arquivos juntos e minificados.

#### autoprefixer
Com o autoprefixer como dependencia não é preciso colocar todos os prefixos dos browsers para seletores CSS3. Com apenas o seletor ele inclui todos os prefixos que são necessarios.
Ex:
```sh
seletor: 0.5s linear;
// Resultado com os prefixos necessários
seletor: 0.5s linear;
-webkit-seletor: 0.5s linear;
```

####jshint
JSHint é uma ferramenta voltada para a comunidade para detectar erros e potenciais problemas no código JavaScript. É muito flexível para que você possa facilmente ajustá-lo às suas diretrizes de codificação específicas e do ambiente que você espera que o seu código para executar.

### Versão
0.0.7
