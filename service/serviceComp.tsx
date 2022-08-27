import Image from 'next/image'
import {
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid
} from "@chakra-ui/react";

import Parallax from '../components/Parallax/index'
import { services } from '../service/serviceItems'
import { IoLogoGithub } from 'react-icons/io'
import type { NextPage } from 'next'
import NextLink from 'next/link'



        






export default function ServiceComp() {
    return(
<SimpleGrid columns={[1, 2, 3, 3]} mt={5}>
    {services.map((service, key) => (
        <Parallax key={key}>
             <Box className='border-2 shadowguy '
            p={4} display={{ md: "flex",  }} borderWidth={1} margin={2} rounded={'10px'}
            _hover={{
                borderColor: "orange.500",
            }}
        > 
                    <Flex
                alignItems="center" justifyContent="space-around" direction={{ base: 'column', md: 'row' }}
            >

                <Flex flexDirection="column" ml={[0, 5, 5]} mt={[2, 2, 0, 0]}>

         <p className='mb-2 text-xl font-semibold font-sfprodisplaybold wider' color={'blue.800'} >
                    {service.name} ⤵
                    </p>
                    <div className='w-2/3 mt-2 text-center rounded bg-orange-500/90 ml-9' >
                    <NextLink href={service.summary_path}  passHref scroll={false}>
                    <button
                 
                  className='text-lg text-white font-sfprodisplayregular'
     
                  aria-label='Github'
                >
                    Learn More
                    </button>
                    </NextLink>
                        </div>
                        <div className='w-2/3 mt-2 text-center rounded bg-orange-500/90 ml-9' >
                            
                            <p className='text-lg text-white font-sfprodisplayregular' >  {service.decide}</p>
                        </div>
                
     
       </Flex>
       </Flex>
         </Box>
        </Parallax>
        
    ))}
</SimpleGrid>
    )
    }