import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img, Divider } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';


const WeAre = () => {
    return (

            <Box backgroundColor={'whiteAlpha.700'}
            opacity={'75%'}
            padding={'4'}>
                <Flex alignItems="center" justifyContent="space-between">      
                    
   
              
              </Flex>
              
              <Flex alignItems="center" justifyContent="space-between">     
                <Heading 
                        fontFamily='sfprodisplaylight'
                      fontWeight={500}
                        as="h2"
                        color='gray.700'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        letterSpacing="wide"
                        textAlign={'center'}
                        marginBottom={'4px'}
                        
                    >
                     We are not your average group of construction workers and carpenters. Tallowhill is a team of home improvement specialists with deep experience in construction, custom furniture, cabinetry and fabrication.
                        
                    </Heading>
                    </Flex>
                   
                    <Flex alignItems="center" justifyContent="space-between">     
                <Heading 
    fontFamily='sfprodisplaylight'
                      fontWeight={500}
                        as="h2"
                        color='gray.700'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        letterSpacing="wide"
                        textAlign={'center'}
                        
                    >
                    We love what we do and we are passionate about doing it well. Most importanly, we are committed to delivering the highest quality service with a beautiful result four our customers. 
                        
                    </Heading>
                    </Flex>
                    
                <Box mt={5}>
                    <LightMode>

                    </LightMode>
                </Box>
               

            </Box>

    )
}

export default WeAre;