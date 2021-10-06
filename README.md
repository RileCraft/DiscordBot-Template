# DiscordBot-Template
<a href="https://discord.gg/zqySsESftt"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=black"/></a>
![Version](https://img.shields.io/badge/version-2.0.4-05122A?style=for-the-badge)
<center><img src="https://media.discordapp.net/attachments/774290264764055582/890955909566722048/0001-8574372447_20210924_191019_0000.png" height=200 width=400></center>

# 『 Changelog 』
* Fixed `messageCreate` event.
* Made trigger not case-sensitive.
* Fixed bot.js
* Fixed ready.js

# 『 Currently Known Bugs 』
* None

# 『 Features 』
* Custom command handler with ton of handlers included to make ur life easier!
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
info.loadedButtons[info.loadedButtons.length - 1]
info.loadedSelectMenus[info.loadedSelectMenus.length - 1]
```

# 『 Setup / Configuration 』
* Install the required modules in the `package.json` file using the command `npm i`.
* Fill / Edit the contents of either `config.json` or `.env`.
* Make sure you have read the `Important Notes` sector.

# 『 Examples 』
## Normal Command
```js
module.exports = {
    name : 'ping', // Name of command
    // Check below for avaliable optional options that can be used here.
    run : async(client, message, args, Discord) => {
    	// Your code here.
    }
}      
```
### Avaliable Options for Normal Commands
`ownerOnly: true / false`
* Default: `false`. 
* When true, The command will only be runnable by the bot owner.

`cooldown: Time in ms`
* Default: `0`.
* Sets up a global user cooldown for the command for the provided time limit.

`userPermissions: ["SEND_MESSAGES" . . .]`
* Default: `None`.
* The user of the command must have all of the provided permissions to be able to run the command. **Permission(s) names must be in full capital**.

`clientPermissions: ["SEND_MESSAGES" . . .]`
* Default: `None`.
* The client must have all of the provided permissions to be able to run the command. **Permission(s) names must be in full capital**.

`anyUserPermissions: ["SEND_MESSAGES" . . .]`
* Default: `None`.
* The user of the command must any one of the provided permissions to be able to run the command. **Permission(s) names must be in full capital**.

`anyClientPermissions: ["SEND_MESSAGES" . . .]`
* Default: `None`.
* The client must any one of the provided permissions to be able to run the command. **Permission(s) names must be in full capital**.

`guildOnly: true / false`
* Default: `true`.
* When false, The command will be able to be run in DMs as well.

`allowBots: true / false`
* Default: `false`.
* When true, Bots will also be able to run the command.

`onlyUsers: ["User ID", "User ID" . . .]`
* Default: `None`
* Only the provided user IDs will be able to run the command.

`onlyRoles: ["Role ID", "Role ID" . . .]`
* Default: `None`
* Only the users with one of the provided roles will be able to run the command.

`onlyChannels: ["Channel ID", "Channel ID" . . .]`
* Default: `None`
* The command will only be able to be run in the provided channels.

`onlyGuilds: ["Server ID", "Server ID" . . .]`
* Default: `None`
* The command will only be able to be run in the provided guilds.

### Return Errors Options
These are a part of the above options. You can choose which option should give the error and which option shouldn't.

`returnCooldownError: true / false`
* Default: `true`
* When false, The error message sent by the `cooldown handler` will not be sent.

`returnOwnerOnlyError: true / false`
* Default: `true`
* When false, The error message sent by the `ownerOnly handler` will not be sent.

`returnUserPermissionsError: true / false`
* Default: `true`
* When false, The error message sent by the `userPermissions handler` will not be sent.

`returnClientPermissionsError: true / false`
* Default: `true`
* When false, The error message sent by the `clientPermissions handler` will not be sent.

`returnAnyUserPermissionsError: true / false`
* Default: `true`
* When false, The error message sent by the `anyUserPermissions handler` will not be sent.

`returnAnyClientPermissionsError: true / false`
* Default: `true`
* When false, The error message sent by the `anyClientPermissions handler` will not be sent.

`returnOnlyUsersError: true / false`
* Default: `true`
* When false, The error message sent by the `onlyUsers handler` will not be sent.

`returnOnlyRolesError: true / false`
* Default: `true`
* When false, The error message sent by the `onlyRoles handler` will not be sent.

`returnOnlyChannelsError: true / false`
* Default: `true`
* When false, The error message sent by the `onlyChannels handler` will not be sent.

`returnOnlyGuildsError: true / false`
* Default: `true`
* When false, The error message sent by the `onlyGuilds handler` will not be sent.

## Events
### Client Event
```js
module.exports = {
	name: 'messageDelete', // Name of event that is executed.
	once: true, // Execute event only once. Default: False.
	run: async(client, message) => { // Your event args.) {
		// Event Code
	},
};
```

### Non Client Event
```js
module.exports = {
	custom: true,
	run: async(client) => {
		client.distube.on("error", (message, error) => {
		console.error(error)
            })
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
    ownerOnly: true, // Only bot owner can execute. Default: False.
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
