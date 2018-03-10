module.exports = function(server) {
  let vacancy = require('./controllers/vacancyController');
  let candidate = require('./controllers/candidateController');

  server.get("/vacancies", vacancy.getVacancies);

  server.get("/candidates", candidate.getCandidates);

};