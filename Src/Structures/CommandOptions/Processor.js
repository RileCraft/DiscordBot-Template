module.exports = async (client, message, command, isInteraction, interactionType) => {
    const allClientPermissions = await require("./AllClientPermissions")(client, message, command);
    const anyClientPermissions = await require('./AnyClientPermissions')(client, message, command);
    const allUserPermissions = await require("./AllUserPermissions")(client, message, command);
    const anyUserPermissions = await require("./AnyUserPermissions")(client, message, command);
    const channelCooldown = await require("./ChannelCooldown")(client, message, command, isInteraction, interactionType);
    const globalCooldown = await require("./GlobalCooldown")(client, message, command, isInteraction, interactionType);
    const guildCooldown = await require("./GuildCooldown")(client, message, command, isInteraction, interactionType);
    const onlyChannels = await require("./OnlyChannels")(client, message, command);
    const onlyGuilds = await require("./OnlyGuilds")(client, message, command);
    const onlyRoles = await require("./OnlyRoles")(client, message, command);
    const onlyUsers = await require("./OnlyUsers")(client, message, command, isInteraction);
    const ownerOnly = await require("./OwnerOnly")(client, message, command, isInteraction);
    const finalCorrection = [allClientPermissions, anyClientPermissions, allUserPermissions, anyUserPermissions, channelCooldown, guildCooldown, globalCooldown, onlyChannels, onlyGuilds, onlyRoles, onlyUsers, ownerOnly];
    if (finalCorrection.includes(false)) return false;
    else return true;
};