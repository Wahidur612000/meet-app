import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method === 'POST'){
        const data=req.body;

        MongoClient.connect('mongodb+srv://wahidur:wahidur8850@cluster0.fqth8tj.mongodb.net/meetups?retryWrites=true&w=majority')
        const db=clent.db();

        const meetupsCollection=db.collection('meetups');

        const result= await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message:'meetups inserted'});
    }
}

export default handler;