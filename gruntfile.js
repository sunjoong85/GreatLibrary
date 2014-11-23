module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('client', ['hub:client']);
    grunt.registerTask('monitor', ['concurrent:watch']);

    grunt.initConfig({
        clean: {
            options: {
                force: true
            },
            dist: {
                src: ["dist/*"]
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

        nodemon: {
            dev: {
                script: 'server/server.js'
            }
        },

        concurrent: {
            watch : {
                tasks: ['hub:clientWatch', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });
}