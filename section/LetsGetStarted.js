import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img, Divider } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';
import NextLink from 'next/link'

const LetsGetStarted = () => {
    return (

        <Box
        backgroundColor={''}>
            <Flex alignItems="center" justifyContent="space-between">      
                    
                
                    
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
               
                    paddingTop="4"
                    paddingBottom="1"
                    >
                    In most cases, we can provide a firm estimate after just a quick phone call. We would never exceed our estimate without your approval.
                    </Heading>
                   
                   
        </Box>

        )
    }
    
    export default LetsGetStarted;