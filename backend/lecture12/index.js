//npm install express body-parser ejs axios


import express from 'express';
import bodyParser from 'body-parser';//use values
import axios from 'axios';

const app = express();
const port = 3000;
const api_url = 'http://localhost:4000';//endpoint //base url

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//promises async await
app.get("/",async (req, res) => {
    try {
        const response = await axios.get(`${api_url}/posts`);
       res.render("index.ejs", { posts: response.data });
     } catch (error) {
        console.error(error);
        res.status(500).json({error:error});
    }
});

app.get("/create-post",  (req, res) => {
res.render("modify.ejs",{ 
    heading: "Create Post",
    submit: "Create Post",
});
});

app.get("/edit-post/id:", async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`${api_url}/posts/${id}`);
        res.render("modify.ejs", {
            heading: "Edit Post",
            submit: "Update Post",
            post: response.data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
    });
//naming convention
//form post get dialog only
//api post get put batch delete
    app.post("/api/posts", async (req, res) => {
        try {
            // const response = await axios.post(`${api_url}/posts/${req.body}`);
        
            const response = await axios.post(`${api_url}/posts/`,{
            title:req.body.title, 
            content: req.body.content,
            auther: req.body.author,
        });
            res.redirect("/");

           
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error });
        }
    });

//delete
//post id

//edit button the same app.get routes

// app.post("/api/posts/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         const response = await axios.patch(`${api_url}/posts/${id}`, {
//             title: req.body.title,
//             content: req.body.content, });
//         }});

//app.post
// app.delete
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
