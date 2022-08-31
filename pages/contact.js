/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
    Container,
    SlideFade,
    Box,
    FormControl,
    FormLabel,
    CircularProgress,
    Flex,
    Button,
    Input,
    Heading,
    Textarea,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Head from 'next/head';

import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const Contact = () => {

    

    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const clearInput = () => {
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        emailjs.send("service_asdf", "asdf_email_template", {
            from_name: name,
            from_email: email,
            message: message,
        }).then((result) => {
            clearInput();

            toast({
                title: 'Email sent.',
                description: 'You had successfully sent the email. We will respond within the next 24 hours!',
                status: 'success',
                duration: 9000,
                isClosable: true
            })

        }, (error) => {
            clearInput();

            toast({
                title: 'Email not sent.',
                description: error.text,
                status: 'error',
                duration: 9000,
                isClosable: true
            })
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Tallowhill Home Services | Contact</title>
               
            </Head>

            <main>
                <Container maxW="container.sm" mt={['5', '10']} mb={['5', '10']}>
                    <SlideFade in offsetX={80}>
                        <Flex width="full" align="center" justifyContent="center">
                            <Box
                                p={8}
                                maxWidth="container.md"
                                borderWidth={1}
                                borderRadius={8}
                                backgroundColor={'rgba(255, 255, 255, 0.1)'}
                                backdropFilter={'10px'}
                                boxShadow={' 0 5px 15px rgba(0,0,0,0.08)'}
                               
                              
                            >
                                <Heading fontFamily='sfprodisplayregular' textColor={'blue.800'} fontWeight={'900'} size={'lg'}>Have any questions or would like to discuss a project that you are undertaking? </Heading>
                               
                                <Box my={4} textAlign="left">
                                    <form onSubmit={handleSubmit}>

                                        <FormControl isRequired>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'name'}>Full Name</FormLabel>
                                            <Input
                                                id='name'
                                                type={'text'}
                                                value={name}
                                                placeholder="Your Name"
                                                borderRadius={'6px'}
                                                size="sm"
                                                width={'95%'}
                                                onChange={event => setName(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'email'}>Email</FormLabel>
                                            <Input
                                                id='email'
                                                type={'email'}
                                                value={email}
                                                placeholder='Email'
                                                size="sm"
                                                borderRadius={'6px'}
                                                width={'95%'}
                                                onChange={event => setEmail(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel textColor={'gray.500'}  fontFamily='sfprodisplayregular' key={'message'}>Message</FormLabel>
                                            <Textarea
                                                id='message'
                                                type={'text'}
                                                value={message}
                                                placeholder="Type your message..."
                                                borderRadius={'6px'}
                                                size="sm"
                                                width={'95%'}
                                                onChange={event => setMessage(event.currentTarget.value)}
                                                backgroundColor={'gray.100'}
                                            />
                                        </FormControl>
                                        <Button
                                            variant="solid"
                                            type="submit"
                                            width="full"
                                            backgroundColor={'blue.800'}
                                            mt={8}
                                            isLoading={isLoading}
                                            loadingText='Submitting'
                                            textColor={'white'}
                                            className='gla'
  
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </Box>

                            </Box>
                        </Flex>
                    </SlideFade>
                </Container>
            </main>
        </div>
    )
}

export default Contact;