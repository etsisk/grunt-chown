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
    var options = this.options({ uid: 32767, gid: 32767 }),
		uid = options.uid,
		gid = options.gid,
		fs;
	
	if ( typeof uid !== 'number' ) {
		grunt.fail.warn( 'Value of `uid` must be an unsigned integer.' );
	}
	
	if ( typeof gid !== 'number' ) {
		grunt.fail.warn( 'Value of `gid` must be an unsigned integer.' );
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
                fs.chownSync( filepath, uid, gid );
            } catch (e) {
                grunt.fail.warn( e + ' on file "' + filepath + '".' );
            }
        }
      });

      // Print a success message.
      grunt.log.ok( 'File "' + f.src + '" uid set to "' + uid + '".' );
      grunt.log.ok( 'File "' + f.src + '" gid set to "' + gid + '".' );
    });
  });

};
