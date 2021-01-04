module.exports = async function(context) {
    console.log("random:", context.request.body);
    return {
        status: 200,
        body: Math.ceil(Math.random()*100) + "\n"
    };
}
