module.exports = async function(context) {
   console.log(context.request.body); 
   return {
        status: 200,
        body: "hello, world!\n"
    };
}
