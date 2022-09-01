import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img, Divider } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';
import NextLink from 'next/link'

const LetsGetStarted = () => {
    return (

        <Box>
            <Flex alignItems="center" justifyContent="space-between">      
                    
                    <Heading
                    fontFamily="sfprodisplaybold"
                              
                    as="h1"
                        color='blue.800'
                        fontSize={{ base: '20px', md: '20px', lg: '22px' }}
                       
                        mb={3}
                        letterSpacing="wide">
                                Lets Get Started ☑️
      
                    </Heading>
                    
                    </Flex>
                    <Heading
                    fontFamily="sfprodisplaylight"
                    as="h1"
                    fontStyle={'italic'}
                    fontSize={{ base: '15px', md: '15px', lg: '17px' }}
                    mb={3}
                    textColor={'gray.600'}
                    letterSpacing="wide"
                    textAlign={'center'}
                    backgroundColor={'gray.50'}
                    paddingTop="1"
                    paddingBottom="1"
                    >
                    In most cases, we can provide a firm estimate after just a quick phone call. We would never exceed our estimate without your approval.
                    </Heading>
                   
                   
        </Box>

        )
    }
    
    export default LetsGetStarted;