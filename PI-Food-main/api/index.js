const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
//aca si el force esta en true dropea todo 
//lo q estas agregando a la base de datos
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
//!aca no hay q hacer nada---------------