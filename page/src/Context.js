import { createContext, useState } from "react";

export const ColorModeContext = createContext();

export function ColorProvider({ children }) {
  // const [checked, setChecked] = useState(true)
  // const handleChange = () => {
  //     setChecked(!checked)

  return (
    <ColorModeContext.Provider value={{}}>{children}</ColorModeContext.Provider>
  );

  // }
}
