import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <div>
      <Fragment>
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
