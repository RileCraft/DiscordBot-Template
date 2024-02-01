export const Button = {
    name: "deleteOutput",
    ownerOnly: true,
    run: (interaction) => {
        interaction.message.delete();
    }
}; // ButtonCommand of the deleteOutput button.