export const name = "errorManager";
export const customEvent = true;
export async function run() {
    process.on('unhandledRejection', error => {
        console.log(error);
    });
    process.on('uncaughtException', error => {
        console.log(error);
    });
}