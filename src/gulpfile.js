var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var env = require('gulp-env')

gulp.task('dev', gulp.series(_ => {
  env({
    vars: {
      NODE_ENV: 'development',
      env_config: 'dev'
    }
  })

  nodemon({ script: 'build/build.js', watch: false })
    .on('restart', () => console.log('restarted!'))
    .on('crash', () => process.exit(1))
}));

gulp.task('prod', gulp.series(_ => {
  env({
    vars: {
      NODE_ENV: 'production',
      env_config: 'prod'
    }
  })

  nodemon({ script: 'build/build.js', watch: false })
    .on('restart', () => console.log('restarted!'))
    .on('crash', () => process.exit(1))
}))
gulp.task('default', gulp.series('dev'))