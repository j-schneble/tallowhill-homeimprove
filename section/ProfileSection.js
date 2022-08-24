import React from 'react';
import { Box, Heading, Link, Flex, LightMode, ButtonGroup, Button, Img } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import {BiPhoneCall} from 'react-icons/bi';


const ProfileSection = () => {
    return (

            <Box>
                <Flex alignItems="center" justifyContent="space-between">      
                    <Flex alignItems={"flex-end"}>
                        <Img
                            name="construction pic"
                            src="/headdd.png"
                            size='lg'
                        />
                    </Flex>
                  
                </Flex>
                <Heading
                        fontFamily="sfprodisplayregular"
                        as="h2"
                        color={'blue.800'}
                        fontSize={{ base: '28px', md: '32px', lg: '38px' }}
                        mt={4}
                    >
                        Tallowhill Home Services
                    </Heading>
                <Paragraph fontFamily="sfprodisplaylight"  fontSize={{ base: '18px', md: '18px', lg: '22px' }} ml={1} lineHeight={1.6}>
                Handyman | Home Improvement
                </Paragraph>
                <Box mt={5}>
                    <LightMode>
                        <ButtonGroup>
                    
                            <Link href={'/contact'} style={{ textDecoration: 'none' }}>
                                <Button
                                    bgColor="blue.900"
                                    fontFamily="sfprodisplayregular"
                                    letterSpacing="wider"
                                    size='sm'
                                    margin={'5px'}
                                    leftIcon={<BiPhoneCall color='white'/>}
                                    fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                                    textColor="white"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </ButtonGroup>

                    </LightMode>
                </Box>

            </Box>

    )
}

export default ProfileSection;
