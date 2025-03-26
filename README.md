# mongoDB-nodejs-driver-demo
a demo for **mongoDB** api in nodejs , it's just like a reference for **mongoDB pkg** api .

to lean **mongoDB** from scratch i recomend to check the [mongoDB docs](https://www.mongodb.com/docs/).


> the code will not work unless you start a mongoDB connection and change the ip/port if needed .

# usage 
1. run `npm install`
2. run `npm start`



# contributing
Found a bug or improvement or just want to contribute to this repo, feel free to use the **issues** section and fork and pull requested.

# reference 
## **fundamentals**
#### first you need to **mongodb connection** , then what is that ?
  
it's the service that work in background or even on the cloud like [mongoDB atlas](https://www.mongodb.com/atlas) , or hosted on you local machine on **localhost 127.0.0.1** , to conict the server with mongoDB pkg api you need a **connection string** .

#### great now you have the connection ,what's now ?
now choose the **DataBase** that wan't to work with .

```js
    const connectionString = "mongodb://127.0.0.1:27017/"; /*my mongoDB  connection string*/
    const client = new MongoClient(connectionString); /* using MongoClient to create a connection */
    const database = client.db('games'); /*chooseing the DataBase*  /
    await client.close(); /* to close the connection */
```

## the methodes that used and there explanation
|**methode**| **prameters**|**return**|**explanation**|**async**|
|-----------|--------------|----------|---------------|-----------------|
|database.collection()|string:collection|collection object|member method on dataBase object take the collection name and return the collection object|true|
