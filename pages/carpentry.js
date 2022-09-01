import React from 'react';
import { SlideFade, Box, Heading, Divider, Container, Avatar, Image, Link, Text, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import RatesComp from '../service/ratesComp.tsx'


const Carpentry = () => {
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
                     
                        letterSpacing="wide"
                    >
                        Custom Carpentry
                    </Heading>
                </Flex>

            <Flex alignItems={"flex"}>
                <Paragraph fontFamily="sfprodisplaylight" mt={2} ml={1} borderLeftColor="gray-50" borderLeftWidth="2px" mb={4} p={1} color={'gray.500'} fontSize={{ base: '16px', md: '16px', lg: '18px' }}  lineHeight={1.6}>
                Our our process ensures that you get the highest-quality solution, that meets your design aesthetic, and is delivered on-time.
                </Paragraph>                      
            </Flex>                  
            </Box>
            <Box className='mt-6 '>                  
                <div className='grid grid-cols-1 gap-2 '>
                    <Box
                    className='macshad'
                    borderBottomWidth={'2px'}
                    borderBottomColor={'blue.800'}
                    borderTopWidth={'2px'}
                    borderTopColor={'blue.800'}
                    
                    padding={2}
                    marginBottom={2}
                    backgroundColor='white'
                    borderRadius={'sm'}
                   
                    >
                      
                        <Box
                        backgroundColor={'gray.50'}
                        marginBottom={1}
                        padding={1}>
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
                        fontWeight="500"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                        marginBottom={2}
                        padding={2}
                     
                       >
                           We meet to discuss your needs, design ideas and inspirations, discuss budget and evaluate the space.
                        </Paragraph>
                    
                        <Paragraph 
                        textAlign="center"
                        fontFamily="sfprodisplayregular"
                        fontWeight="500"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                        marginBottom={2}
                        padding={2}
                       >
                           We provide you with a formal, detailed quote based on our discussions along with a drawing to ensure you are comfortable with the design and plan.
                        </Paragraph>
                        <Paragraph 
                     textAlign="center"
                        fontFamily="sfprodisplayregular"
                        fontWeight="500"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                        marginBottom={2}
                        padding={2}
                       
                       >
                            Upon your acceptance and receipt of deposit, we procure the materials as needed and provide you with a firm delivery and/or installation date based on materials availability and production time.
                        </Paragraph>
                        <Paragraph 
                      textAlign="center"
                        fontFamily="sfprodisplayregular"
                        fontWeight="500"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                        marginBottom={2}
                        padding={2}
                       
                       >
                            Construction and finish-work is completed in our shop, minimizing time and work in your home or business.
                        </Paragraph>
                        <Paragraph 
                     textAlign="center"
                        fontFamily="sfprodisplayregular"
                        fontWeight="500"
                        textColor={'blue.800'}
                        fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                        letterSpacing={'wider'}
                        marginBottom={2}
                        padding={2}
                       
                       >
                            We deliver and/or install your project as promised.
                        </Paragraph>
                        </Box>
                       
                       
                     
</Box>
               </div>

            </Box>
           
            <Box>
                <div>
                <Flex 
                        
                    >
                    <Heading
                    fontFamily="sfprodisplayregular"
                        as="h2"
                        fontSize={{ base: '17px', md: '17px', lg: '19px' }}
                        mt={8}
                        p={1}
                        fontWeight={'500'}
                        textAlign="center" 
                        alignItems={'center'}
                        textColor="blue.800"
                        >
                   We work with an extensive range of wood and other materials, including:
                    </Heading>
                    </Flex>     
                </div>
            </Box>
            <Box
             mt={4}>
                <div className='grid w-70% grid-cols-4 gap-2 '>
                    <Flex 
                     className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                    >     
                        <p>
                            Live-edge wood
                        </p>
                    </Flex>
                
                    <Flex 
                         className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         Local, reclaimed wood
                        </p>
                    </Flex>

                    <Flex 
                      className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"                   
                        > 
                        <p>
                            Softwoods 
                        </p>
                    </Flex>
                    <Flex 
                      className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"                 
                        > 
                        <p>
                            Hardwoods
                        </p>
                    </Flex>
                    <Flex 
                          className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         Highest quality plywood
                        </p>
                    </Flex>
                    <Flex 
                         className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         Concrete
                        </p>
                    </Flex>
                    <Flex 
                        className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         Glass (manufactured and handmade)
                        </p>
                    </Flex>
                    <Flex 
                          className='glass'
                        alignItems="center" 
                        fontFamily="sfprodisplayregular"
                       letterSpacing={'wide'}
                       fontWeight={'600'}
                      
                        backgroundColor={'blue.800'}
                        mt={1}
                        p={1}
                        fontSize={'sm'}
                        borderRadius={'2px'}
                        textAlign="center" 
                        textColor="white"
                     > 
                        <p>
                         Steel, aluminum, and brass
                        </p>
                    </Flex>
                </div>
            </Box> 
              
            
           
            
           
        </SlideFade>
    </Container>
    )
}

export default Carpentry
