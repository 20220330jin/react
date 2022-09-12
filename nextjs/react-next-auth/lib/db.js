import {MongoClient} from "mongodb";

export async function connectToDatabase(){
    const dbUrl = 'mongodb+srv://khjkhj1212:Rlagus12!%40@cluster0.cqddlaq.mongodb.net/auth-demo?retryWrites=true&w=majority'
    const client = await MongoClient.connect(dbUrl);

    return client;
}
