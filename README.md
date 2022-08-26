<p align="center"><img src="https://media.discordapp.net/attachments/774290264764055582/890955909566722048/0001-8574372447_20210924_191019_0000.png" height=200 width=400><br>
<img src="https://img.shields.io/badge/version-7.0.0-05122A?style=for-the-badge">
<a href="https://discord.gg/VStdRr8nP2"><img src="https://img.shields.io/badge/discord-invite-5865f2?style=for-the-badge&logo=discord&logoColor=white"></a>
<img src="https://img.shields.io/github/issues/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/forks/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/stars/RileCraft/DiscordBot-Template.svg?style=for-the-badge"></p>

# 『 Changelog 』**Breaking Changes!**
* The handler has been updated to Discord.JS `14.2.0`.
* Command options have been fully rewrited, improved, tested and can be applied to both `MessageCommands` and `Interaction Commands`.
* The command options `cooldown`, `requiredRoles`, `requiredAnyRole` do not exist.
* The file `Config.js` has been moved from the root directory to `Src/Credentials`.
* The argument `container` which was passed in commands and was used to access config and `Discord` does not exist anymore and instead you now have to import everything manually.
* The collection used for storing commands and events have been renamed. [ Check below for renamed versions. ]
* These are the current `Command Options` that are currently avaliable:
- `allowInDms`
- `allowBots`
- `allClientPermissions`
- `allUserPermissions`
- `anyClientPermissions`
- `anyUserPermissions`
- `expireAfter`
- `limitUses`
- `onlyChannels`
- `onlyGuilds`
- `onlyUsers`
- `ownerOnly`
* Both the `MessageCreate` and `InteractionCreate` events have been improved and are executed from their own file now instead of being dependent on `loadCommandOptions`.
* The handler now contains all the basic `Events`, `MessageCommands` and `Interactions` examples given by default to help the user understand the format easier.
* Significant changes have been made to `SlashCommands` and `ContextMenus` and the format now requires the command type to be specificed, you may learn the new format by seeing their example commands which are already given.
* Interaction commands are now given their own seperate folder i.e `Src/Interactions/<InteractionType>` for better management.
* The message now no longer require to be lowercase. For example before the command `Eval` was forced to be only `!eval` but now you can do `!eVaL` and it would be accepted.
* `bot.js` now only exports `client` and `rootPath`.
* The utility function `Filer.js` does not exist anymore and is replaced with the package `node-recursive-directory`.
* The client has been improved to increase performance and consume much less memory.
* Startup logging has been changed and is no longer a box as the package `cli-box` is no longer used.
* Detailed format information at [here](https://dbt.cozydevs.ml)
# 『 Documentation 』
**[Click me](https://dbt.cozydevs.ml/) to go the official documentation site which has all the required information.**

# 『 FAQ 』
[**Click here to see frequently asked questions**](https://dbt.cozydevs.ml/faq)

# 『 Features 』
* Chalk Logging
* Organized layout and easily customizable.
* Includes `MessageCommands` , `SelectMenus` , `Buttons` , `ContextMenus` , `SlashCommands` , `ModalForms` handler.
* Inbuilt many command options that can be applied to all types of commands. (They will not work on events.)
* Frequent updates to stay as upto date as possible.

# 『 Important Notes 』
* [**NodeJS**](https://nodejs.org) V16 and above.
* `ContextMenus` and `SlashCommands` take 5 second each command file to create and update because of Discord's Ratelimit. But the `run()` function is updated immediately on startup so if you only need to update existing command code then it will be done instantly so thats a nice thing :D.
* Global commands can take upto a hour to update because that's how Discord made global commands so we cannot do anything about it.
* These are the collections where events and commands are stored.
```js
<Client>.messageCommands // Normal message commands collection.
<Client>.messageCommands_Aliases // Normal message commands aliases collection.
<Client>.events // Events collection.
<Client>.slashCommands // SlashCommands collection.
<Client>.contextMenus // ContextMenus collection.
<Client>.selectMenus // SelectMenus collection.
<Client>.buttonCommands // ButtonCommands collection.
<Client>.modalForms // ModalForms collection.
```

# 『 Setup / Configuration 』
* Install the required modules using the command `npm i` in your console and wait for it to finish.
* Fill all the fields in `Src/Credentials/Config.js`.
* Use the command `node bot.js` or `node .` to start the bot and enjoy :D


# 『 Contribution 』
If you want to contribute towards this repository then follow these steps.
* Fork this Repository.
* Edit your fork and save the changes you want to make.
* Open the pull request.
* We will check out the code and if it is fine then your PR will be merged.
