module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Out For Commands | Say ?help for a list of commands", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};

