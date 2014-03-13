"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['src/scripts/**/*.js'],
        // the location of the resulting JS file
        dest: 'app/scripts/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: false, cwd: 'src/views/', src: ['**'], dest: 'app/views/'},
          {expand: true, flatten: false, cwd: 'src/', src: ['*.html'], dest: 'app/'}
        ]
      }
    },
    jshint: {
       ignore_warning: {
        options: {
          '-W032': true,
          '-W097': true,
        },
        src: ['src/scripts/**/*.js'],
      },
      // define the files to lint
      files: ['gruntfile.js', 'src/scripts/**/*.js', 'test/spec/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        "globalstrict" : true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          angular: true,
          describe: true,
          beforeEach: true,
          inject: true,
          it: true,
          expect: true
        },
        force : true,
      }
    },
    less: {
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true
        },
        files: {
          "app/styles/<%= pkg.name %>.css": "src/styles/*.less"
        }
      }
    },
    watch: {
      files: ['src/styles/*.less', 'src/scripts/**/*.js', 'test/spec/**/*.js', 'src/views/**/*.html', 'src/*.html'],
      tasks: ['jshint', 'copy', 'less', 'concat'],
      options: {
        livereload: true,
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // this would be run by typing "grunt test" on the command line
  //grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'copy', 'less', 'concat']);

};