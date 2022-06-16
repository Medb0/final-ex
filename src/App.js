import { useState } from "react";
import AppRouter from "./AppRouter";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <AppRouter isHome={isHome} />
    </>
  );
}

export default App;
