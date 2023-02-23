const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://oz841119:${process.env.MONGODB_PASSWORD}@mydatabase.8ykhpd6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
module.exports = client