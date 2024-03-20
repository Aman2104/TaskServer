const pool = require('../config').pool;
class Submission {
  static submit(username, codeLanguage, stdin, sourceCode) {
    
    return new Promise((resolve, reject) => {
      if (!username || !codeLanguage || !stdin || !sourceCode) {
        reject(new Error('Missing required parameters'));
        return;
      }
      pool.query('INSERT INTO submissions (username, code_language, stdin, source_code) VALUES (?, ?, ?, ?)', [username, codeLanguage, stdin, sourceCode], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static getAllSubmissions() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM submissions', (error, results) => {
        console.log(results);
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Submission;
