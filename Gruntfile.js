/*globals module, require*/

module.exports = function (grunt) {
	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		clean: {
			build: {
				src: ["dist/*.min.js"]
			}
		},
		jslint: {
			build: {
				src: ["**/*.js"],
				exclude: ["dist/*.min.js", "node_modules/**/*.js", "demo/components/**/*.js"],
				directives: {
					white: true
				},
				options: {
					failOnError: false
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
						' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
			},
			build: {
				files: {
					"dist/<%= pkg.name %>.min.js": ["src/*.js"]
				}
			}
		},
		watch: {
			scripts: {
				files: ["Gruntfile.js", "src/*.js", "test/*.js"],
				tasks: ["jslint"]
			}
		}
	});

	grunt.registerTask("default", ["clean", "jslint", "uglify"]);
};