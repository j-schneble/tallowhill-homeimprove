import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';


const ProfileSection = () => {
    return (

            <Box>
                <Flex alignItems="center" justifyContent="space-between">      
                    <div className='head-text'>
                        <div className='head-image'>

                     
                        <Img
                            name="construction pic"
                            src="/header.png"
                            size=''
                            className='opacity-50 backdrop-blur-md'
                        />
                       
                        </div>
                        <div className='head-text'>
                        <Heading
                className='bg-white text-on-image'
                        fontFamily="sfprodisplayregular"
                        as="h2"
                        color={'blue.800'}
                        fontSize={{ base: '28px', md: '30px', lg: '30px' }}
                        mt={4}
                        letterSpacing="wide"
                        backdropBlur={'250%'}
                        backgroundColor={'whiteAlpha.800'}
                        padding={8}
                        marginBottom={'40'}
                        
                      
                    
                   
                        
                    >
                        Tallowhill Home Services
                    </Heading>
                    <Paragraph
                 className='bg-white text-on-image'
                  fontFamily="sfprodisplayregular"  fontSize={{ base: '18px', md: '18px', lg: '20px' }} ml={1} lineHeight={1.6}
                  backdropBlur={'50px'}
                       paddingLeft={10}
                       letterSpacing="wide"
                       paddingTop={2}
                       marginBottom={'40'}
                       color={'blue.800'}
                       >
                Artists | Designers | Craftspeople
                </Paragraph>

              
                    
                        </div>
                    </div>
                  
                </Flex>
   
                <Box mt={5}>
                    <LightMode>

                    </LightMode>
                </Box>

            </Box>

    )
}

export default ProfileSection;
