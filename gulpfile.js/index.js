const gulp = require('gulp');
const gutil = require('gulp-util');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');

marked.setOptions({
    smartypants: true
});

gulp.task('markdown', () => {
    gulp.src('./content/work/**/*.md')
        .pipe(gutil.buffer())
        .pipe(markdownToJSON(marked, 'work.json'))
        .pipe(gulp.dest('./src/work'))
});