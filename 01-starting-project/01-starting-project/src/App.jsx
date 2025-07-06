// import ComponentsImg from "./assets/components.png";
// import { useState, Fragment } from "react";
// import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
// import CoreConcept from "./components/CoreConcept.jsx";
// import TabButton from "./components/TabButton.jsx";
// import CoreConcept from "./components/CoreConcept.jsx";
import { EXAMPLES } from "./components/Examples.jsx";

function App() {
  return (
    // <Fragment> same as <> below
    <>
      <Header />

      <main>
        <CoreConcepts />
        <EXAMPLES />
      </main>
    </>
    // </Fragment> same as </> above
  );
}

export default App;
