'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'A ' + chalk.red('Adamantium structure') + ' for front-end developers!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    scaffoldFolders: function(){
      this.mkdir("app");
      this.mkdir("app/assets");
      this.mkdir("app/assets/scripts");
      this.mkdir("app/assets/styles");
      this.mkdir("app/assets/styles/core");
      this.mkdir("app/assets/styles/patterns");
      this.mkdir("app/assets/fonts");
      this.mkdir("app/assets/images");
    },

    projectfiles: function(){
      this.copy("_index.html", "app/index.html");
      this.copy("styles/_patterns.scss", "app/assets/styles/patterns/_patterns.scss");
      this.copy("styles/_core.scss", "app/assets/styles/core/_core.scss");
      this.copy("styles/_normalize.scss", "app/assets/styles/core/_normalize.scss");
      this.copy("styles/_normalize.scss", "app/assets/styles/core/_normalize.scss");
      this.copy("styles/_variables.scss", "app/assets/styles/core/_variables.scss");
      this.copy("scripts/_main.js", "app/assets/scripts/main.js");
      this.copy("_gruntfile.js", "Gruntfile.js");
      this.copy("editorconfig", ".editorconfig");     
      this.copy("jshintrc", ".jshintrc");
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
