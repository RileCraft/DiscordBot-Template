# **Changelog for 6.0.0**
* The old global variable `ROOT` no longer exists.
* There is a new object called `container` which is passed through events and commands. It contains:
- Discord. (`require("discord.js")`)
- Config.  (`Config file`)
- RootPath (`Root path of the main file.`)
* This is **__NOT__** a global variable. 
* To access `Discord` you have to now use `container.Discord` instead of old `Discord`. `Discord` is no longer passed through command or event handlers.
* So people don't have to `require()` all these things whenever they use the eval command, `container` object has been passed to `this` in the eval command. This means you can just do `this.Discord` to access it instead of having to do `require("discord.js")` all the time.
* There is a new dependency which is `cli-box`. It is used to make the new fancy console log on startup. If you don't want the new startup style then keep the old code and just remove `cli-box` from your `package.json`.
* Not everything has been tested so there can be bugs with the new system, So please report the bugs whenever you find one. Reports bugs in our discord or make a issue on github.