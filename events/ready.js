module.exports = {
    name: "ready", async execute(arvis) {
        
        console.log(`[AKTİF] ${arvis.user.tag}`);
        arvis.user.setPresence({
            activities: [
                {
                    name: `Made by ❤️ ArviS#0011`,
                    type: "PLAYING"
                }
            ],
            status: "online"
        });
    }
}
//     ArviS#0011









//   ArviS#0011