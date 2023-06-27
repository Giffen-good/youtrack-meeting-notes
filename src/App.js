import React from "react";

import "@jetbrains/ring-ui/dist/style.css";
import Popup from "@jetbrains/ring-ui/dist/popup/popup";
import Toggle from "@jetbrains/ring-ui/dist/toggle/toggle";
import Heading from "@jetbrains/ring-ui/dist/heading/heading";
import Dropdown from "@jetbrains/ring-ui/dist/dropdown/dropdown";
import Select from "@jetbrains/ring-ui/dist/select/select";
import Theme, { ThemeProvider } from "@jetbrains/ring-ui/dist/global/theme";

import "./styles.css";

const darkMatcher = window.matchMedia("(prefers-color-scheme: dark)");

export default function App() {
  const [dark, setDark] = React.useState(darkMatcher.matches);

  React.useEffect(() => {
    const onChange = (e) => setDark(e.matches);
    darkMatcher.addEventListener("change", onChange);

    return () => darkMatcher.removeEventListener("change", onChange);
  }, []);

  return (
    <ThemeProvider className="App" theme={dark ? Theme.DARK : Theme.LIGHT}>
      <Heading className="component">
        Start editing to see some magic happen!
      </Heading>

      <Toggle
        defaultChecked={dark}
        className="component"
        onChange={(e) => setDark(e.target.checked)}
      >
        Dark theme
      </Toggle>

      <Dropdown anchor="Click me" className="component">
        <Popup className="popup">Hello from Ring UI!</Popup>
      </Dropdown>

      <Select
        className="component"
        data={[
          { key: "1", label: "I am item" },
          { key: "2", label: "Pick me" }
        ]}
      />
    </ThemeProvider>
  );
}
