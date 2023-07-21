const express = require('express')
const app = express()

/** 
 * @constructor app.use This is gonna load the public content
 * This loads the content from public folder (index)
 * This executes the static content and ignore the routes created below. It's important to note this should only be used in case you're using a static pages
 **/
app.use(express.static('public'));


/**
 * @constant express This is the require (package/module) that's installed with express package
 * @constant app This is a constant that refers to server initialization (express)
 */
app.get('/', function (req, res) {
    res.send('Hello World')
})
/**
 *   @param res.sendFile sends the absoulute path (Path where is installed the app) and concat with folders and files
 * This is going to load the page 404 html when the route does not exist
 */
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(8080)