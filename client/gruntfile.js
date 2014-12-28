module.exports = function(grunt) {

    grunt.file.setBase('../');

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-html2js');

	// Default tasks.
	grunt.registerTask('default', [ 'clean', 'concat', 'html2js', 'copy']);
    grunt.registerTask('bower', [])
	grunt.registerTask('release', ['']);


	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		baseDir: 'client/src',
		distDir: 'client/dist',
		src: {
			js: ['<%=baseDir%>/app/**/*.js', '!<%=baseDir%>/app/**/*_test.js'],
			css:['<%=baseDir%>/asset/css/**/*.css'],
			img:['<%=baseDir%>/asset/img/**/*.*'],
			font:['<%=baseDir%>/asset/font/**/*.*'],
			tpl: ['<%=baseDir%>/app/**/*.tpl.html'],
			json: ['<%=baseDir%>/app/**/*.json']
		},

        clean: ['<%=distDir%>'],

        //여러개의 파일을 하나로 합침
		concat : {
            default : {
				src: ['<%=src.js%>'],
				dest: '<%=distDir%>/<%=pkg.name%>.js'
			},
			angularjs: {
				src: [
					'<%=baseDir%>/asset/lib/angularjs/angular.js',
					'<%=baseDir%>/asset/lib/angularjs/angular-route.js'
				],
				dest: '<%=distDir%>/lib/angularjs/angular.custom.js'
			}

		},

        //minfied 함
		uglify : {
			default : {
				options: {
			      	mangle: false
			    },
				src: '<%=src.js%>',
				dest: '<%=distDir%>/<%=pkg.name%>.min.js'
			}
		},

        //Angular Template 을 js 파일로 변환
		html2js: {
			default: {
				options: {
		          	base: '<%=baseDir%>/app',
					rename: function(moduleName) {
			        	return moduleName; 
			        }
		        },
				src: ['<%=src.tpl%>', '<%=src.json%>'],
		        dest: '<%=distDir%>/<%=pkg.name%>.templates.js',
		        module: 'app.templates'
			}
		},

		copy: {
                css : {
                    files : [
                        {
                            dest: '<%=distDir%>/css',
                            src: ['**/*.css', '!**/*.min.css' , '!**/*.map.css'],
                            cwd: '<%=baseDir%>/asset/css',
                            expand: true
                        }
                    ]
                },
                img : {
                    files : [
                        {
                            dest: '<%=distDir%>/img',
                            src:['**/*'],
                            cwd: '<%=baseDir%>/asset/img',
                            expand: true
                        }
                    ]
                },
                font : {
                    files : [
                        {
                            dest: '<%=distDir%>/font',
                            src: ['**/*'],
                            cwd: '<%=baseDir%>/asset/font',
                            expand: true
                        }
                    ]
                },
                bootstrap : {
                    files : [
                        {
                            dest: '<%=distDir%>/font',
                            src: ['*.*'],
                            cwd: '<%=baseDir%>/asset/lib/bootstrap/fonts',
                            expand: true
                        },
                        {
                            dest: '<%=distDir%>/css',
                            src: ['*.css' , '!*.min.css' , '*.css.map'],
                            cwd: '<%=baseDir%>/asset/lib/bootstrap/css',
                            expand: true
                        },
                        {
                            dest: '<%=distDir%>/lib',
                            src: ['angular-bootstrap*/*.js'],
                            cwd: '<%=baseDir%>/asset/lib',
                            expand: true
                        },
                        {
                            dest: '<%=distDir%>/lib/bootstrap',
                            src: ['boot*.js'],
                            cwd: '<%=baseDir%>/asset/lib/bootstrap/js',
                            expand: true
                        }
                    ]
                },
                jquery : {
                    files : [
                        {
                            dest: '<%=distDir%>/lib/jquery',
                            src: ['*.*'],
                            cwd: '<%=baseDir%>/asset/lib/jquery',
                            expand: true
                        }]
                },
                index: {
                    files: [
                        {
                            dest: '<%=distDir%>/',
                            src: ['index.html'],
                            cwd: '<%=baseDir%>/',
                            expand: true
                        }
                    ]
                }

		},
		less: {
			default: {
				options: {
					compile: false,
					compress: true
		        },
		        src: ['<%=src.css%>'],
		        dest: '<%=distDir%>/<%=pkg.name%>.min.css'
			}
		},
		watch:{
			js: {
				files: ['<%=src.js%>'],
		        tasks: ['concat:default']
			},
			css: {
				files: ['<%=src.css%>'],
				tasks: [/*'less'*/ 'copy:css']
			},
            img: {
                files: ['<%=src.img%>'],
                tasks: [/*'less'*/ 'copy:img']
            },
            font: {
                files: ['<%=src.font%>'],
                tasks: [/*'less'*/ 'copy:font']
            },
			tpl: {
				files: ['<%=src.tpl%>', '<%=src.json%>'],
				tasks: ['html2js']
			},
			index: {
				files: ['<%=baseDir%>/index.html'], 
				tasks: ['copy:index']
			},
			configFiles: {
    			files: ['client/gruntfile.js'],
    			options: {
      				reload: true
    			}
  			}
		}
	});
};