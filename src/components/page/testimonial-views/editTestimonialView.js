import React, {useState} from "react"; 
import { useTestimonialViewContext } from "./testimonialViewContext";
import { Box, Grid, GridItem,  Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AppearanceTab from "../appearance/appearanceTab";
import SliderSettings from "../sliderSettings/sliderSettings";


const SelectTesmonialDesign = (props) => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};

    
    return( 
        <>
            <Box w="50%" m="20px auto" bg="#fff" padding="10px 20px"  h="550px">
                <Tabs isFitted variant="enclosed">
                    <TabList>
                        <Tab _selected={ {color:'#fff', bg:'#333'} } >Appearance</Tab>
                        <Tab _selected={ {color:'#fff', bg:'#333'} }  >Settings</Tab>
                        <Tab _selected={ {color:'#fff', bg:'#333'} }  >Preview</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <AppearanceTab />
                        </TabPanel>
                        <TabPanel>
                            <SliderSettings />
                        </TabPanel>
                        <TabPanel>
                            preivew
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default SelectTesmonialDesign;