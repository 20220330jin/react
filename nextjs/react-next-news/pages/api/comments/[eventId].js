function handler(req, res) {
    const eventId = req.query.eventId;

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
            text
        }

        console.log(newComment);

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
}

export default handler;
