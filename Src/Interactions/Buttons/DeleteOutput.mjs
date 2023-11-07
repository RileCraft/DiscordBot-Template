export const name = "deleteOutput";
export const ownerOnly = true;
export async function run(client, interaction) {
    interaction.message.delete();
}