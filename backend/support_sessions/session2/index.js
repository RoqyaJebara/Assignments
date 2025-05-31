import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "LMS",
  password: "P@ssw0rd",
  port: 5432,
});
db.connect().then(() => {
  console.log("connected");
});

app.get("/courses", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM courses ORDER BY name");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/courses/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query("SELECT * FROM courses WHERE id = $1", [id]);
    if (result.rows.length > 1) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/courses", async (req, res) => {
  const name = req.body.name;
  try {
    const result = await db.query(
      "INSERT INTO courses(name) VALUES($1) RETURNING *",
      [name]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/modules", async (req, res) => {
  const course_id = req.body.course_id;
  try {
    const result = await db.query(
      "SELECT * FROM modules WHERE course_id = $1",
      [course_id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/modules", async (req, res) => {
  const { name, course_id } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO modules(name,course_id) VALUES($1,$2) RETURNING *",
      [name, course_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/lessons", async (req, res) => {
  const module_id = req.body.module_id;
  try {
    const result = await db.query(
      "SELECT * FROM lessons WHERE module_id = $1",
      [module_id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/lessons", async (req, res) => {
  const { name, module_id } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO lessons(name,module_id) VALUES($1,$2) RETURNING *",
      [name, module_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(3000, () => {});