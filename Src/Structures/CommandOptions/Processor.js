export default async (client, message, command, isInteraction, interactionType) => {
    const allClientPermissions = await (await import("./AllClientPermissions.js")).default(client, message, command);
    const anyClientPermissions = await (await import("./AnyClientPermissions.js")).default(client, message, command);
    const allUserPermissions = await (await import("./AllUserPermissions.js")).default(client, message, command);
    const anyUserPermissions = await (await import("./AnyUserPermissions.js")).default(client, message, command);

    const channelCooldown = await (await import("./ChannelCooldown.js")).default(client, message, command, isInteraction, interactionType);
    const globalCooldown = await (await import("./GlobalCooldown.js")).default(client, message, command, isInteraction, interactionType);
    const guildCooldown = await (await import("./GuildCooldown.js")).default(client, message, command, isInteraction, interactionType);

    const onlyChannels = await (await import("./OnlyChannels.js")).default(client, message, command, isInteraction);
    const onlyGuilds = await (await import("./OnlyGuilds.js")).default(client, message, command);
    const onlyRoles = await (await import("./OnlyRoles.js")).default(client, message, command);
    const onlyUsers = await (await import("./OnlyUsers.js")).default(client, message, command, isInteraction);
    const ownerOnly = await (await import("./OwnerOnly.js")).default(client, message, command, isInteraction);
    const finalCorrection = [allClientPermissions, anyClientPermissions, allUserPermissions, anyUserPermissions, channelCooldown, guildCooldown, globalCooldown, onlyChannels, onlyGuilds, onlyRoles, onlyUsers, ownerOnly];
    if (finalCorrection.includes(false)) return false;
    else return true;
};