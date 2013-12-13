# grunt-chown

> A Grunt plugin that allows you to change the owner of a file.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-chown --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chown');
```

## The "chown" task

### Overview
In your project's Gruntfile, add a section named `chown` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  chown: {
    options: {
      uid: 0,
      gid: 0
    },
    target: {
      src: ['path/to/file']
    },
  },
});
```

### Options

#### options.uid
Type: `Number`
Default value: 32767

A number value that is used to set the user id.

#### options.gid
Type: `Number`
Default value: 32767

A number value that is used to set the group id.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2012-05-01   v0.1.1   initial release
