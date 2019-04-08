module.exports = {
    port: process.env.PORT || 8080, //3001 by default
    db: process.env.MONGODB || 'mongodb://localhost:27017/bikes',
    SECRET_TOKEN: 'miclavedetokens'
}
