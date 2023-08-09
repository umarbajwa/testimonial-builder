import React from "react";
import { useTestimonialViewContext } from "../testimonial-views/testimonialViewContext";
import { 
    Box,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import TypographySettingsPanel from "./settings-panels/typograpghySettingsPanel";

const TypographySettings = () => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};
    
    const saveData = () => {
        dispatch( {type: "UPDATE", data: [testimonialViewData] });
    }

    return (<>
 
        <Box w="100%" m="20px auto" bg="#fff" padding="10px 20px"  h="550px">
            <Tabs isFitted variant="enclosed" w="100%">
                <TabList>
                    <Tab _selected={ {color:'#fff', bg:'#333'} } >Testimonial</Tab>
                    <Tab _selected={ {color:'#fff', bg:'#333'} }  >Author</Tab>
                    <Tab _selected={ {color:'#fff', bg:'#333'} }  >Author Role</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TypographySettingsPanel settingsPath="testimonial" />
                    </TabPanel>
                    <TabPanel>
                        <TypographySettingsPanel settingsPath="author" />
                    </TabPanel>
                    <TabPanel>
                        <TypographySettingsPanel settingsPath="authorRole" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    </>);

}

export default TypographySettings;