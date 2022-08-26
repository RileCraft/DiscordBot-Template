module.exports = (DiscordClient, message, Command, IsInteraction, InteractionType) => {
    let verificationCount = 0
    if (require("./OwnerOnly")(message, Command, IsInteraction)) verificationCount = verificationCount + 1
    if (require("./LimitUses")(DiscordClient, message, Command, IsInteraction, InteractionType)) verificationCount = verificationCount + 1
    if (require("./ExpireAfter")(DiscordClient, message, Command, IsInteraction, InteractionType)) verificationCount = verificationCount + 1
    if (require("./AnyClientPermissions")(message, Command, InteractionType)) verificationCount = verificationCount + 1
    if (require("./AllClientPermissions")(message, Command, InteractionType)) verificationCount = verificationCount + 1
    if (require("./AnyUserPermissions")(message, Command, InteractionType)) verificationCount = verificationCount + 1
    if (require("./AllUserPermissions")(message, Command, InteractionType)) verificationCount = verificationCount + 1
    if (require("./OnlyChannels")(message, Command, InteractionType)) verificationCount = verificationCount + 1
    if (require("./OnlyUsers")(message, Command, IsInteraction)) verificationCount = verificationCount + 1
    if (require("./OnlyGuilds")(DiscordClient, message, Command)) verificationCount = verificationCount + 1
    if (verificationCount === 10) return true;
    else return false;
}