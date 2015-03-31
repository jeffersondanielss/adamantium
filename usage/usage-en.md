### Starting
With this command you view your development environment.
```sh
$ grunt serve
```
####Build
Build your project will generate for production, with all minify files.
```sh
$ grunt build
```

#Features

####Default
* livereload
* js minify
* css minify
* svg minify
* Sass Conversion for css

####grunt-bake
Adamantium is the grunt-bake as an installation option, with it you can do:

 - Includes
 - Requests to .json in his development environment with livereload.
 - IF Statement
 - Foreach Loop
 - and more..

[See more](https://github.com/MathiasPaumgarten/grunt-bake)

#### Easy minification files
Use and abuse of this shortcode to minificar any set of your js files and / or CSS.

```sh
  <!-- build:js({app,.tmp}) assets/scripts/main.js -->
    <script scr="file-1.js"></script>
    <script scr="file-2.js"></script>
  <!-- endbuild -->

```
>  It will result in: dist/assets/scipts/main.js  with all files together and minify.

it works for the css:

```sh
// app/assets/styles/file-1.scss and app/assets/styles/file-2.scss

  <!-- build:js({app,.tmp}) assets/styles/other-application.css -->
    <script scr="file-1.css"></script>
    <script scr="file-2.css"></script>
  <!-- endbuild -->

```
> It will result in: dist/assets/styles/other-application.css with all files together and minify.

#### autoprefixer
With autoprefixer as dependence is no need to put all prefixes browsers for CSS3 selectors. With just dial it includes all the prefixes that are needed.
Ex:

```sh
selector: 0.5s linear;
// Result with the required prefixes
selector: 0.5s linear;
-webkit-seletor: 0.5s linear;
```

####jshint
JSHint is a community-driven tool to detect errors and potential problems in JavaScript code. It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in.

### Version
0.0.7

>Translated by Google translate
