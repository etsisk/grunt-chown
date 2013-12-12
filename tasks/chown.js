/*
 * grunt-chown
 * https://github.com/eamonsisk/grunt-chown
 *
 * Copyright (c) 2013 Eamon Sisk
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('chown', 'A Grunt plugin that allows you to change the owner of a file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({ owner: '' }),
		owner = options.owner,
		fs;
		
	if ( !owner ) {
		grunt.fail.warn( 'No `owner` was specified in the task `options`.' );
	}
	
	if ( typeof owner !== 'string' ) {
		grunt.fail.warn( 'Value of `owner` must be a string.' );
	}

	fs = require( 'fs' );
    // Iterate over all specified file groups.
    this.files.forEach( function(f) {
      // Concat specified files.
      var src = f.src.filter( function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if ( !grunt.file.exists( filepath ) ) {
          grunt.log.warn( 'Source file "' + filepath + '" not found.' );
          return false;
        } else {
            try {
                fs.chownSync( filepath, owner );
            } catch (e) {
                grunt.fail.warn( e + ' on file "' + filepath + '".' );
            }
        }
      });

      // Print a success message.
      grunt.log.ok( 'File "' + f.src + '" owner set to "' + owner + '".' );
    });
  });

};
