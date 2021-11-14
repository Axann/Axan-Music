// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client) => {


// ─────────────────────────────────── || LEK URIP || ─────────────────────────────────── //


    client.logger.log(`${client.user.username} Sudah online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");


// ─────────────────────────────────── || ACTIVITY || ─────────────────────────────────── //


    let statuses = [ 'NGONTOLZ' , 'PENTIL DEVELOPER' , 'ZICCONTOL' ];

    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"});
    }, 10000)


}