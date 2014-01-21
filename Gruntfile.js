// Generated on 2013-08-28 using generator-webapp 0.4.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	  // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var devConfig = {
        app: 'app',
        dist: 'dist'
    };

	//Project Configuration
	grunt.initConfig({
		app:devConfig,

		pkg: grunt.file.readJSON('package.json'),

		//minify js
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			scripts: {
				files: {
					'<%= app.app %>/scripts/build/app.min.js' : [ '<%= app.app %>/scripts/src/*.js' ]
				}
			}
		},

		jshint: {
		  	dist: ['<%= app.app %>/scripts/src/*.js']
		},

	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['<%= app.app %>/scripts/src/*.js'],
	      dest: '<%= app.app %>/scripts/build/app.min.js',
	    },
	  },

    compass : {
      dev : {
        options: {
          sassDir: 'sass',
          cssDir:'<%= app.app %>/stylesheet',
          imagesDir:'<%= app.pp %>/images',
          fontsDir:'<%= app.pp %>/fonts'
        }
      }
    },

		watch: {
			jshint : {
			  	files: ['<%= app.app %>/scripts/src/*.js'],
			  	tasks: ['jshint']
			},

		  concat: {
		  	files: ['<%= app.app %>/scripts/src/*.js'],
		  	tasks: ['concat']
		  },

      compass: {
        files:['sass/**/*.*'],
        tasks:['compass:dev']
      },


      livereload: {
        options: {
            livereload: LIVERELOAD_PORT
        },
        files: [
          devConfig.app + '/**/*.*',
        ]
      }
		},

    connect: {
	    options: {
	        port: 9000,
	        // change this to '0.0.0.0' to access the server from outside
	        hostname: 'localhost'
	    },
	    livereload: {
	        options: {
	            middleware: function (connect) {
	                return [
	                    lrSnippet,
	                    mountFolder(connect, '.tmp'),
	                    mountFolder(connect, devConfig.app)
	                ];
	            }
	        }
	    },
		},
		open: {
		    server: {
		        path: 'http://localhost:<%= connect.options.port %>'
		    }
		},

    concurrent: {
    server: [
            'concat',
        ]
    },
	});
    
   grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
        	'concurrent:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};
