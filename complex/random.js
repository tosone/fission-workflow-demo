module.exports = async function(context) {
    // console.log("random:", context.request);
    console.log("random:", context.request.body);
    return {
        status: 200,
        body: Math.ceil(Math.random() * 100) + "\n"
    };
}

// fission fn create --name random --env nodejs --code random.js
// fission fn delete --name random
