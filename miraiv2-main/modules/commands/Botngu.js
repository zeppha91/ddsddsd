const fs = require("fs");
module.exports.config = {
name: "Bot ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Bot ngu",
	commandCategory: "Other",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ngu")==0 || (event.body.indexOf("Bot ngu")==0)) {
		var msg = {
				body: "Thôi em im mẹ mồm lồn lại nha",
				attachment: fs.createReadStream(__dirname + `/noprefix/hay.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}