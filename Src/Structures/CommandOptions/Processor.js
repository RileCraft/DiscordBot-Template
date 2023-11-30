export default async (client, message, command, isInteraction, interactionType) => {
    const allClientPermissions = await (await import("./AllClientPermissions.mjs")).default(client, message, command);
    const anyClientPermissions = await (await import("./AnyClientPermissions.mjs")).default(client, message, command);
    const allUserPermissions = await (await import("./AllUserPermissions.mjs")).default(client, message, command);
    const anyUserPermissions = await (await import("./AnyUserPermissions.mjs")).default(client, message, command);

    const channelCooldown = await (await import("./ChannelCooldown.mjs")).default(client, message, command, isInteraction, interactionType);
    const globalCooldown = await (await import("./GlobalCooldown.mjs")).default(client, message, command, isInteraction, interactionType);
    const guildCooldown = await (await import("./GuildCooldown.mjs")).default(client, message, command, isInteraction, interactionType);

    const onlyChannels = await (await import("./OnlyChannels.mjs")).default(client, message, command, isInteraction);
    const onlyGuilds = await (await import("./OnlyGuilds.mjs")).default(client, message, command);
    const onlyRoles = await (await import("./OnlyRoles.mjs")).default(client, message, command);
    const onlyUsers = await (await import("./OnlyUsers.mjs")).default(client, message, command, isInteraction);
    const ownerOnly = await (await import("./OwnerOnly.mjs")).default(client, message, command, isInteraction);
    const finalCorrection = [allClientPermissions, anyClientPermissions, allUserPermissions, anyUserPermissions, channelCooldown, guildCooldown, globalCooldown, onlyChannels, onlyGuilds, onlyRoles, onlyUsers, ownerOnly];
    if (finalCorrection.includes(false)) return false;
    else return true;
};