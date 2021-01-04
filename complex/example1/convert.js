module.exports = async function(context) {
    return {
        status: 200,
        body: context.request.body.toString()
    };
}

// fission fn create --name convert --env nodejs --code convert.js
// fission fn delete --name convert
// fission fn test --name convert
