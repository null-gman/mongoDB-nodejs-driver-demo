const { MongoClient } = require("mongodb"); /*mongoDB pkg*/
const input = require("./utils/input.js");




/** 
 * @description delete many docs form spicefic collection by query object
 * 
 * @param {closeDB,database} : object that returnd from openDataBase() , 
 * @param collection : string
 * @param query : object 
 * 
 * @returns Promise and resolve after function ends
 */
function deletMany({closeDB,database},collection,query) {
    return new Promise(async (resolve) => {
        const games = database.collection(collection);
        await games.deleteMany(query);  
        await closeDB();
        resolve(0);
    })
}


/** 
 * @description insert one docs to spicefic collection by object
 * 
 * @param {closeDB,database} : object that returnd from openDataBase() , 
 * @param collection : string
 * @param docsObj : object 
 * 
 * @returns Promise and resolve after function ends
 */
function insertOne({closeDB,database},collection,docsObj) {
    return new Promise(async (resolve, reject) => {
        const games = database.collection(collection);
        await games.insertOne(docsObj);
        await closeDB();
        resolve(0);
    })

}

/** 
 * @description read all all docs in spicefic collection by query
 * 
 * @param {closeDB,database} : object that returnd from openDataBase() , 
 * @param collection : string
 * @param query : object 
 * 
 * @returns Promise and resolve after function ends
 */
 function find({closeDB,database},collection,query) {
    return new Promise(async (resolve) => {
        const games = await database.collection(collection);
        const res = games.find(query);
        console.log(await res.toArray((____,docs)=>console.log(docs)));
        await closeDB()
        resolve(0);
    })
}


/** 
 * @description open a mongoDb connection then uses the 'games' dataBase ,
 *              and return the dataBase object and the callback function that close the connection.
 * @param null 
 * @returns  {closeDB function that close the connection , database object}
 */
function openDataBase() {
    const connectionString = "mongodb://127.0.0.1:27017/"; /*my mongoDB  connection string*/
    const client = new MongoClient(connectionString);
    const database = client.db('games');
    return {closeDB:async ()=>  await client.close(),database};   
  }




async function main() {

    await deletMany(openDataBase(),"games",{});
    await insertOne(openDataBase(),"games",{name:"half life"});
    await find(openDataBase(),"games",{});

}


main();