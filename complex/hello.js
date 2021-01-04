module.exports = async function(context) {
   console.log("hello:", context.request.body); 
   return {
        status: 200,
        body: "hello, world!\n"
    };
}
