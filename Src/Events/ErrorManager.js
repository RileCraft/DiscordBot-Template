module.exports = {
    name: "errorManager",
    customEvent: true,
    run: async() => {
        process.on('unhandledRejection', error => {
            console.log(error)
        });
        process.on('uncaughtException', error => {
            console.log(error)
        });
    }
};