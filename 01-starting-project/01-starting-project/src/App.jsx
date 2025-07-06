import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // <Fragment> same as <> below
    <>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </Fragment> same as </> above
  );
}

export default App;
