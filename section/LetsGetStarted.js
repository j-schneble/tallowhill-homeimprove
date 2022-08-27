import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img, Divider } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';


const LetsGetStarted = () => {
    return (

        <Box>
            <Flex alignItems="center" justifyContent="space-between">      
                    
                    <Heading
                    fontFamily="sfprodisplayregular"
                              
                              as="h1"
                              color='orange.500'
                              fontSize={{ base: '16px', md: '18px', lg: '22px' }}
                            
                              mb={3}
                              letterSpacing="wide">
                                Lets Get Started ☑️
      
                    </Heading>
                    </Flex>
      
                   
        </Box>

        )
    }
    
    export default LetsGetStarted;