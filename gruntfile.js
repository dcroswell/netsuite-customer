/**
 * Created by Don on 23/05/2015.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        jshint : {
            files : ['/*.js','libs/**/*.js']
        },
        watch : {
            files : ['/*.js','libs/**/*.js'],
            tasks : ['jshint']
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
