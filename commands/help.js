const osu = require("./osu")

module.exports = {
    name: "help",
    description: "this is a help command",
    execute(message, args){
        message.channel.send("All commands: -help, -osu, -website, -youtube, -join, -ping.");

    }


}