//crud oeration API

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;
//swager
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1', author: 'Alice', date: '2024-04-01' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2', author: 'Bob', date: '2024-04-02' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3', author: 'Charlie', date: '2024-04-03' },
    { id: 4, title: 'Post 4', content: 'Content of Post 4', author: 'yara', date: '2024-04-04' },
    { id: 5, title: 'Post 5', content: 'Content of Post 5', author: 'Eli', date: '2024-04-05' },
    { id: 6, title: 'Post 6', content: 'Content of Post 6', author: 'Fay', date: '2024-04-06' },
    { id: 7, title: 'Post 7', content: 'Content of Post 7', author: 'George', date: '2024-04-07' },
    { id: 8, title: 'Post 8', content: 'Content of Post 8', author: 'Huda', date: '2024-04-08' },
    { id: 9, title: 'Post 9', content: 'Content of Post 9', author: 'Ibrahim', date: '2024-04-09' },
    { id: 10, title: 'Post 10', content: 'Content of Post 10', author: 'Jana', date: '2024-04-10' }
  ];
  
let lastId = 10; 
//Read
app.get('/posts', (req, res) => {
    res.json(posts);
    }   
);

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);
    if (post) {//check in DB
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });//error message
    }
});
// same convinjion
//Create
app.post('/posts', (req, res) => {
    //first save create the post then update 
    lastId++;
    //to update the lastId variable
    const newPost = {
        id: lastId,
        //to minimize the error
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: new Date(),
    };
    posts.push(newPost);
    res.status(201).json(newPost);//.json for testing
});

//path to be in the save side
//update
app.patch('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);
    const postObj =posts[postIndex];
    const updatedPost = {
        id: id,
        title: req.body.title || postObj.title,
        content: req.body.content || postObj.content,           
       author: req.body.author || postObj.author,
        date: new Date(),
    }
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
    });
    app.put('/posts/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const postIndex = posts.findIndex((post) => post.id === id);
        if (postIndex > -1) {
            const updatedPost = {
                id: id,
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                date: new Date(),
            };
            posts[postIndex] = updatedPost;
            res.json(updatedPost);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    );
//Delete

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex > -1) {
        posts.splice(postIndex, 1);
        res.status(204).send(); 
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
}
);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


