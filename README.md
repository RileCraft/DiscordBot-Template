# DiscordBot-Template
<a href="https://discord.gg/zqySsESftt"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=black"/></a>
![Version](https://img.shields.io/badge/version-1.1.3-05122A?style=for-the-badge)
<img src="https://media.discordapp.net/attachments/774290264764055582/890955909566722048/0001-8574372447_20210924_191019_0000.png" height=200 width=400>

# 『 Changelog 』
* Added `.env` support.
* Added support for non discord client events.
* Fixed bugs that could crash the server.
* Revamped FilePaths.

# 『 Features 』
* Custom command handler with `guildOnly` , `allowBots` , `onlyOwner` , `User Permissions`, `Client Permissions` handlers included!
* Custom event handler , button handler and selectmenu handler too!
* Given reload commands with other main dev commands.
* Organized layout.
* Easily customizable.
* Chalk logging.

# 『 Important Notes 』
* This is made in **Discord.JS V13** and if you want to use this in V12 then you would have to do changes.
* Recommended NodeJS V16+.
* If you want to change the `ready` event then remember that the `class Handler` exports arrays of the loaded events , commands and aliases count. To get the correct value then do like this.
```js
const info = require(Path to class file)
info.loadedCmds[info.loadedCmds.length - 1]
info.loadedEvents[info.loadedEvents.length - 1]
info.loadedAliases[info.loadedAliases.length - 1]
```

# 『 Setup / Configuration 』
* Install the required modules in the `package.json` file using the command `npm i`.
* Fill / Edit the config.json enteries.
* Make sure you have read the `Important Notes` sector.

# 『 Examples 』
## Normal Command
```js
module.exports = {
    name : 'ping', // Name of command
    run : async(client, message, args, Discord) => {
    	// Your code here.
    }
}      
```

## Events
```js
module.exports = {
	name: 'songAdd', // Name of event that is executed.
	once: true, // Execute event only once. Default: False.
	eventOf: "distube", // Default: client,
	execute(client, message, song // Your event args.) {
		// Event Code
	},
};
```

## Button Commands
```js
module.exports = {
    name : 'evalbtn', // Must be same as button's Custom Id
    ownerOnly: true, // Only bot owner can execute. Default: False.
    run : async(client, button) => {
// Your button code.
    }
}     
```

## SelectMenu Commands
```js
module.exports = {
    name : 'fun', // Should be same as Menu Custom Id or The menu options set values.
    run : async(client, menu) => {
    	// Your menu code.
    }
}     
```

# 『 Contribution 』
If you want to contribute towards this repository then follow these steps.
* Fork this Repository.
* Edit your fork and save the changes you want to make.
* Open the pull request.
* We will check out the code and if it is fine then your PR will be merged.
