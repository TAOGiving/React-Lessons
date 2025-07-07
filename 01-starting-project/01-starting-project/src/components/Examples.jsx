import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //Always returns an array with two elements, the first is the state variable and the second is a function to update the state variable.
  //React will only execute component once, when it is first rendered.
  // React will not re-execute the component when the state changes.

  function handleSelect(selectedButton) {
    // SelectedButton => 'Component','JSX','Props','State'
    // console.log(selectedButton);
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(tabContent);
    // console.log(selectedTopic);
  }
  //   console.log("App component executed");

  let tabcontent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>{" "}
          </>
        }
      >
        {tabcontent}
      </Tabs>
    </Section>
  );
}
