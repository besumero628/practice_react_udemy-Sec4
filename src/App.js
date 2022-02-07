import { CssModules } from "./component/CssModules";
import { Emotion } from "./component/Emotion";
import { InlineStyle } from "./component/inlineStyle";
import { StyledComponents } from "./component/StyledComponents";
import { StyledJSX } from "./component/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
