import React from "react";
import { useTestimonialViewContext } from "../testimonialViewContext";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import TypographySettings from "./typographySettings";
import ContainerSettings from "./settings-panels/containerSettings";


const AppearanceTab = () => {

    return(
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton bg="#e3e3e3" color="#333" _expanded={ {bg:'#333', color:'#fff'} } >
                        <Box as="span" flex='1' textAlign='left'>
                        Typography
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} minH="300px">
                        <TypographySettings />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton bg="#e3e3e3" color="#333" _expanded={ {bg:'#333', color:'#fff'} } > 
                        <Box as="span" flex='1' textAlign='left'>
                        Image
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton bg="#e3e3e3" color="#333" _expanded={ {bg:'#333', color:'#fff'} } > 
                        <Box as="span" flex='1' textAlign='left'>
                        Container
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} minH="300px" >
                        <ContainerSettings />
                    </AccordionPanel>
                </AccordionItem>
            
            </Accordion>
        </>
    )

}

export default AppearanceTab;