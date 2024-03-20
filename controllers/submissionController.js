const { client } = require('../middlewares/redisMiddleware');
const Submission = require('../models/SubmissionModel');

exports.submit = (req, res) => {
  const { username, codeLanguage, stdin, sourceCode } = req.body;
  Submission.submit(username, codeLanguage, stdin, sourceCode)
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully' });
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Error submitting form' });
    });
};

exports.getAllSubmissions = (req, res) => {
  Submission.getAllSubmissions()
    .then(results => {
      res.status(200).json(results);
      client.setEx("cache", 3600, JSON.stringify(results))
    })
    .catch(error => {
      console.error('Error fetching submissions:', error);
      res.status(500).json({ error: 'Error fetching submissions' });
    });
};

