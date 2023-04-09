module.exports = {
    name: "ExampleModal",
    run: async(client, interaction) => {
        interaction.reply({
            content: "This modal is correctly functioning."
        });
    }
};