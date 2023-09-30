
// For more information about JSON-Server take a look here:
// https://www.npmjs.com/package/json-server

const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const port = 3000;

app.use(jsonServer.defaults());
app.use('/api/v1', router);
// Data are available under http://localhost:3000/api/v1/tasks
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on http://localhost:${port}`)
});