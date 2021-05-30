import  express from 'express';
const app =express();
import React from 'react';
const bodyParser =require('body-parser');
import  ReactDOMServer from 'react-dom/server';
import  App from "../components/App";


 app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3002;

app.get('/', (req, res) => {
      
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Simple React App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${initialMarkup}</div>
      
      </body>
    </html>
  `)
  });
  
app.listen(port,()=>{console.log(`server is running on port ${port}`)});