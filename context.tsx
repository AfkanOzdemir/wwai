import { createContext } from "react";
import { ContextApiProps } from "./types/Message";

const Context = createContext<ContextApiProps>({
  apiData: [],
  setApiData: () => {},
});

export default Context;
