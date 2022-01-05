# **Changelog for 5.0.0**
* `Config.js` has been moved from `Root/Storage/Vault` to the root directory for easier use.
* Command collections have been renamed. (Refer to bot.js)
* `ContextMenus` and `SlashCommands` have been seperated for better control and to organize them better.
* Each major component of handler has its own documentation (markdown) file now for more detailed explaination.
* Example for each type of command is now there to help people understand the format easily.
* `SlashCommands` and `ContextMenus` collections are updated instantly on startup and is no longer depended on `MessageCommands` handler to be loaded.
* `ErrorManager.js` will now log full error message instead of sliced error message to help developers easily identify the error.
* Handlers and CommandOptions files has been moved from `Classes` to `Structures` directory as they are not a class to begin with.
* Each command directory name has been changed.
`MessageCommands` - Normal message commands.<br>
`ButtonCommands` - Button interaction commands.<br>
`ContextMenus` - ContextMenu interaction commands.<br>
`SelectMenus` - SelectMenu interaction commands.<br>
`SlashCommands` - Slashcommands.<br>
* All commandOptions code has been properly organized and no longer look sloppy.
* Function `FileArray.js` has been moved to `Utils` directory with the new name `Filer.js`.