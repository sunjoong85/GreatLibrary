module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['clean' , 'hub:client', 'copy:client']);
    grunt.registerTask('client', ['hub:client']);
    grunt.registerTask('monitor', ['concurrent:watch']);
    grunt.registerTask('server', ['exec:server']);
    grunt.registerTask('dev', ['concurrent:dev']);


    grunt.initConfig({
        clean: {
            options: {
                force: true
            },
            dist: {
                src: ['server/resources/*',
                      'client/dist/*']
            }
        },
        hub: {
            // all: {
            //   src: ['projects/*/Gruntfile.js'],
            //   tasks: ['default'],
            // }
            client: {
                src: ['client/gruntfile.js'],
                tasks: ['default']
            },
            clientWatch : {
                src : ['client/gruntfile.js'],
                tasks : ['watch']
            },
            server: {
                //    src: ['projects/widget/Gruntfile.js'],
                //    tasks: ['default']
            }

        },

        copy: {
            client: {
                files: [
                    {expand: true, cwd: 'client/dist', src: ['**/*'], dest: 'server/resources'}
                ]
            }
        },

        watch: {
            client: {
                files: ['client/dist/**.*'],
                tasks: ['copy:client']
            }
        },

        //buggy
        nodemon: {
            dev: {
                script: 'server/server.js',
                ignore: ['resources/**/*']  //grunt nodemon 0.3.0 에서 동작하지 않는 버그.
            }
        },

        exec : {
            server: {
               cmd : function() {
                   return "nodemon --ignore *.png --ignore *.css server/server.js"
               }
            }
        },

        concurrent: {
            watch : {
                tasks: ['hub:clientWatch', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            },

            dev : {
                tasks : ['hub:clientWatch', 'watch' , 'exec:server'],
                options : {
                    logConcurrentOutput: true
                }
            }
        }
    });
}