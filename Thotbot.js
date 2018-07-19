const Discord = require('discord.js');
const bot = new Discord.Client();

function responseChooser(number) {
    if (number === 1) {
        return "THOT DETECTED"
    } 
    else if (number === 2) {
        return "THOTS BEWARE:rage::rage:\nTHIS SERVER HAS ANTI-THOT COUNTERMESURES!:middle_finger::skin-tone-5:"
    } 
    else if (number === 3) {
        return "BEGONE THOT"
    } 
    else if (number === 4) {
        return "NOOOOO THOTS:angry::triumph::triumph:"
    } 
    else if (number === 5) {
        return "***Laughs Maniacally***...*Foolish THOT*"
    } 
    else if (number === 6) {
        return "MULTIPLE THOTS DETECTED:triumph: :triumph: :triumph: \nABORT MISSION"
    }
}

function containsPunct(arg){
    if((arg[arg.length - 1] === '?') || 
        (arg[arg.length - 1] === '.') || 
        (arg[arg.length - 1] === '!') || 
        (arg[arg.length - 1] === ',') || 
        (arg[arg.length - 1] === ':') || 
        (arg[arg.length - 1] === ';') ||
	(arg[arg.length - 1] === '"'))
    {
        arg = arg.substring(0, arg.length - 1);
    }
    return arg;
}

bot.on('message', (message) => {
    if (message.author.bot) return;
   	
    //message.channel.send("THOTBOT ONLINE!") Turned off for debugging purposes

    var messagesplit = message.content.split(" ");
    /*
        Splits the Discord message into an array of strings using " " as a delimiter.
    */
    if (messagesplit[0] === "!noscan") {
        messagesplit = "REMOVED";
    }

    if (messagesplit[0] === "!stop") {
        message.reply("https://m.imgur.com/r/The_Dennis/0VbZH5G");
    }

    if (messagesplit[0] === "!sourcecode") {
	message.reply("https://github.com/Thotbot/Thotbot-Source/blob/master/Thotbot.js");
    }

    for (var i = 0; i < messagesplit.length; i++) {
        messagesplit[i] = messagesplit[i].toLowerCase();
        var removedPunctMessageSplit = containsPunct(messagesplit[i]);
        
        var messageLower = message.content.toLowerCase();

        if ((removedPunctMessageSplit === "thot") || (removedPunctMessageSplit === "thottie") || (removedPunctMessageSplit === "thotie") || (removedPunctMessageSplit === "thotty") || (removedPunctMessageSplit === "thoty") || (removedPunctMessageSplit === "th0t")) {
            message.reply(responseChooser((Math.floor(Math.random() * 5) + 1)))
        } 
        else if (removedPunctMessageSplit === "thots") {
            message.reply(responseChooser(6))
        } 
        else if (removedPunctMessageSplit === "creator") {
            message.reply("My creator is SaleenTheGod.\nDiscord: SaleenTheGod#8331\nReddit: https://www.reddit.com/user/saleen_af")
        } 
        else if (removedPunctMessageSplit === "!help") {
            message.reply("My creator created me to destroy thots in his image.\n Ask me \"Who is your creator?\"")
        }
    }
});

bot.login('REMOVED');



