module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    jshint: {
        files: [' ./StepDef/httpMethodsStep.js'],
    },

    shell: {  
        commtesand: "node ./StepDef/httpMethodsStep.js"
    },  

    cucumberjs: {
      options: {
        format: "html" ,
        output: 'my_report.html',
         theme: 'bootstrap',
        steps:"StepDef/httpMethodsStep.js",
        launchReport: true,
      },
      my_features: ['Features/FirtsApITest.feature'],
      
    },

    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell'); 
    grunt.loadNpmTasks('grunt-cucumberjs');
    
    
    // Default task(s).
    grunt.registerTask('default', ['jshint']);

    //run shell commands for js 
    grunt.registerTask('APITest', ['shell']);

    //run feature file 
    grunt.registerTask('runapi', ['cucumberjs']);
  
  };