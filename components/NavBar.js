/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
    Flex,
    IconButton,
    HStack,
    Box,
    Stack,
    Link as CharkaLink,
    useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { menuLinks } from '../constant';


const NavBar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    let router = useRouter();
    let { asPath } = router;

    const navItem = (
        <>
            {menuLinks.map((link) => (
                <NextLink
                    href={link.route} key={link.name} passHref
                >
                    <CharkaLink
                        href={link.route} px={2} py={1} rounded={"md"}
                        _hover={{
                            textDecoration: "none",
                            bg: useColorModeValue("gray.200", "gray.900")
                        }}
                        color={link.route === asPath && useColorModeValue("blue.500", "blue.300")}
                        onClick={isOpen ? onClose : onOpen}
                    >
                        {link.name}
                    </CharkaLink>
                </NextLink>
            ))}
        </>
    )

    return (
        <>
            <Box bg={useColorModeValue(  'white', 'gray.700')} px={4} boxShadow={'lg'}>
                <Flex
                    h={16} alignItems={"center"} justifyContent={"space-between"} w={["95%", "95%", "95%"]} maxW={'container.lg'} mx="auto"
                >
                    <IconButton
                        size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={["inherit", "inherit", "none"]}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    
                    <HStack spacing={8} alignItems={'center'} mr="6">
                      
                        <HStack as="nav" spacing="8" fontFamily="sfprodisplaylight"  letterSpacing="wider" fontSize={{ base: '10px', md: '12px', lg: '15px' }} display={{ base: 'none', md: 'flex' }}>
                            {navItem}
                        </HStack>
                    </HStack>
                   
                </Flex>


                {isOpen && (
                    <Box
                        pb={4} w={["100%", "100%"]} maxW={'container.lg'} display={["inherit", "inherit", "none"]}
                    >
                        <Stack as={"nav"} spacing={4}>
                            {navItem}
                        </Stack>
                    </Box>
                )}

            </Box>
        </>
    )
}

export default NavBar