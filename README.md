# sound-social

a WIP

## instructions
- `git clone <this_repo> <name>` 
- `cd <name>/code/web-app`
- `yarn install`
- `yarn dev`
- (in separate shell) `cd <name>/code/api`
- `yarn install`
- `yarn dev`
- good luck!

## Notes

I found @matteodem's repo while looking for examples of projects using a combintion of `graphql`, `vue`, `mongo` backend, and optionally `apollo`. It's helpful to see a small app that ties everything together. I had some trouble compiling/running it without making some changes to the deps in `code/web-app/packages.json`.

It works - for now. 

If you encounter compilation problems with web-app, try `yarn install vue-cli`. Doing so cured the compile errors I was experiencing before I figured out which node/vue/webpack packages in particular were underspecified in package.json (should be fixed in this commit).

### Details

I couldn't get [matteodem/vue-apollo-bug@9cff511](https://github.com/matteodem/vue-apollo-bug/commit/9cff51136e0e6d9a480883578df9f554f751a610) to compile (lots of cryptic webpack/babel errors, ENOENT, missing `loader` modules, etc). I am not sure what the root cause was, but I suspect that dependencies of `vue-play` and `vbuild` at one point satisfied the needs of the main dependancies in `package.json`, but somewhere in the last few months something changed, or was missing, or my local yarn setup doesn't resolve deps the same way as the original authors.

In any case, this version works in both dev (w/ local vbuild 6.24.7 using local webpack 2.3.1) and compiled to `dist/` for production served with `serve dist/`. I'm exclusively using `yarn` to install packages and run the `package.json` script commands.

## changelog
- 2016-03-23 added/upgraded dependancies for successful local dev/prod execution w/ yarn (@100ideas)
