import {  SiGmail } from 'react-icons/si';
import {  FaLinkedin, FaGithub } from "react-icons/fa";


const menuLinks = [
  
    { name: 'Handyman Services', route: '/HandyMan' },
    { name: 'Custom Carpentry', route: '/CustomCarpen' },
    { name: "Home Improvement", route: "/HomeImprove" },
    { name: "Contact", route:"/contact"}
]

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Tallowhill. All Rights Reserved.`,
    author: {
        name: "Tallowhill",
        accounts: [
            {
                url: "https://github.com/j-schneble",
                icon: <FaGithub />,
                name: "Github",
                type: "gray"
            },
            {
                url: "https://www.linkedin.com",
                icon: <FaLinkedin />,
                name: "Linkedin",
                type: "gray"
            },
      
            {
                url: "mailto:jack@jackschneble.com",
                icon: <SiGmail />,
                name: "Gmail",
                type: "gray"
            }
        ]
    }
}

const liveProjects = [
    {
        name: 'Handyman Services',       
        alt: 'custom',
        summary: 'Learn More',
        decide: 'Schedule Service',
       
    },
    {
        name: 'Custom Carpentry',    
        alt: 'custom',
        summary: 'Learn More',
        decide: 'Request Quote',
      
    },
    {
        name: 'Home Improvement',      
        alt: 'custom',
        summary: 'Learn More',
        decide: 'Request Quote',
   
    }
]

export { menuLinks,  liveProjects, siteConfig }