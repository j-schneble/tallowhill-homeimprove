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
                Artists | Designers | Craftspeople
                </Paragraph>
                <Box mt={5}>
                    <LightMode>

                    </LightMode>
                </Box>

            </Box>

    )
}

export default ProfileSection;
