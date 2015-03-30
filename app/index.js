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
      'A ' + chalk.blue('Adamantium') + ' structure for front-end developers!'
    ));

    var prompts = [

    {
      type: 'confirm',
      name: 'gruntbake',
      message: chalk.green('->') + ' Would you like to install grunt-bake?',
      default: false
    }
    ,{
      type: 'confirm',
      name: 'jqueryvalidate',
      message: chalk.green('->') + ' and the jquery-validate?',
      default: false
    }

    ];

    this.prompt(prompts, function (props) {
      this.gruntbake = props.gruntbake;
      this.jqueryvalidate = props.jqueryvalidate;

      if(props.gruntbake) {
        this.log('Instala grunt-bake');
        this.npmInstall(['grunt-bake'], { 'saveDev': true });
      }

      if(props.jqueryvalidate) {
        this.log('Instala jquery-validate');
        this.bowerInstall('jquery-validate --save-dev');
      }

      done();
    }.bind(this));
  },

  writing: {
    scaffoldFolders: function(){
      this.mkdir('app');
      this.mkdir('app/assets');
      this.mkdir('app/assets/scripts');
      this.mkdir('app/assets/styles');
      this.mkdir('app/assets/styles/core');
      this.mkdir('app/assets/styles/patterns');
      this.mkdir('app/assets/fonts');
      this.mkdir('app/assets/images');
    },

    projectfiles: function(){
      this.copy('_index.html', 'app/index.html');
      this.copy('styles/_patterns.scss', 'app/assets/styles/patterns/_patterns.scss');
      this.copy('styles/_core.scss', 'app/assets/styles/core/_core.scss');
      this.copy('styles/_normalize.scss', 'app/assets/styles/core/_normalize.scss');
      this.copy('styles/_fonts.scss', 'app/assets/styles/core/_fonts.scss');
      this.copy('styles/_variables.scss', 'app/assets/styles/core/_variables.scss');
      this.copy('styles/_main.scss', 'app/assets/styles/main.scss');
      this.copy('scripts/_main.js', 'app/assets/scripts/main.js');

      this.copy('_package.json', 'package.json');
      this.copy('_bower.json', 'bower.json');
      this.copy('_gruntfile.js', 'Gruntfile.js');
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
      this.copy('_gitignore', '.gitignore');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
