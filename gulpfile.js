'use strict';

var gulp = require('gulp');
var mangacoreTasks = require('mangacore-build');

mangacoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
