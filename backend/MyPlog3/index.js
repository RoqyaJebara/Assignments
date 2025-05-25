// app//get post form browser
//api.js axios get post put batch delete
import express, { response } from 'express';
import bodyParser from 'body-parser';//use values
// import { fileURLToPath } from "url";
// import { dirname } from 'path';
import axios from 'axios';

// const __dirname = dirname(fileURLToPath(import.meta.url));
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

app.get("/create",  (req, res) => {
res.render("create.ejs",{    
});
});

app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`${api_url}/posts/${id}`);
        res.render("edit.ejs", {
            // heading: "Edit Post",
            // submit: "Update Post",
            post: response.data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
    });
// //naming convention
// //form post get dialog only
//api post get put batch delete
    app.post("/save", async (req, res) => {
        try {
            // const response = await axios.post(`${api_url}/posts/${req.body}`);
        
            const response = await axios.post(`${api_url}/posts`,{
            title:req.body.title, 
            content: req.body.content,
            author: req.body.author,
            date: new Date(),
          
        });
        console.log(response.data);
            res.redirect("/");

           
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error });
        }
    });

    app.post("/save-changes/:id", async (req, res) => {
      const id = req.params.id;
      try {
          // const response = await axios.post(`${api_url}/posts${id}`,req.body);//add date not in req.body
      
          const response = await axios.patch(`${api_url}/posts/${id}`,{
          title:req.body.title, 
          content: req.body.content,
          author: req.body.author,
          date: new Date(),
        
      });
      console.log(response.data);
          res.redirect("/");

         
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: error });
      }
  });

  app.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        // const response = await axios.post(`${api_url}/posts${id}`,req.body);//add date not in req.body
    
        const response = await axios.delete(`${api_url}/posts/${id}`);
        res.redirect("/");

       
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
