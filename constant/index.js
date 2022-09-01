import {  SiGmail } from 'react-icons/si';
import {  FaLinkedin, FaGithub } from "react-icons/fa";


const menuLinks = [

    { name: 'Home', route:'/'},
    { name: 'Handyman Services', route: '/handyman' },
    { name: 'Custom Carpentry', route: '/carpentry' },
    
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
        name: 'Handyman Services click',       
        route: '/handyman'
       
    },
    {
        name: 'Custom Carpentry',    
     
        summary: 'Learn More',
        decide: 'Request Quote',
      
    },
    {
        name: 'Home Improvement',      
    
        summary: 'Learn More',
        decide: 'Request Quote',
   
    }
]

const liveServices = [
    {
        name: 'Handyman Services',       
   
        summary_path: '/handyman',
        decide: 'Schedule Service',
       
    },
    {
        name: 'Custom Carpentry',    
     
        summary_path: '/carpentry',
        decide: 'Request Quote',
      
    },
    {
        name: 'Home Improvement',      
   
        summary_path: '/homeimprove',
        decide: 'Request Quote',
   
    }
]

export { menuLinks,  liveProjects, siteConfig, liveServices }