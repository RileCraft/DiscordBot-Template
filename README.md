<p align="center"><img src="https://media.discordapp.net/attachments/774290264764055582/890955909566722048/0001-8574372447_20210924_191019_0000.png" height=200 width=400><br>
<img src="https://img.shields.io/badge/version-6.0.3-05122A?style=for-the-badge">
<a href="https://discord.gg/VStdRr8nP2"><img src="https://img.shields.io/badge/discord-invite-5865f2?style=for-the-badge&logo=discord&logoColor=white"></a>
<img src="https://img.shields.io/github/issues/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/forks/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/stars/RileCraft/DiscordBot-Template.svg?style=for-the-badge"></p>

# 『 Changelog 』
* Fixed broken file path in `bot.js`.

# 『 Documentation 』
[Click me](https://dbt.cozydevs.ml/) to go the official documentation site which has all the required information.

# 『 FAQ 』
[**Click here to see frequently asked questions**](https://dbt.cozydevs.ml/faq)

# 『 Features 』
* Chalk Logging
* Organized layout and easily customizable.
* Includes `MessageCommands` , `SelectMenus` , `Buttons` , `ContextMenus` and `SlashCommands` handler.
* Inbuilt many command options that can be applied to all types of commands. (They will not work on events.)
* Frequent updates to stay as upto date as possible.

# 『 Important Notes 』
* [**NodeJS**](https://nodejs.org) V16 and above.
* `ContextMenus` and `SlashCommands` take 5 second each command file to create and update because of Discord's Ratelimit. But the `run()` function is updated immediately on startup so if you only need to update existing command code then it will be done instantly so thats a nice thing :D.
* Global commands can take upto a hour to update because that's how Discord made global commands so we cannot do anything about it.
* These are the collections where events and commands are stored.
```js
client.events //Events Collection
client.commands.messageCommands //Message / Normal commands collection.
client.commands.messageCommands.aliases //Message / Normal command's aliases.
client.commands.slashCommands //Slashcommands collection.
client.commands.contextMenus //contextMenus collection.
client.commands.selectMenus //SelectMenus collection.
client.commands.buttonCommands //Buttons collection
```

# 『 Setup / Configuration 』
* Install the required modules using the command `npm i` in your console and wait for it to finish.
* Fill all the fields in `Config.js`.
* Use the command `node bot.js` or `node .` to start the bot and enjoy :D


# 『 Contribution 』
If you want to contribute towards this repository then follow these steps.
* Fork this Repository.
* Edit your fork and save the changes you want to make.
* Open the pull request.
* We will check out the code and if it is fine then your PR will be merged.
