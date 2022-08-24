import React from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
} from "@chakra-ui/react";

{ /** Switch project summary to link for a learn more page and add a pop up window for requesting quote **/ }

export const LiveProjectCard = ({ project }) => (

        <Box className='border-2 shadowguy '
            p={1} display={{ md: "flex",  }} borderWidth={1} margin={2} rounded={'10px'}
            _hover={{
                borderColor: "orange.500",
            }}
        > 

            <Flex
                alignItems="center" justifyContent="space-around" direction={{ base: 'column', md: 'row' }}
            >

                <Flex flexDirection="column" ml={[0, 5, 5]} mt={[2, 2, 0, 0]}>

                    <Heading as="h2" fontSize="xl" fontWeight="600" mb="2" fontFamily="sfprodisplaybold" letterSpacing="wider" color={"blue.800"} >
                    {project.name} ⤵
                    </Heading>

                        <div className='w-2/3 mt-2 text-center rounded bg-orange-500/90 ml-9' >
                            <Text  fontFamily="sfprodisplayregular" fontSize="lg" color={"white"} >  {project.decide}</Text>
                        </div>

                        <div className='w-2/3 mt-2 text-center rounded bg-orange-500/90 ml-9' >
                            <Text  fontFamily="sfprodisplayregular"  fontSize="lg" color={"white"} > {project.summary}</Text>
                        </div>

                </Flex>
            </Flex>       
        </Box>
 
)
