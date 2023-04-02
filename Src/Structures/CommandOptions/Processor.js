module.exports = async (client, message, command, isInteraction) => {
    const allClientPermissions = await require("./AllClientPermissions")(client, message, command);
    const anyClientPermissions = await require('./AnyClientPermissions')(client, message, command);
    const allUserPermissions = await require("./AllUserPermissions")(client, message, command);
    const anyUserPermissions = await require("./AnyUserPermissions")(client, message, command);
    const ownerOnly = await require("./OwnerOnly")(client, message, command, isInteraction);
    const finalCorrection = [allClientPermissions, anyClientPermissions, allUserPermissions, anyUserPermissions, ownerOnly];
    if (finalCorrection.includes(false)) return false;
    else return true;
};