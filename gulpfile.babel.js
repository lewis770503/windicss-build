// import plugin
const { src, watch, parallel } = require('gulp'),
	shell = require('gulp-shell');
// file paths
const paths = {
	windiStyle: { src: '*.{asp,html}', dest: 'css/style.css' },
};

//windicss
function FnWindiCss() {
	return src(paths.windiStyle.dest).pipe(shell([`windicss ./${paths.windiStyle.src} -to ${paths.windiStyle.dest} -f windi.config.js -m`]));
}

//watch function
function RunWatch() {
	watch(paths.windiStyle.src, FnWindiCss);
}

exports.default = parallel(FnWindiCss, RunWatch);
