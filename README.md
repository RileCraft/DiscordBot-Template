<p align="center"><img src="https://media.discordapp.net/attachments/774290264764055582/1093484780525469757/A_banner_for_a_discord_bots_template_made_using_discord.js.png?width=1280&height=670" height=200 width=400><br>
<img src="https://img.shields.io/badge/version-8.0.1-05122A?style=for-the-badge">
<a href="https://discord.gg/VStdRr8nP2"><img src="https://img.shields.io/badge/discord-invite-5865f2?style=for-the-badge&logo=discord&logoColor=white"></a>
<img src="https://img.shields.io/github/issues/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/forks/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
<img src="https://img.shields.io/github/stars/RileCraft/DiscordBot-Template.svg?style=for-the-badge">


# Changelog
* Latest `Discord.JS` adaptation.
* Refactored all command options with vast improvements.
* switched to camel case across the template.
* All handlers are now called `managers`.
* Refactor of slashCommands `handler(now manager)` to now use `Rest.put()` and `contextMenus` is now managed by the `slashCommands manager` itself.
* There is now a new method of registering `global` and `guild` slashCommands/contextMenus and `guilds: []` properity is now removed. Follow up here to see the guide for new method of registering `slashCommands/contextMenus`.
* `expireAfter` and `limitUses` command option is now removed.
* Cooldown command option has been readded and has been divided into 3 options: `guildCooldown`, `globalCooldown`, `channelCooldown`. Each of them accepting `Number` of time delay in between each time command is ran **Note: Provide time in milliseconds, Example: 5 seconds to be provided as 5000**.

# Documentation
|Command Options|Documentation|
| -------- | --------------------------------- |
|`ReturnErrors`| [Click Here](/.github/Docs/CMDOptions/ReturnErrors.md)|
|`Ignore`| [Click Here](/.github/Docs/CMDOptions/Ignore.md)|
|`AllClientPermissions`| [Click Here](/.github/Docs/CMDOptions/AllClientPermissions.md)|
|`AllowBots`| [Click Here](/.github/Docs/CMDOptions/AllowBots.md)|
|`AllowInDms`| [Click Here](/.github/Docs/CMDOptions/AllowInDms.md)|
|`AllUserPermissions`| [Click Here](/.github/Docs/CMDOptions/AllUserPermissions.md)|
|`AnyClientPermissions`| [Click Here](/.github/Docs/CMDOptions/AnyClientPermissions.md)|
|`AnyUserPermissions`| [Click Here](/.github/Docs/CMDOptions/AnyUserPermissions.md)|
|`ChannelCooldown`| [Click Here](/.github/Docs/CMDOptions/ChannelCooldown.md)|
|`GlobalCooldown`| [Click Here](/.github/Docs/CMDOptions/GlobalCooldown.md)|
|`GuildCooldown`| [Click Here](/.github/Docs/CMDOptions/GuildCooldown.md)|
|`OnlyChannels`| [Click Here](/.github/Docs/CMDOptions/OnlyChannels.md)|
|`OnlyGuilds`| [Click Here](/.github/Docs/CMDOptions/OnlyGuilds.md)|
|`OnlyRoles`| [Click Here](/.github/Docs/CMDOptions/OnlyRoles.md)|
|`OnlyUsers`| [Click Here](/.github/Docs/CMDOptions/OnlyUsers.md)|
|`OwnerOnly`| [Click Here](/.github/Docs/CMDOptions/OwnerOnly.md)|
|Managers|Documentation|
|`MessageCommands`|[Click Here](/.github/Docs/Managers/MessageCommands.md)|
|`SelectMenus`|[Click Here](/.github/Docs/Managers/SelectMenus.md)|
|`Buttons`|[Click Here](/.github/Docs/Managers/Buttons.md)|
|`Events`|[Click Here](/.github/Docs/Managers/Events.md)|
|`SlashCommands`|[Click Here](/.github/Docs/Managers/SlashCommands.md)|
|`ModalForms`|[Click Here](/.github/Docs/Managers/ModalForms.md)|

# Features
* Colorful and organized logging.
* Room for customization as per user needs.
* Includes management of `MessageCommands`, `Buttons`, `SelectMenus`, `SlashCommands`, `ContextMenus` and `ModalForms`.
* Included variety of commonly-used command options (not applicable to `Events`.)
* Included management of `Custom Events`.
* Simple and understandable code.

# Notes
* Recommended `NodeJS` V16 & above.
* Global `slashCommands`/`ContextMenus` may take time to refresh as it's fixed by discord.
* Guild commands could potentially take time to refresh if perhaps too many different `guilds` commands.
* Collections of where commands and events data is stored and used from.
```js
<Client>.messageCommands //Message Commands Cache
<Client>.messageCommandsAliases // Message Commands Aliases Cache
<Client>.events // Client Events Cache
<Client>.buttonCommands // Button Interactions Cache
<Client>.selectMenus // SelectMenu Interactions Cache
<Client>.modalForms // ModalForms Interactions Cache
<Client>.slashCommands // SlashCommands Cache (Includes ContextMenus)
```

# Installation
* Clone the repository by either downloading it as a zip or running the command `git clone https://github.com/rilecraft/discordbot-template`.
* Run the command `npm i` in the template's directory (Make sure npm is installed).
* After all the required modules have been installed, goto the file `Src/Credentials/Config.js` and fill in the neccesary information.
* Run the command `node bot.js` or `node .` to get the bot started!

# Contribution
You are always welcome to make any contribution but make sure to follow these:
* Fork the branch `Unstable`. **Important: All changes must be first made to the Unstable branch.**
* Edit your forked repository and make your changes.
* Open a pull request to the `Unstable` branch and it will be reviewed soon.
* If everything checks out then the pull request would be merged.
