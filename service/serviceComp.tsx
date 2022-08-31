import Image from 'next/image'
import {
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    
} from "@chakra-ui/react";

import Parallax from '../components/Parallax/index'
import { services } from '../service/serviceItems'
import { IoLogoGithub } from 'react-icons/io'
import type { NextPage } from 'next'
import NextLink from 'next/link'



        






export default function ServiceComp() {
    return(
<SimpleGrid columns={[1, 2, 2,]} mt={5}>
    {services.map((service, key) => (
        <Parallax key={key}>
             <Box className='border-2 glass2'
             width="50%"
             backgroundColor={'blue.800'}
            p={4} display={{ md: "flex",  }} borderWidth={1} margin={2} marginLeft={20} rounded={'3px'}
            _hover={{
                borderColor: "orange.500",
            }}
        > 
                    <Flex
                alignItems="center" justifyContent="space-around" direction={{ base: 'column', md: 'row' }}
            >

                <Flex flexDirection="column" ml={[ 0, 0, 5, 5]} mt={[2, 2, 0, 0 ]} >

         <Heading 
         marginBottom={2}
         fontSize='xl'
         fontWeight='semibold'
         fontFamily='sfprodisplaybold'
         color={'white'}
  
                 >
                    {service.name} 
                    </Heading>
                    <Box 
                    marginTop="2px"
                   
                    textAlign={'center'}
                    borderRadius="5px"
                    backgroundColor={'gray.50'}
                    borderColor={'orange.500'}
                    borderWidth="2px"
                    marginBottom="5px"
                    fontSize={'md'}
                    className='shadd'
                    
              
                    >
                      

                        
                    <NextLink
                    
                     href={service.summary_path}  passHref scroll={false}>
                    <button 
     
                  aria-label='Github'
                >
                    <Heading  fontSize={'md'}
                    
                    textColor={'gray.700'}
                    letterSpacing={'wide'}
                    fontFamily="sfprodisplayregular" >Learn More →</Heading>
                    </button>
                    </NextLink>

                        </Box>
                        <Box 
                    marginTop="2px"
                    width={'1/2'}
                    textAlign={'center'}
                    borderRadius="5px"
                    backgroundColor={'gray.50'}
                    borderColor={'orange.500'}
                    borderWidth="2px"
                    className='shadd'
                    >
                                        <button
                 
                 
    
                 aria-label='Github'
               >
                  <Heading fontSize={'md'}
                    textColor={'gray.700'}
                    letterSpacing={'wide'}
                    fontFamily="sfprodisplayregular" >Request Quote</Heading>
                    </button>
                   </Box>

                        
                
     
       </Flex>
       </Flex>
         </Box>
        </Parallax>
        
    ))}
</SimpleGrid>
    )
    }