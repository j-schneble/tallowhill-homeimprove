import React from 'react';
import { SlideFade, Box, Heading, Divider, Container, Avatar, Image, Link, Text, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import RatesComp from '../service/ratesComp.tsx'


const Handyman = () => {
    return (
        <Container  maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
        <SlideFade in offsetX={80}>
            <Box>
            <Flex alignItems={"flex"}>                             
                    <Heading
                        fontFamily="sfprodisplayregular"
                        as="h2"
                        color={'orange.500'}
                        fontSize={{ base: '28px', md: '30px', lg: '30px' }}
                        mt={4}
                     
                        letterSpacing="wide"
                    >
                        Handyman Services 
                    </Heading>
                </Flex>

            <Flex alignItems={"flex"}>
                <Paragraph fontFamily="sfprodisplaylight" mt={1} ml={1} borderLeftColor="gray-50" borderLeftWidth="2px" mb={4} p={1} color={'gray.500'} fontSize={{ base: '16px', md: '16px', lg: '18px' }}  lineHeight={1.6}>
                    Tampa Bay and surrounding region.
                </Paragraph>                      
            </Flex>                  
            </Box>
            <Box
             mt={2}>
                <div className='grid grid-cols-3 gap-2 '>
                    <Flex 
                    className='glass2'
                        alignItems="center" 
                        fontFamily="sfprodisplaybold"
                        as="h2"
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        borderRadius={'4px'}
                        textAlign="center" 
                        textColor="white"
                    >     
                        <p>
                            We work clean.
                        </p>
                    </Flex>
                
                    <Flex 
                        className='glass2'
                        alignItems="center" 
                        fontFamily="sfprodisplaybold"
                        as="h2"
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        borderRadius={'4px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         We respect your time.
                        </p>
                    </Flex>

                    <Flex 
                    className='glass2'
                        alignItems="center" 
                        fontFamily="sfprodisplaybold"
                        as="h2"
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        borderRadius={'4px'}
                        textAlign="center" 
                        textColor="white"                    
                        > 
                        <p>
                            We are professionals. 
                        </p>
                    </Flex>
                </div>
            </Box> 
            <Box>
                <div>
                <Flex 
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                        as="h2"
                        fontSize={{ base: '17px', md: '17px', lg: '19px' }}
                        mt={5}
                        p={1}
                        textAlign="center" 
                        textColor="blue.800"
                        backgroundColor={'gray.50'}
                    >
                    <p>
                    Whether you need help assembling furniture, installing a ceiling fan or new light fixtures, or hanging artwork, we got you! 
                    </p>
                    </Flex>     
                </div>
            </Box>
              
            
            <Box className='mt-6'>                  
                <div className='grid grid-cols-2 gap-2 '>
                    <Box
                 
                    padding={2}
                    marginBottom={2}
                    backgroundColor='white'
                    borderRadius={'sm'}
                    >
                        <Heading className='mb-2 text-xl font-semibold text-center text-orange-500 font-sfprodisplayregular'>
                           Rates
                        </Heading>
                        <Box
                        backgroundColor={'gray.50'}
                        marginBottom={1}
                        padding={1}>
                    
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplaybold"
                        fontWeight="bold"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                     
                       >
                            First Hour
                        </Paragraph>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
                        
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wide'}
                        
                       
                       >
                            $105
                        </Paragraph>
                        </Box>
                        <Box
                        backgroundColor={'gray.50'}
                        marginBottom={1}
                        padding={1}>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplaybold"
                        fontWeight="bold"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                     
                       >
                             Hours After
                        </Paragraph>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
                        
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wide'}
                        
                       
                       >
                           $85
                        </Paragraph>
                     </Box>
                    </Box>
                   
                    <Box
                  
                    padding={2}
                    marginBottom={2}
                    backgroundColor='white'
                    borderRadius={'sm'}
                    >
                        <Heading className='mb-2 text-xl font-semibold text-center text-orange-500 font-sfprodisplayregular'>
                            Hours
                        </Heading>
                        <Box
                        backgroundColor={'gray.50'}
                        marginBottom={1}
                        padding={1}>
                 <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplaybold"
                        fontWeight="bold"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                     
                       >
                             Monday - Friday 
                        </Paragraph>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
                        
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wide'}
                        
                       
                       >
                            9am - 6pm
                        </Paragraph>
                                </Box>
                                <Box
                                 backgroundColor={'gray.50'}>

                             
                           <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplaybold"
                        fontWeight="bold"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                    
                        
                       >
                           Saturday  
                        </Paragraph>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
              
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wide'}
                       
                        
                       >
                          9am - 1pm
                        </Paragraph>
                        </Box>
                   </Box>
                </div>

                <Paragraph fontFamily="sfprodisplayregular" textAlign={'center'} mt={3} color={'gray.600'} fontSize={{ base: '16px', md: '16px', lg: '16px' }} ml={3}  lineHeight={1.6}>
                    Whether you need help assembling furniture, installing a ceiling fan or new light fixtures, or hanging artwork, we got you! 
                </Paragraph>
            </Box>
            
           
        </SlideFade>
    </Container>
    )
}

export default Handyman
