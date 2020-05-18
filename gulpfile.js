
const gulp = require('gulp');

const del = require('del');

const watchers = {};

const paths = {
	dist: './dist',
	src: './src'
}

gulp.task('render:html', (done) => {
	return gulp.src(`${paths.src}/**/*.html`)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:js', (done) => {
	return gulp.src(`${paths.src}/**/*.js`)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:css', (done) => {
	return gulp.src(`${paths.src}/**/*.css`)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:img', (done) => {
	return gulp.src([
		`${paths.src}/**/*.jpg`,
		`${paths.src}/**/*.png`
	])
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:json', (done) => {
	return gulp.src(`${paths.src}/**/*.json`)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:all', gulp.series(
	'render:html',
	'render:js',
	'render:css',
	'render:json',
	'render:img'
));

gulp.task('default', gulp.series(
	'render:all'
));

gulp.task('clean:dist', (done) => {
	del.sync([paths.dist + '/*']);
	done();
});

gulp.task('clean',
	gulp.series(
		'clean:dist'
	)
);
