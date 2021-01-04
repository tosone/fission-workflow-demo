module.exports = async function(context) {
    // console.log("random:", context.request);
    
    console.log("body:", context.request.body);
    return {
        status: 200,
        body: Math.ceil(Math.random() * 100) + "\n"
    };
}

// fission fn create --name convert --env nodejs --code convert.js
// fission fn delete --name convert
