import "./App.css";
import MastHead from "./components/MastHead";
import GuideContainer from "./components/GuideContainer";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [showGuideContainer, setShowGuideContainer] = useState(false);

  const handleHamburgerClick = () => {
    setShowGuideContainer(true);
  };

  const hiddenGuideContainer = () => {
    setShowGuideContainer(false);
  };

  return (
    <main id="main-container">
      <MastHead handleHamburgerClick={handleHamburgerClick} />
      <GuideContainer
        showGuideContainer={showGuideContainer}
        hiddenGuideContainer={hiddenGuideContainer}
      />
      <Content />
    </main>
  );
}

export default App;
