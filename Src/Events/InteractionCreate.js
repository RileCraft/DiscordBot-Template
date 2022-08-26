const CommandOptionsVerifier = require("../Structures/CommandOptions/LoadCommandOptions")
module.exports = {
    name: "interactionCreate",
    run: async (interaction, DiscordClient) => {
        const slashCommandCollection = DiscordClient.slashCommands
        const contextMenuCollection = DiscordClient.contextMenus
        const selectMenuCollection = DiscordClient.selectMenus
        const buttonCommandCollection = DiscordClient.buttonCommands
        const modalFormCollection = DiscordClient.modalForms
        const limitUsesCollection = DiscordClient.limitCommandUses
        let Command;

        if (interaction.isChatInputCommand()) {
            Command = slashCommandCollection.get(interaction.commandName)
            if (!Command) return;
            if (Command.limitUses && !isNaN(Command.limitUses)) {
                let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_SlashCommand`) ?? -1
                limitUsesCollection.set(`${Command.name}_SlashCommand`, Math.floor(LimitedUsesCount + 1))
            }
            if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "SlashCommand")) return;

            if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                const expireAfterCollection = DiscordClient.expireAfter
                if (!expireAfterCollection.get(`${Command.name}_SlashCommand`)) expireAfterCollection.set(`${Command.name}_SlashCommand`, Date.now())
            }
            
            Command.run(DiscordClient, interaction)
        }

        else if (interaction.isContextMenuCommand()) {
            Command = contextMenuCollection.get(interaction.commandName)
            if (!Command) return;
            if (Command.limitUses && !isNaN(Command.limitUses)) {
                let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_ContextMenu`) ?? -1
                limitUsesCollection.set(`${Command.name}_ContextMenu`, Math.floor(LimitedUsesCount + 1))
            }
            if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "ContextMenu")) return;

            if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                const expireAfterCollection = DiscordClient.expireAfter
                if (!expireAfterCollection.get(`${Command.name}_ContextMenu`)) expireAfterCollection.set(`${Command.name}_ContextMenu`, Date.now())
            }
            
            contextMenuCollection.get(interaction.commandName).run(DiscordClient, interaction)
        }

        else if (interaction.isSelectMenu()) {
            if (selectMenuCollection.get(interaction.values[0])) {
                Command = selectMenuCollection.get(interaction.values[0])
                if (!Command) return;
                if (Command.limitUses && !isNaN(Command.limitUses)) {
                    let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_SelectMenu_Value`) ?? -1
                    limitUsesCollection.set(`${Command.name}_SelectMenu_Value`, Math.floor(LimitedUsesCount + 1))
                }
                if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "SelectMenu_Value")) return;

                if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                    const expireAfterCollection = DiscordClient.expireAfter
                    if (!expireAfterCollection.get(`${Command.name}_SelectMenu_Value`)) expireAfterCollection.set(`${Command.name}_SelectMenu_Value`, Date.now())
                }

                selectMenuCollection.get(interaction.values[0]).run(DiscordClient, interaction)
            }
            else {
                Command = selectMenuCollection.get(interaction.customId)
                if (!Command) return;
                if (Command.limitUses && !isNaN(Command.limitUses)) {
                    let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_SelectMenu`) ?? -1
                    limitUsesCollection.set(`${Command.name}_SelectMenu`, Math.floor(LimitedUsesCount + 1))
                }
                if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "SelectMenu")) return;

                if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                    const expireAfterCollection = DiscordClient.expireAfter
                    if (!expireAfterCollection.get(`${Command.name}__SelectMenu`)) expireAfterCollection.set(`${Command.name}__SelectMenu`, Date.now())
                }

                selectMenuCollection.get(interaction.customId).run(DiscordClient, interaction)
            }
        }

        else if (interaction.isButton()) {
            Command = buttonCommandCollection.get(interaction.customId)
            if (!Command) return;
            if (Command.limitUses && !isNaN(Command.limitUses)) {
                let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_ButtonCommands`) ?? -1
                limitUsesCollection.set(`${Command.name}_ButtonCommands`, Math.floor(LimitedUsesCount + 1))
            }
            if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "ButtonCommands")) return;

            if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                const expireAfterCollection = DiscordClient.expireAfter
                if (!expireAfterCollection.get(`${Command.name}_ButtonCommands`)) expireAfterCollection.set(`${Command.name}_ButtonCommands`, Date.now())
            }

            buttonCommandCollection.get(interaction.customId).run(DiscordClient, interaction)
        }

        else if (interaction.isModalSubmit()) {
            Command = modalFormCollection.get(interaction.customId)
            if (!Command) return;
            if (Command.limitUses && !isNaN(Command.limitUses)) {
                let LimitedUsesCount = limitUsesCollection.get(`${Command.name}_ModalForms`) ?? -1
                limitUsesCollection.set(`${Command.name}_ModalForms`, Math.floor(LimitedUsesCount + 1))
            }
            if (!CommandOptionsVerifier(DiscordClient, interaction, Command, true, "ModalForms")) return;

            if (Command.expireAfter && !isNaN(Command.expireAfter)) {
                const expireAfterCollection = DiscordClient.expireAfter
                if (!expireAfterCollection.get(`${Command.name}_ModalForms`)) expireAfterCollection.set(`${Command.name}_ModalForms`, Date.now())
            }

            modalFormCollection.get(interaction.customId).run(DiscordClient, interaction)
        }
    }
}