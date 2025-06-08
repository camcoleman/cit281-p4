const express = require("express");
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
} = require("./p4-module");

const app = express();
const port = 8080;

// Routes
app.get("/cit/question", (req, res) => {
  res.json({ error: "", statusCode: 200, questions: getQuestions() });
});

app.get("/cit/answer", (req, res) => {
  res.json({ error: "", statusCode: 200, answers: getAnswers() });
});

app.get("/cit/questionanswer", (req, res) => {
  res.json({ error: "", statusCode: 200, questions_answers: getQuestionsAnswers() });
});

app.get("/cit/question/:number", (req, res) => {
  const result = getQuestion(req.params.number);
  res.status(result.error ? 400 : 200).json({ ...result, statusCode: result.error ? 400 : 200 });
});

app.get("/cit/answer/:number", (req, res) => {
  const result = getAnswer(req.params.number);
  res.status(result.error ? 400 : 200).json({ ...result, statusCode: result.error ? 400 : 200 });
});

app.get("/cit/questionanswer/:number", (req, res) => {
  const result = getQuestionAnswer(req.params.number);
  res.status(result.error ? 400 : 200).json({ ...result, statusCode: result.error ? 400 : 200 });
});

// Catch-all for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", statusCode: 404 });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
