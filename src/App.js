import { CssModules } from "./component/CssModules";
import { InlineStyle } from "./component/inlineStyle";
import { StyledJSX } from "./component/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
    </div>
  );
}
