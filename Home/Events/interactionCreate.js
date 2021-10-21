module.exports = {
	name: "interactionCreate",
	run: async(interaction) => {
			const { buttonFiles, selectMenuFiles, slashFiles } = require(HOME + "/Home/Classes/Handler")
			const { client } = require(HOME + "/bot")
			const Discord = require('discord.js')
			const { errorEmbedLoader } = require(HOME + "/Home/Classes/ErrorEmbeds")
			const { validator } = require(HOME + "/Home/Classes/Validator")
			const data = require(HOME + "/Home/Classes/Validator")
			let author = interaction.user
		
		if (interaction.isButton()) {
			buttonFiles.forEach(x => {
				(async () => {
				let btn = require(x)
				if (btn.name !== interaction.customId) return;
						if (!validator.cooldown(btn, interaction, true, "button")) {
if (btn.returnCooldownError == false || btn.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.cooldown(author, btn, true, "button")], ephemeral: true })
 }
 else if (!validator.expireAfter(btn, interaction, "button")) {
    let array = []
    interaction.message.components.forEach(i => {
        i.components.forEach(x => {
            array.push(x)
        })
    })
    array.find(x => x.customId == btn.name).disabled = true
    const row = new Discord.MessageActionRow()
        .addComponents(
            array
        )
    interaction.update({
        components: [row]
    })
}
			else if (!validator.ownerOnly(btn, interaction, true)) {
if (btn.returnOwnerOnlyError == false || btn.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.ownerOnly(author)], ephemeral: true })
 }
 else if (!await validator.authorOnly(btn, interaction)) {
if (btn.returnAuthorOnlyError == false || btn.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.authorOnly(author)], ephemeral: true })
 }
						else if (!validator.userPermissions(btn, interaction, true)) {
if (btn.returnUserPermissionsError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.userPermissions(author, data.missingUserPermissions)], ephemeral: true })
  }
  else if (!validator.clientPermissions(btn, interaction, true)) {
if (btn.returnClientPermissionsError == false || btn.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.clientPermissions(author, data.missingClientPermissions)], ephemeral: true })
 }
						else if (!validator.anyUserPermissions(btn, interaction, true)) {
if (btn.returnAnyUserPermissionsError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.anyUserPermissions(author, data.missingAnyUserPermissions)], ephemeral: true })
  }
  else if (!validator.anyClientPermissions(btn, interaction, true)) {
if (btn.returnAnyClientPermissionsError == false || btn.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.anyClientPermissions(author, data.missingAnyClientPermissions)], ephemeral: true })
 }
						else if (!validator.onlyUsers(btn, interaction, true)) {
if (btn.returnOnlyUsersError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyUsers(author, data.missingUsers)], ephemeral: true })
  }
  else if (!validator.onlyRoles(btn, interaction, true)) {
if (btn.returnOnlyRolesError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyRoles(author, data.missingRoles)], ephemeral: true })
  }
  else if (!validator.onlyChannels(btn, interaction, true)) {
if (btn.returnOnlyChannelsError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyChannels(author, data.missingChannels)], ephemeral: true })
  }
  else if (!validator.onlyGuilds(btn, interaction, true)) {
if (btn.returnOnlyGuildsError == false || btn.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyGuilds(author, data.missingGuilds)], ephemeral: true })
  }

						else {
if (btn.guildOnly == false) btn.run(client, interaction, Discord)
	if (!interaction.guild) return;
	if (btn.allowBots) btn.run(client, interaction, Discord)
	if (interaction.user.bot) return;
	btn.run(client, interaction, Discord)
}
})()
      })
			} // Button Interaction End
			
			else if (interaction.isSelectMenu()) {
				selectMenuFiles.forEach(i => {
					let sm = require(i)
			if (sm.name == interaction.customId || sm.name == interaction.values[0]) {
						
            if (!validator.cooldown(sm, interaction, true, "selectmenu")) {
if (sm.returnCooldownError == false || sm.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.cooldown(author, interaction, true, "selectmenu")], ephemeral: true })
 }
 else if (!validator.expireAfter(sm, interaction, "selectmenu")) {
    let array = []
    interaction.message.components.forEach(i => {
        i.components.forEach(x => {
            array.push(x)
        })
    })
    array.find(x => x.customId == sm.name).disabled = true
    const row = new Discord.MessageActionRow()
        .addComponents(
            array
        )
    interaction.update({
        components: [row]
    })
}
			else if (!validator.ownerOnly(sm, interaction, true)) {
if (sm.returnOwnerOnlyError == false || sm.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.ownerOnly(author)], ephemeral: true })
 }
						else if (!validator.userPermissions(sm, interaction, true)) {
if (sm.returnUserPermissionsError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.userPermissions(author, data.missingUserPermissions)], ephemeral: true })
  }
  else if (!validator.clientPermissions(sm, interaction, true)) {
if (sm.returnClientPermissionsError == false || sm.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.clientPermissions(author, data.missingClientPermissions)], ephemeral: true })
 }
						else if (!validator.anyUserPermissions(sm, interaction, true)) {
if (sm.returnAnyUserPermissionsError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.anyUserPermissions(author, data.missingAnyUserPermissions)], ephemeral: true })
  }
  else if (!validator.anyClientPermissions(sm, interaction, true)) {
if (sm.returnAnyClientPermissionsError == false || sm.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.anyClientPermissions(author, data.missingAnyClientPermissions)], ephemeral: true })
 }
						else if (!validator.onlyUsers(sm, interaction, true)) {
if (sm.returnOnlyUsersError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyUsers(author, data.missingUsers)], ephemeral: true })
  }
  else if (!validator.onlyRoles(sm, interaction, true)) {
if (sm.returnOnlyRolesError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyRoles(author, data.missingRoles)], ephemeral: true })
  }
  else if (!validator.onlyChannels(sm, interaction, true)) {
if (sm.returnOnlyChannelsError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyChannels(author, data.missingChannels)], ephemeral: true })
  }
  else if (!validator.onlyGuilds(sm, interaction, true)) {
if (sm.returnOnlyGuildsError == false || sm.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyGuilds(author, data.missingGuilds)], ephemeral: true })
  }

						else {
if (sm.guildOnly == false) sm.run(client, interaction, Discord)
	if (!interaction.guild) return;
	if (sm.allowBots) sm.run(client, interaction, Discord)
	if (interaction.user.bot) return;
	sm.run(client, interaction, Discord)
}
     
    }
             })
		} // SelectMenu End
		
		else if (interaction.isCommand()) {
			slashFiles.forEach(z => {
				let slush = require(z)
	if (slush.name !== interaction.commandName) return;

if (!validator.cooldown(slush, interaction, true, "slashcmd")) {
if (slush.returnCooldownError == false || slush.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.cooldown(author, interaction, true, "slashcmd")], ephemeral: true })
 }
			else if (!validator.ownerOnly(slush, interaction, true)) {
if (slush.returnOwnerOnlyError == false || slush.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.ownerOnly(author)], ephemeral: true })
 }
						else if (!validator.userPermissions(slush, interaction, true)) {
if (slush.returnUserPermissionsError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.userPermissions(author, data.missingUserPermissions)], ephemeral: true })
  }
  else if (!validator.clientPermissions(slush, interaction, true)) {
if (slush.returnClientPermissionsError == false || slush.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.clientPermissions(author, data.missingClientPermissions)], ephemeral: true })
 }
						else if (!validator.anyUserPermissions(slush, interaction, true)) {
if (slush.returnAnyUserPermissionsError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.userPermissions(author, data.missingUserPermissions)], ephemeral: true })
  }
  else if (!validator.anyClientPermissions(slush, interaction, true)) {
if (slush.returnAnyClientPermissionsError == false || slush.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.anyClientPermissions(author, data.missingAnyClientPermissions)], ephemeral: true })
 }
 else if (!validator.anyUserPermissions(slush, interaction, true)) {
if (slush.returnAnyUserPermissionsError == false || slush.returnNoErrors) return; 
else interaction.reply({ embeds: [errorEmbedLoader.anyUserPermissions(author, data.missingAnyUserPermissions)], ephemeral: true })
 }
						else if (!validator.onlyUsers(slush, interaction, true)) {
if (slush.returnOnlyUsersError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyUsers(author, data.missingUsers)], ephemeral: true })
  }
  else if (!validator.onlyRoles(slush, interaction, true)) {
if (slush.returnOnlyRolesError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyRoles(author, data.missingRoles)], ephemeral: true })
  }
  else if (!validator.onlyChannels(slush, interaction, true)) {
if (slush.returnOnlyChannrlsError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyChannels(author, data.missingChannels)], ephemeral: true })
  }
  else if (!validator.onlyGuilds(slush, interaction, true)) {
if (slush.returnOnlyGuildsError == false || slush.returnNoErrors) return;
else interaction.reply({ embeds: [errorEmbedLoader.onlyGuilds(author, data.missingGuilds)], ephemeral: true })
  }

						else {
if (slush.guildOnly == false) slush.run(client, interaction, Discord)
	if (!interaction.guild) return;
	if (slush.allowBots) slush.run(client, interaction, Discord)
	if (interaction.user.bot) return;
	slush.run(client, interaction, Discord)
}

})
		} // SlashCmd End
		
		}
	}