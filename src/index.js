import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter } from "react-router-dom"
import express from "express"
import * as dotenv from "dotenv"
import connect from './config/db.config';
import userRoute from './routes/user.Routes';



const app = express()
dotenv.config()
app.use(express.json())
connect()
app.use("/user", userRoute)
//app.use("/task", taskRoute)

app.listen(process.env.PORT, ()=>{
  console.log(`Server up and running on port: http://localhost:${process.env.PORT}`)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
   
  </React.StrictMode>
);

