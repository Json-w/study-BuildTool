module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
          src:['js/a.js','js/b.js'],
	  dest: 'dest/built.js'
      }
    },

    uglify: {
      my_target:{
        files:{
	   'dest/output.min.js':['dest/built.js']
	}
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['concat','uglify']);
}
