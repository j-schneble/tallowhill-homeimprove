import React from 'react';
import { Link, Button } from '@chakra-ui/react';

const SocialButton = ({ social }) => {
    return (
        <Link  isExternal style={{ textDecoration: 'none' }}>
            <Button
                colorScheme="blue"
                size='sm'
                margin={'5px'}          
            >
                {social.name}
            </Button>
        </Link>
    )
}

export default SocialButton;