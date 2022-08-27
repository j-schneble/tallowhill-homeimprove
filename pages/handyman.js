import React from 'react';
import { SlideFade, Box, Heading, Divider, Container, Avatar, Image, Link, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';



const Handyman = () => {
    return (
        <Container  maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
        <SlideFade in offsetX={80}>
            <Box>
            <Flex alignItems={"flex"}>
                  
                
                    <Heading
                              fontFamily="sfprodisplayregular"
                        as="h2"
                        color={'blue.800'}
                        fontSize={{ base: '28px', md: '30px', lg: '30px' }}
                        mt={4}
                        ml={3}
                        letterSpacing="wide"
                    >
                        Handyman Services 
                    </Heading>
                    </Flex>
                    <Flex alignItems={"flex"}>
                    <Paragraph fontFamily="sfprodisplaylight"  mt={3} color={'gray.600'} fontSize={{ base: '18px', md: '18px', lg: '22px' }} ml={3}  lineHeight={1.6}>
                    Professional and dependable handyman service in Tampa and the surrounding region.
                    </Paragraph>
                       
                    </Flex>
                    <Divider my={2} bgColor="orange.500" p="1.25"/>
                    <Flex alignItems="center" justifyContent="space-between">     
                <p
                        fontFamily="sfprodisplaylight"
                        fontWeight={500}
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        p={1}
                        letterSpacing="wide"
                        
                    >
                    ✅ We work clean. We don’t make messes and we always sweep and vacuum when we are done.
                </p>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between"> 
                <p
                        fontFamily="sfprodisplaylight"
                        fontWeight={500}
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        p={1}
                        letterSpacing="wide"
                        
                    >
                    ✅ We treat your home, like our own. We wear booties, or take off our shoes, when we are in your house.
                </p>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between"> 
                <p
                        fontFamily="sfprodisplaylight"
                        fontWeight={500}
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        p={1}
                        letterSpacing="wide"
                        
                    >
                    ✅ We respect your time. We schedule service for a specific day and time, and we show up on that day, at that time.
                </p>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between"> 
                <p
                        fontFamily="sfprodisplaylight"
                        fontWeight={500}
                        as="h2"
                        color='rgb(100, 116, 139)'
                        fontSize={{ base: '16px', md: '16px', lg: '20px' }}
                        mt={1}
                        p={1}
                        letterSpacing="wide"
                        
                    >
                    ✅ We are professionals. We look, smell and act accordingly.
                </p>

                   
                    
                    </Flex>


             
            </Box>
            </SlideFade>
            </Container>
    )
}

export default Handyman