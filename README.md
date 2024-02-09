<p align="center">
  <img src="https://media.discordapp.net/attachments/774290264764055582/1093484780525469757/A_banner_for_a_discord_bots_template_made_using_discord.js.png" height="200" width="400"><br>
  <img src="https://img.shields.io/badge/version-9.0.6-05122A?style=for-the-badge">
  <a href="https://discord.gg/VStdRr8nP2"><img src="https://img.shields.io/badge/discord-invite-5865f2?style=for-the-badge&logo=discord&logoColor=white"></a>
  <img src="https://img.shields.io/github/issues/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/RileCraft/DiscordBot-Template.svg?style=for-the-badge">
</p>

# Discord Bot Template

The Discord Bot Template provides a solid foundation for creating feature-rich Discord bots using Discord.js. It includes various managers for handling message commands, buttons, select menus, slash commands, context menus, and modal forms. The template offers customization options, colorful logging, and a simple code structure.

## Changelog
### IMPORTANT UPDATE 9.0.6

- **Fixed Windows Support and SlashCommands & ContextMenus not Registering.**
- Fixed subDirectories not working for commands.
- Added dependency of `simple-json-db` for the cooldown system as i rage quit and can't do it with `fs` myself.
- Latest Discord.js adaptation.
- Following JavaScript Naming Convention.
- Removed `node-recursive-directory` dependency.
- Support for `AutoCompleteInteraction` added.
- Converted from `CommonJS` to `ESM Module`.
- Improved handling of all events, commands with lower memory usage.
- Config file has been shifted to `Src`.
- Moved from `Collections` to `Map`.
- `messageCommandsAliases` has been renamed to `messageCommands_Aliases`
- `Quick.DB` has been removed and instead all cooldowns data will be now stored in `CooldownDB.txt` in the root directory using `fs`.
- Refactored command options.
- `chalk` has been replaced with `tasai`.
- Extended all command options support to interactions.
- `SlashCommands` and `ContextMenus` has been seperated into different folders and managed differently.
- `SlashCommands` have been simplified as now instead of `Guilds/<GuildID>/<Files Here>`, you can use `guilds: ["GUILD ID"]`
- In a slashCommand you do not need to assign the `type: ApplicationCommandType` property as the handler by default assumes it as `ChatInput`.

## Documentation

For detailed documentation on command options and managers, please refer to the following links:

### Command Options

- [ReturnErrors](/.github/DOCS/commandOptions/returnErrors.md)
- [Ignore](/.github/DOCS/commandOptions/ignore.md)
- [AllClientPermissions](/.github/DOCS/commandOptions/allClientPermissions.md)
- [AllowBots](/.github/DOCS/commandOptions/allowBots.md)
- [AllowInDms](/.github/DOCS/commandOptions/allowInDms.md)
- [AllUserPermissions](/.github/DOCS/commandOptions/allUserPermissions.md)
- [AnyClientPermissions](/.github/DOCS/commandOptions/anyClientPermissions.md)
- [AnyUserPermissions](/.github/DOCS/commandOptions/anyUserPermissions.md)
- [ChannelCooldown](/.github/DOCS/commandOptions/channelCooldown.md)
- [GlobalCooldown](/.github/DOCS/commandOptions/globalCooldown.md)
- [GuildCooldown](/.github/DOCS/commandOptions/guildCooldown.md)
- [OnlyChannels](/.github/DOCS/commandOptions/onlyChannels.md)
- [OnlyGuilds](/.github/DOCS/commandOptions/onlyGuilds.md)
- [OnlyRoles](/.github/DOCS/commandOptions/onlyRoles.md)
- [OnlyUsers](/.github/DOCS/commandOptions/onlyUsers.md)
- [OwnerOnly](/.github/DOCS/commandOptions/ownerOnly.md)

### Managers

- [MessageCommands](/.github/DOCS/managers/messageCommands.md)
- [SelectMenus](/.github/DOCS/managers/selectMenus.md)
- [Buttons](/.github/DOCS/managers/buttons.md)
- [Events](/.github/DOCS/managers/events.md)
- [ContextMenus](/.github/DOCS/managers/contextMenus.md)
- [SlashCommands](/.github/DOCS/managers/slashCommands.md)
- [ModalForms](/.github/DOCS/managers/modalForms.md)

## Features

- Colorful and organized logging.
- Customization options to suit your needs.
- Supports management of message commands, buttons, select menus, slash commands, context menus, and modal forms.
- Includes a variety of commonly used command options (not applicable to events).
- Supports management of custom events.
- Simple and understandable code structure.

## Notes

- Recommended Node.js version: 16 and above.
- Global slash commands and context menus may take time to refresh as it is controlled by Discord.
- Guild commands may take time to refresh if there are a large number of different guild commands.
- Collections where command and event data is stored and used:
  - `<Client>.messageCommands`: Message commands cache
  - `<Client>.messageCommands_Aliases`: Message command aliases cache
  - `<Client>.events`: Client events cache
  - `<Client>.buttonCommands`: Button interactions cache
  - `<Client>.selectMenus`: Select menu interactions cache
  - `<Client>.modalForms`: Modal form interactions cache
  - `<Client>.slashCommands`: Slash commands cache
  - `<Client>.contextMenus`: ContextMenus commands cache

## Installation

To get started with the Discord Bot Template, follow these steps:

1. Clone the repository by downloading it as a ZIP file or running the command `git clone https://github.com/rilecraft/discordbot-template`.
2. Navigate to the template's directory and run the command `npm install` (make sure npm is installed).
3. Once all the required modules are installed, open the `src/config.js` file and fill in the necessary information.
4. Run the command `node .` to start the bot.

## Contribution

Contributions to the Discord Bot Template are welcome. To contribute, please follow these guidelines:

1. Fork the `Unstable` branch. **Important: All changes must be made to the Unstable branch.**
2. Make your changes in your forked repository.
3. Open a pull request to the `Unstable` branch, and it will be reviewed promptly.
4. If everything checks out, the pull request will be merged.