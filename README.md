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

### Usage Examples

#### Basic options

Set `uid` and `gid` values for all of your targets.

```js
grunt.initConfig({
  chown: {
    options: {
      uid: 0,
      gid: 0
    },
    targetA: {
      src: ['path/to/a']
    },
    targetB: {
      src: ['path/to/b']
    }
  },
});
```

#### Custom options

Set `uid` and `gid` values per target.

```js
grunt.initConfig({
  chown: {
    options: {
      uid: 0,
      gid: 0
    },
    targetA: {
      options: {
        uid: 501,
        gid: 20
      },
      src: ['path/to/a']
    },
    targetB: {
      options: {
        uid: 504,
        gid: 80
      },
      src: ['path/to/b']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2013-12-16   v0.1.3   revised output log/updated README.md with usage examples
- 2013-12-13   v0.1.2   fixed github URLs
- 2013-12-13   v0.1.1   initial release
