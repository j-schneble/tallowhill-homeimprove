import React from 'react';
import { Text, useColorModeValue } from "@chakra-ui/react";

const Paragraph = ({ children, ...props }) => {
    const textColor = useColorModeValue("gray.400", "gray.600");
    
    return (
        <Text color={textColor} {...props}>
            {children}
        </Text>
    )
}

export default Paragraph;