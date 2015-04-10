'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var path = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    path: path,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= path.app %>/assets/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      bake: {
        files: [ '<%= path.app %>/develop/**', '<%= path.app %>/content.json'  ],
        tasks: 'bake:build'
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= path.app %>/assets/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= path.app %>/assets/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= path.app %>/{,*/}*.html',
          '.tmp/assets/styles/{,*/}*.css',
          '<%= path.app %>/images/{,*/}*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        livereload: true,
        hostname: '*',
        open: {
          target: 'http://127.0.0.1:9000'
        },
        port: 9000,
        useAvailablePort: true
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(path.app)
            ];
          }
        }
      },
      test: {
        options: {
          open: false,
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(path.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= path.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= path.dist %>/*',
            '!<%= path.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= path.app %>/assets/scripts/{,*/}*.js',
        '!<%= path.app %>/assets/scripts/vendor/*'
      ]
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= path.app %>/assets/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/assets/styles',
          ext: '.css'
        }]
      },

      server: {
        files: [{
          expand: true,
          cwd: '<%= path.app %>/assets/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/assets/styles',
          ext: '.css'
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/assets/styles/'
        }]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= path.dist %>'
      },
      html: '<%= path.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= path.dist %>',
          '<%= path.dist %>/assets/images',
          '<%= path.dist %>/assets/styles'
        ]
      },
      html: ['<%= path.dist %>/{,*/}*.html'],
      css: ['<%= path.dist %>/assets/styles/{,*/}*.css']
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= path.app %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= path.dist %>/assets/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= path.dist %>',
          src: '{,*/}*.html',
          dest: '<%= path.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= path.dist %>/styles/main.css': [
    //         '.tmp/assets/styles/{,*/}*.css',
    //         '<%= path.app %>/assets/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= path.app %>',
          dest: '<%= path.dist %>',
          src: [
            '*.{ico,png,txt}',
            'assets/images/{,*/}*.*',
            '{,*/}*.html',
            'assets/fonts/{,*/}*.*',
            '!develop/**.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= path.app %>/assets/styles',
        dest: '.tmp/assets/styles/',
        src: '{,*/}*.css'
      }
    },

    bake: {
      build: {
      options: {
        basePath: '<%= path.app %>/',
        content: '<%= path.app %>/content.json'
      },
      files: {
        '<%= path.app %>/index.html': '<%= path.app %>/develop/index.dev.html'
      }
      },
    },

    pagespeed: {
      options: {
        nokey: true,
        url: 'http://yoursite.com'
      },
      prod: {
        options: {
          url: 'http://yoursite.com',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ['/download', '/documentation', '/about'],
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: 'http://yoursite.com'
      },
      prod: {
        options: {
          url: 'http://yoursite.com',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ['/download', '/documentation', '/about'],
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'sass:server',
        'copy:styles'
      ],

      test: [
        'copy:styles'
      ],

      dist: [
        'sass',
        'copy:styles',
        'svgmin'
        ]
      }
    });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bake:build',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch',
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'connect:test'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'bake:build',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'usemin',
    'htmlmin',
  ]);

  grunt.registerTask('psi', [ 'pagespeed' ]);

};

