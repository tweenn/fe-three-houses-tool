
const gulp = require('gulp');

const del = require('del');

const watchers = {};

const paths = {
	dist: './dist',
	src: './src',
	processors: {}
}

paths.processors = {
	html: [
		`${paths.src}/**/*.html`
	],
	css: [
		`${paths.src}/**/*.css`
	],
	js: [
		`${paths.src}/**/*.js`
	],
	img: [
		`${paths.src}/**/*.jpg`,
		`${paths.src}/**/*.png`
	],
	json: [
		`${paths.src}/**/*.json`
	]
}

gulp.task('clean:dist', (done) => {
	del.sync([paths.dist + '/*']);
	done();
});

gulp.task('render:html', (done) => {
	return gulp.src(paths.processors.html)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:js', (done) => {
	return gulp.src(paths.processors.js)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:css', (done) => {
	return gulp.src(paths.processors.css)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:img', (done) => {
	return gulp.src(paths.processors.img)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:json', (done) => {
	return gulp.src(paths.processors.json)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('render:all', gulp.series(
	'render:html',
	'render:js',
	'render:css',
	'render:json',
	'render:img'
));

gulp.task('watch:html', (done) => {
	watchers.html = gulp.watch(paths.processors.html, gulp.series('render:html'));
	done();
});

gulp.task('watch:css', (done) => {
	watchers.css = gulp.watch(paths.processors.css, gulp.series('render:css'));
	done();
});

gulp.task('watch:js', (done) => {
	watchers.js = gulp.watch(paths.processors.js, gulp.series('render:js'));
	done();
});

gulp.task('watch:img', (done) => {
	watchers.img = gulp.watch(paths.processors.img, gulp.series('render:img'));
	done();
});

gulp.task('watch:json', (done) => {
	watchers.json = gulp.watch(paths.processors.json, gulp.series('render:json'));
	done();
});


gulp.task('watch:all', gulp.series(
	'watch:html',
	'watch:js',
	'watch:css',
	'watch:img',
	'watch:json',
));

gulp.task('default', gulp.series(
	'render:all'
));

gulp.task('clean',
	gulp.series(
		'clean:dist'
	)
);
