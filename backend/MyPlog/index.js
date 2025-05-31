import express from "express";
import bodyParser from "body-parser";
import { dirname, parse } from "path";

const app = express();
const port = 3000;
// function x(){
//     app.get("/",(req,res)=>{
//         res.render("header.ejs",  {blog:blog});
//     });
// }
const data = [
  {
    id: 1,
    title: `Tutorials and How-to Guides`,
    content: `Tutorials and how-to guides are some of the most helpful blog posts you can write. They can also be great for SEO (search engine optimization) because users regularly use Google to search for step-by-step instructions. By focusing on topics related to your product, service, or niche, you can drive valuable traffic to your site.

The most important thing for how-to guides is to break down your tutorial into the smallest steps and simplest terms. Don’t assume your readers know already what they’re doing. Think about the target reader for your post, and make sure you explain every detail they’re likely to need.

Think about your recent work, and you can probably find some great ideas to write a tutorial on. Our co-founder built the largest WordPress resource, WPBeginner, by following this exact same principle. And here at OptinMonster, “Tutorial” is one of the largest categories on our blog.

In short, tutorials and how-to guides work.`,
    date: "2024-04-01",
     author:"Smith"
  },

  {
    id: 2,
    title: "Beginner’s Guides",
    content: `Beginner guides are popular because beginners in any hobby or industry are anxious to learn more. You can mentor from a distance by creating a beginner guide that helps meet their needs and provides great content for your website.

 Beginner guides are often fairly long, as they provide a broad overview of the topic. Here are a few of our own beginner’s guides to see how they work:

 Our beginner’s guide to email marketing covers the definition, advantages and disadvantages, how-to guide, top challenges, FAQs, and case studies.
 Our beginner’s guide to SEO includes a definition, glossary of common terms, top search ranking factors, SEO tips, FAQs, and more.
 Our beginner’s guide to content marketing includes a definition, benefits, how-to tips, tool suggestions, examples, FAQs, and more.
 Beginner guides can be great for SEO purposes because you’ll be explaining and defining new terms, while also providing synonyms for common terms. In this regard, you can pack a lot of keywords in a post in a way that is helpful and informative.`,
    date: "2024-04-02",
     author:"Roald Dahl"
  },
  {
    id: 3,
    title: "Problem and Solutions",
    content: ` Have you ever wondered why news stations always talk about something going wrong? Conflicts and problems draw attention. But in this instance, you can highlight a problem and then provide a solution.

  Here’s an example of how we tackled a common problem in a blog post: Why Are My Emails Going to Spam? 15 Reasons Why & How to Fix Them. This article targets a common problem that many email marketers face. Throughout the blog post, we explain common reasons why emails are flagged as spam and present solutions for each issue.`,
    date: "2024-04-03",
     author:"Sylvia Plath"
  },
 
  {
    id: 4,
    title: "Frequently Asked Questions (FAQs)",
    content: ` FAQs make fantastic posts because they answer questions that your target audience is likely to be Googling. OptinMonster has written posts that answer these common questions and they have performed well.

  You can take several different approaches to FAQs. You could write one long post answering all the frequently asked questions on a topic. But it may be more beneficial to write individual posts that answer common questions. For example, one of our most successful posts answers the question, “What is the best time to send emails?”

  It’s also an excellent practice to include an FAQs section at the bottom of other blog posts. Including commonly searched questions can make a big difference in your search rankings.`,
    date: "2024-04-04",
     author:"Arthur Conan Doyle"
  },
 
  {
    id: 5,
    title: " Create a Glossary",
    content: ` Glossary posts are incredibly useful and are fantastic for SEO purposes. They’re really helpful for users of all levels. They help beginners get started with a new topic, and they help advanced users refresh their memory on less common terms.

  Research current glossaries and figure out the top-searched terms in your industry. You can make a single glossary post or a collection of glossary entries.

  For examples, see OptinMonster’s Glossary of Terms and WPBeginner’s WordPress Glossary.`,
    date: "2024-04-05",
    author:"John Grisham"
  },
  {
    id: 6,
    title: " Case Studies",
    content: `   Case studies are posts that share a success story of how a business or individual used a particular product, service, or technique. You can write a case study about your own business’s experience, or you can partner with one of your customers or clients to show how they succeeded by using your product.

  These posts are usually data-driven and require some time and effort to create. But they’re one of the strongest ways to demonstrate social proof to potential customers.

  For more on the benefits of case studies, check out our post, Why Invest in Case Studies: What They Are and Why They Matter.`,
    date: "2024-04-05",
     author:"Mary Wollstonecraft Shelley"
  }
];
let lastId=6;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { data: data });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/save", (req, res) => {
  data.push(
   { id:++lastId,
    author:req.body.author,
    content: req.body.content,
    title: req.body.title,
    date: new Date(),
  }
);
  res.redirect("/");
  });

  app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post =data.find((item) => item.id == id);
    res.render("edit.ejs",{post:post});
  }    
  );
  
  app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const postindex = data.findIndex((post) => post.id === id);
    const updatedPost = {
        id: id,
        content: req.body.content,
        author: req.body.author,
        title: req.body.title,
        date:new Date()
    };   
   data[postindex]=updatedPost;
   res.redirect("/");

  }
  );
  app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = data.findIndex((post) => post.id === id);
    if(postIndex >-1){
      data.splice(postIndex, 1);
      res.status(200);
      res.redirect("/");
    }else{
      res.status(404).json(error);
    }
    }
  );

app.listen(port, () => {});
