import { useState } from "react";
import McqScreen from "./components/McqScreen";
import JoinMcq from "./components/JoinMcq";
import Navbar from "./components/Navbar";

export default function App() {
  const [mcq, setMcq] = useState(false);
  return (
    <>
      <Navbar />
      <div className="mcq-container">
        {mcq ? (
          <McqScreen retry={() => setMcq(false)} />
        ) : (
          <JoinMcq start={() => setMcq(true)} />
        )}
      </div>
    </>
  );
}
