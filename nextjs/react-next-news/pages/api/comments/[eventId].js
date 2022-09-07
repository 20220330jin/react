import {MongoClient} from "mongodb";

async function handler(req, res) {
    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://khjkhj1212:Rlagus12!%40@cluster0.cqddlaq.mongodb.net/events?retryWrites=true&w=majority');

    if (req.method === 'POST') {
        const {email, name, text} = req.body;
        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({message: 'Invalid Input.'});
            return;
        }

        console.log(email, name, text);
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
            eventId
        }

        console.log(newComment);

        const db = client.db();
        const result = await db.collection('comments').insertOne(newComment);
        console.log(result);


        res.status(201).json({message: 'Added Comment.', comment: newComment})

    }
    if (req.method === 'GET') {
        const dummyList = [
            {
                id: 'c1',
                name: 'jin',
                text: 'dfasdf',
            }
        ];

        res.status(201).json({comments: dummyList})
    }

    client.close();
}

export default handler;
