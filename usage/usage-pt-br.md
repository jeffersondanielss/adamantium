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

  <!-- build:css(.tmp) assets/styles/other-application.css -->
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

#### PageSpeed insights
Antes de executar isto procure no Gruntfile.js por __options__ em __pagespeed__ e altere __yoursite.com__ por sua url, e logo em seguida ainda na task pagespeed em __paths__ insira paginas internas do seu site se necessário, como __sobre__, __contaco__, etc.
```sh
$ grunt psi
```

#### livereload
A task está configurada para ser acessada por qualquer dispositivo via wifi, tudo que você precisa fazer é descobrir o IP do seu computador onde você está gerando seu servidor. Para descobrir seu IP digite  __ifconfig__ (OS X) ou __ipconfig__ (Windows) no seu terminal. Para acessar de seu ceulular por exemplo basta usar seu ip mais a porta que está configurada no Gruntfile.js (a porta padrão é 9000). Ex: x.x.x.x:9000.

### Versão
0.0.7
