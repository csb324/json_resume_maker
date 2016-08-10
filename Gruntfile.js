/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      handlebars: {
        files: ['src/templates/**/*.hbs'],
        tasks: ['handlebars']
      },
      sass: {
        files: ['src/styles/style.scss'],
        tasks: ['sass']
      },

      html: {
        files: ['src/index.html'],
        tasks: ['copy:html']
      },

      data: {
        files: ['src/data/**/*.js'],
        tasks: ['copy:data']
      },

      page: {
        files: ['dest/**/*'],
        options: {
          livereload: true
        }
      },
    },

    handlebars: {
      compile: {
        files: {
          'dest/template.js': ['src/templates/**/*.hbs']
        }
      }
    },

    sass: {
      compile: {
        files: {
          'dest/style.css': 'src/styles/style.scss'
        }
      }
    },

    connect: {
      server: {
        livereload: true,
        base: 'dest',
        open: true
      }
    },
    copy: {
      html: {
        files: [
          {
            expand: true, 
            cwd: 'src/',
            src: ['index.html'], 
            dest: 'dest/'
          },
        ]
      },
      data: {
        files: [
          {
            expand: true, 
            cwd: 'src/',
            src: ['data/*'], 
            dest: 'dest/'
          }
        ]
      }
    }
  });

  require('jit-grunt')(grunt);

  // Default task.
  grunt.registerTask('run', ['handlebars', 'sass', 'copy']);
  grunt.registerTask('default', ['connect', 'run', 'watch']);

};
