/**
 * Created with JetBrains WebStorm.
 * User: z33m
 * Date: 6/11/13
 * Time: 1:32 AM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(grunt) {
    var jsFiles = [
        "src/utils.js",
        "src/core.js",
        "src/exprparser.js",
        "build/pegs_expr_parser.js",
        "src/effectlist.js",
        "src/dancer_adapter.js",
        "src/misc/*.js",
        "src/render/*.js",
        "src/trans/*.js"
    ];

    var libFiles = [
        "bower_components/underscore/underscore.js",
        "bower_components/D.js/lib/D.js",
        "bower_components/dancer.js/lib/fft.js",
        "bower_components/dancer.js/dancer.js",
        "bower_components/stats.js/src/Stats.js"
    ];

    grunt.initConfig({
        jshint: {
            files: ["Gruntfile.js", "src/**/*.js"],
            options: {
                globals: {
                    Webvs: true
                },
                evil: true
            }
        },

        peg: {
            expr_lang: {
                grammar: "src/expr_grammar.pegjs",
                outputFile: "build/pegs_expr_parser.js",
                exportVar: "Webvs.PegExprParser",
                options: {
                    trackLineAndColumn : true,
                    cache: true
                }
            }
        },

        karma: {
            webvs: {
                configFile: "karma.conf.js"//,
                //background: true
            }
        },

        watch: {
            scripts: {
                files: ["src/**/*.js"],
                tasks: ["default"]
            }
        },

        concat: {
            dev: {
                files: {
                    "build/webvs.js": jsFiles,
                    "build/libs.js": libFiles
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "dist/webvs.min.js": jsFiles,
                    "dist/libs.min.js": libFiles,
                    "dist/webvs.full.min.js": libFiles.concat(jsFiles)
                }
            }
        },

        clean: {
            dev: ["build/*"],
            dist: ["dist/*"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-peg");
    grunt.loadNpmTasks("grunt-karma");

    grunt.registerTask('default', ['clean:dev', 'jshint', 'peg', 'concat:dev']);
    grunt.registerTask("w", ["default", "watch"]);
    grunt.registerTask('dist', ['clean:dist', 'jshint', 'peg', 'uglify:dist']);
};
