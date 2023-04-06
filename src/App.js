import React, { useState } from "react";
import Navbar from "./myComponents/Navbar";
import News from "./myComponents/News";

//⭐⭐ ROUTER KO (npm install react-router-dom) IS COMMAND SE USE KRNE PER SWITCH KI ERROR AAHEGI THI USE THIS COMMAND (npm install react-router-dom@5.3.0)
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App(props) {
  const pageSize = 6;
  // process.env. krke aap apnw enviroment vairable ko access kr skte ho
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  // render ek live cycle metode h(JSX KO HTML M COMPAILE KRKE SCREEN PER HTML KO RENDER KRNA)

  return (
    <div>
      <Navbar />
      {/* <News pageSize={pageSize0} country="in" category="general" /> -->bcz switch m use kr liya*/}
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        {/*⚪sirf end-point change ho rhe  component change nhi ho rha th jb hum click kr rhe the tho humne exact use kiya AND uniqe key di thaki ye component remound ho jahe */}
        {/*⭐<Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"/> </Route> ->AISE  NHI LIKTE H NEW REACT DOM M */}

        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />

        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />

      </Routes>
    </div>
  );
}

// import './App.css';
// // CLASS BASE COMPONENTS USE KRENGE

// // rcc
// import React, { Component } from 'react'

// export default class App extends Component {
//   c = ' Harry'
//   render() {
//     return (
//       <div className='bg-danger'>
//         Hello my first classbase component{c}
//       </div>
//     )
//   }
// }
