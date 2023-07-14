<p align="center">
  <img src="https://media.discordapp.net/attachments/774290264764055582/1093484780525469757/A_banner_for_a_discord_bots_template_made_using_discord.js.png" height="200" width="400"><br>
  <img src="https://img.shields.io/badge/version-8.0.1-05122A?style=for-the-badge">
  <a href="https://discord.gg/VStdRr8nP2"><img src="https://img.shields.io/badge/discord-invite-5865f2?style=for-the-badge&logo=discord&logoColor=white"></a>
  <img src="https://img.shields.io/github/issues/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
</p>

# Discord Bot Template

This Discord Bot Template provides a solid foundation for creating feature-rich Discord bots using Discord.js. It includes various managers for handling message commands, buttons, select menus, slash commands, context menus, and modal forms. The template offers customization options, colorful logging, and a simple code structure.

## Changelog

- Latest Discord.js adaptation.
- Refactored command options with significant improvements.
- Updated to camel case throughout the template.
- Renamed all handlers to managers.
- Replaced the slashCommands handler (now manager) with `Rest.put()`. Context menus are now managed by the slashCommands manager.
- New method for registering global and guild slash commands and context menus. The `guilds: []` property has been removed. Refer to the guide for the new registration method.
- Removed `expireAfter` and `limitUses` command options.
- Reintroduced the `cooldown` command option, divided into `guildCooldown`, `globalCooldown`, and `channelCooldown`. Each option accepts the delay time in milliseconds.

## Documentation

For detailed documentation on command options and managers, refer to the following links:

### Command Options

- [ReturnErrors](/.github/Docs/CMDOptions/ReturnErrors.md)
- [Ignore](/.github/Docs/CMDOptions/Ignore.md)
- [AllClientPermissions](/.github/Docs/CMDOptions/AllClientPermissions.md)
- [AllowBots](/.github/Docs/CMDOptions/AllowBots.md)
- [AllowInDms](/.github/Docs/CMDOptions/AllowInDms.md)
- [AllUserPermissions](/.github/Docs/CMDOptions/AllUserPermissions.md)
- [AnyClientPermissions](/.github/Docs/CMDOptions/AnyClientPermissions.md)
- [AnyUserPermissions](/.github/Docs/CMDOptions/AnyUserPermissions.md)
- [ChannelCooldown](/.github/Docs/CMDOptions/ChannelCooldown.md)
- [GlobalCooldown](/.github/Docs/CMDOptions/GlobalCooldown.md)
- [GuildCooldown](/.github/Docs/CMDOptions/GuildCooldown.md)
- [OnlyChannels](/.github/Docs/CMDOptions/OnlyChannels.md)
- [OnlyGuilds](/.github/Docs/CMDOptions/OnlyGuilds.md)
- [OnlyRoles](/.github/Docs/CMDOptions/OnlyRoles.md)
- [OnlyUsers](/.github/Docs/CMDOptions/OnlyUsers.md)
- [OwnerOnly](/.github/Docs/CMDOptions/OwnerOnly.md)

### Managers

- [MessageCommands](/.github/Docs/Managers/MessageCommands.md)
- [SelectMenus](/.github/Docs/Managers/SelectMenus.md)
- [Buttons](/.github/Docs/Managers/Buttons.md)
- [Events](/.github/Docs/Managers/Events.md)
- [SlashCommands](/.github/Docs/Managers/SlashCommands.md)
- [ModalForms](/.github/Docs/Managers/ModalForms.md)

## Features

- Colorful and organized logging.
- Room for customization according to user needs.
- Supports management of message commands, buttons, select menus, slash commands, context menus, and modal forms.
- Includes a variety of commonly used command options (not applicable to events).
- Supports management of custom events.
- Simple and understandable code structure.

## Notes

- Recommended Node.js version: 16 and above.
- Global slash commands/context menus may take time to refresh as it is controlled by Discord.
- Guild commands may take time to refresh if there are too many different guild commands.
- Collections where command and event data is stored and used:
  - `<Client>.messageCommands`: Message commands cache
  - `<Client>.messageCommandsAliases`: Message command aliases cache
  - `<Client>.events`: Client events cache
  - `<Client>.buttonCommands`: Button interactions cache
  - `<Client>.selectMenus`: Select menu interactions cache
  - `<Client>.modalForms`: Modal form interactions cache
  - `<Client>.slashCommands`: Slash commands cache (includes context menus)

## Installation

Follow these steps to get started with the Discord Bot Template:

1. Clone the repository by either downloading it as a ZIP file or running the command `git clone https://github.com/rilecraft/discordbot-template`.
2. In the template's directory, run the command `npm install` (make sure npm is installed).
3. After all the required modules are installed, open the `Src/Credentials/Config.js` file and fill in the necessary information.
4. Run the command `node bot.js` or `node .` to start the bot.

## Contribution

You are welcome to contribute to the Discord Bot Template. Please follow these guidelines:

1. Fork the `Unstable` branch. **Important: All changes must be made to the Unstable branch.**
2. Make your changes in your forked repository.
3. Open a pull request to the `Unstable` branch, and it will be reviewed soon.
4. If everything checks out, the pull request will be merged.
