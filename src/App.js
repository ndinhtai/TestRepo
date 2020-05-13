import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am a headline made with HTML</h1>
        <p>
          And I am a simple text paragraph. The color of this text is styled
          with CSS. Click the button below to remove me through the power
          JavaScript.
        </p>
        <p class="hide">
          She who arrival end how fertile enabled. Brother she add yet see
          minuter natural smiling article painted. Themselves at dispatched
          interested insensible am be prosperous reasonably it. In either so
          spring wished. Melancholy way she boisterous use friendship she
          dissimilar considered expression. Sex quick arose mrs lived. Mr things
          do plenty others an vanity myself waited to. Always parish tastes at
          as mr father dining at. Must you with him from him her were more. In
          eldest be it result should remark vanity square. Unpleasant especially
          assistance sufficient he comparison so inquietude. Branch one shy
          edward stairs turned has law wonder horses. Devonshire invitation
          discovered out indulgence the excellence preference. Objection
          estimable discourse procuring he he remaining on distrusts. Simplicity
          affronting inquietude for now sympathize age. She meant new their sex
          could defer child. An lose at quit to life do dull{" "}
        </p>
        <button>Hide the text above</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
