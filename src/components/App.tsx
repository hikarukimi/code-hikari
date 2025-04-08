import React from 'react';
import '../css/App.css';
import '../css/index.css'
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./Footer";
import {Article} from "./mainArea/Article";

export default function App() {
  return (
      <BrowserRouter>
          <Header></Header>
          <Article></Article>
          <Footer></Footer>
      </BrowserRouter>
  )
}
