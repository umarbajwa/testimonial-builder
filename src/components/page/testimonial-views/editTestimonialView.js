import React, {useState} from "react"; 
import { useTestimonialViewContext } from "./testimonialViewContext";
import { Box, Grid, GridItem,  Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const SelectTesmonialDesign = (props) => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};

    
    return( 
        <>
            <Box w="70%" m="20px auto" bg="#fff" padding="10px 20px"  h="550px">
                <Tabs isFitted variant="enclosed">
                    <TabList>
                        <Tab _selected={ {color:'#fff', bg:'#333'} } >Appearance</Tab>
                        <Tab _selected={ {color:'#fff', bg:'#333'} }  >Settings</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>One</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Two</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default SelectTesmonialDesign;