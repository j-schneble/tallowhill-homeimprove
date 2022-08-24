import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  Tooltip
} from "@chakra-ui/react";


export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");


  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <Tooltip
      label={text === "dark" ? "Dark mode" : "Light mode"}
      aria-label="A tooltip"
    >
  
    </Tooltip>
  );
};
