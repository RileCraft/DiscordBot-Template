module.exports = async (client, message, command, isInteraction) => {
    const allClientPermissions = await require("./AllClientPermissions")(client, message, command, isInteraction);
    const allUserPermissions = await require("./AllUserPermissions")(client, message, command);
    const ownerOnly = await require("./OwnerOnly")(client, message, command, isInteraction);
    const finalCorrection = [allClientPermissions, allUserPermissions, ownerOnly];
    if (finalCorrection.includes(false)) return false;
    else return true;
};