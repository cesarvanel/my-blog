import {MongoClient} from 'mongodb' ; 

export async function dbconnect() {

    const url = "mongodb+srv://cesarvanel:WI1KRNXbtcI5j4be@cluster0.yfxqbkg.mongodb.net/?retryWrites=true&w=majority"   // `mongodb+srv://${process.env.mongodb_username}:${mongodb_password}@${mongodb_cluster}.yfxqbkg.mongodb.net/${mongodb_db_Name}?retryWrites=true&w=majority`   ; 
    const client = await MongoClient.connect(url); 
    console.log('Connected successfully to server');
    return client ; 
}

export async function insertnewsletter(client,collection, data) {
    const db = client.db() ; 
    await db.collection(collection).insertOne({data}) ;
}

//WI1KRNXbtcI5j4be

//"mongodb+srv://cesarvanel:WI1KRNXbtcI5j4be@cluster0.yfxqbkg.mongodb.net/?retryWrites=true&w=majority"