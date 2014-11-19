module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default tasks.
	grunt.registerTask('default', [ 'clean', 'copy']);

	grunt.initConfig({
		baseDir: 'bower_components',
		distDir: 'src/asset/lib',

        clean: ['<%= distDir %>'],

		copy: {
                angular: {
                    files: [
                        {
                            dest: '<%=distDir%>/image',
                            src:['**/*'],
                            cwd: '<%=baseDir%>/asset/image',
                            expand: true
                        },
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
                            src: ['*.*'],
                            cwd: '<%=baseDir%>/asset/lib/bootstrap/css',
                            expand: true
                        }
                    ]
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
		        src: ['<%= src.css %>'],
		        dest: '<%=distDir%>/<%=pkg.name%>.min.css'
			}
		},
		watch:{
			js: {
				files: ['<%= src.js %>'],
		        tasks: ['concat:default']
			},
			css: {
				files: ['<%= src.css %>'], 
				tasks: ['less']
			},
			tpl: {
				files: ['<%= src.tpl %>', '<%= src.json%>'],
				tasks: ['html2js']
			},
			index: {
				files: ['<%=baseDir%>/index.html'], 
				tasks: ['copy:index']
			},
			configFiles: {
    			files: ['gruntfile.js'],
    			options: {
      				reload: true
    			}
  			}
		}
	});
};