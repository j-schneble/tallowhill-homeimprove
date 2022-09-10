import Image from 'next/image'
import {
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    Container,
    SlideFade,

    FormControl,
    FormLabel,
    CircularProgress,

    Button,
    Input,

    Textarea,

    useColorModeValue,
    useToast
    
} from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import React from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';

import Parallax from '../components/Parallax/index'
import { services } from '../service/serviceItems'
import { IoLogoGithub } from 'react-icons/io'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import Servicetool from '../components/servicetools/Servicetools'
import { ToolBox } from '../components/tools/toolBox'


const mostPopular = () => {
    return (
   
            <Box
           
         
            >
            <Flex alignItems="center" justifyContent="space-between">      
                    
                    <Heading
                    fontFamily="sfprodisplayregular"
                        
                    as="h1"
                        color='blue.800'
                        fontSize={{ base: '20px', md: '20px', lg: '22px' }}
                       
                        mb={3}
                        letterSpacing="wide">
                                Most Popular Projects
      
                    </Heading>
                    
                    </Flex>
                    <Box
                    backgroundColor={'blue.800'}
                    backdropBlur={'20px'}
                    borderWidth={'2px'}
                    borderColor={'gray.200'}
                    borderRadius={'5px'}>

                  
                     <div className='items-center text-center'>
            <div className='flex gap-1 '>
                    {/* Lazy */}
                        {ToolBox.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1
                        }
                        if (a.name > b.name) {
                            return 1
                        }
                        return 0
                        }).map(servicetools => (
                        <Servicetool
                        
                            icon={servicetools.icon}
                            key={servicetools.name}
                            name={servicetools.name}
                            url={servicetools.url}
                        />
                        ))}
                    </div>
                    </div>
                    </Box>
            </Box>
      
    )
}

export default mostPopular