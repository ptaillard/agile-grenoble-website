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
    uglify: {
     options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        compress : true,
      },
      dist: {
        files: {
          'app/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['src/views/**'], dest: 'app/views/'},
          {expand: true, src: ['src/index.html'], dest: 'app/'}
        ]
      }
    },
    jshint: {
       ignore_warning: {
        options: {
          '-W032': true,
        },
        src: ['src/scripts/**/*.js'],
      },
      // define the files to lint
      files: ['gruntfile.js', 'src/scripts/**/*.js', 'test/spec/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        force : true,
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "app/styles/<%= pkg.name %>.css": "src/styles/*.less"
        }
      },
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
      files: ['src/styles/*.less', 'src/scripts/**/*.js', 'test/spec/**/*.js', 'app/*.html'],
      tasks: ['jshint', 'less', 'concat', 'uglify'],
      options: {
        livereload: true,
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // this would be run by typing "grunt test" on the command line
  //grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'less', 'concat', 'uglify']);

};