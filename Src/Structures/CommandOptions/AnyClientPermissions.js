module.exports = async(client, message, command, isInteraction) => {
    if (!command.anyClientPermissions || !message.guild || !Array.isArray(command.anyClientPermissions)) return true;
};