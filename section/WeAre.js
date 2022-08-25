import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img, Divider } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';


const WeAre = () => {
    return (

            <Box>
                <Flex alignItems="center" justifyContent="space-between">      
                    
              <Heading
              fontFamily="sfprodisplayregular"
                        
                        as="h1"
                        color='orange.500'
                        fontSize={{ base: '22px', md: '24px', lg: '28px' }}
                        mt={1}
                        mb={3}
                        letterSpacing="wide">
                          Our Team ☑️

              </Heading>
              
              </Flex>
              
              <Flex alignItems="center" justifyContent="space-between">     
                <Heading 
                        fontFamily="sfprodisplaylight"
                        
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '18px', md: '22px', lg: '24px' }}
                        mt={1}
                        letterSpacing="wide"
                        
                    >
                     We are not your average group of construction workers and carpenters. Tallowhill is a team of home improvement specialists with deep experience in construction, custom furniture, cabinetry and fabrication.
                        
                    </Heading>
                    </Flex>
                    <Divider my={1} />
                    <Flex alignItems="center" justifyContent="space-between">     
                <Heading 
                        fontFamily="sfprodisplaylight"
                        
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '18px', md: '22px', lg: '24px' }}
                        mt={1}
                        mb={2}
                        letterSpacing="wide"
                        
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