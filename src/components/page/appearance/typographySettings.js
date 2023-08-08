import React from "react";
import { useTestimonialViewContext } from "../testimonial-views/testimonialViewContext";
import { 
    Box,
    FormControl,
    FormLabel, FormErrorMessage, FormHelperText,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    InputGroup, Input, Select
} from "@chakra-ui/react";
import ColorPicker from "../../elements/fields/colorPicker";
import NumberSliderInput from "../../elements/fields/numberSliderInput";

const TypographySettings = () => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};
    
    
    const wrapperBoxStyles = {borderBottom:'1px solid #e3e3e3', padding:'4px 10px 15px 10px', margin:'5px'};
    const FormControlStyles = {display:'flex', flexDirection:'row', alignContent:'center',justifyContent:'space-between', alignItems:'center'};

    const singleInputFieldStyles = {width:"35%"};


    const saveData = () => {
        dispatch( {type: "UPDATE", data: [testimonialViewData] });
    }

    
    let testimonialTypo =  testimonialViewData?.options?.typography?.testimonial;
    const updateColor = (color, optionName) => {
        testimonialTypo[optionName] = color;
        saveData();
    }


    const handleValueChange = (value, optionName) => {
        testimonialTypo[optionName] = value;
        saveData();

        console.log(state.data[0].options.typography.testimonial);
    }

    const renderTestimonialTypoSettings = () => {
        return(
            <>
                <Box {...wrapperBoxStyles} >
                    <FormControl {...FormControlStyles} >
                        <FormLabel>Testimonial Color</FormLabel>
                        <ColorPicker color={testimonialTypo?.color} updateColor={updateColor} optionName="color" />
                    </FormControl>
                </Box>

                <Box {...wrapperBoxStyles} >
                    <FormControl {...FormControlStyles} >
                        <FormLabel>Font Family</FormLabel>
                        <Select placeholder='Select option' value={testimonialTypo?.fontFamily} 
                            onChange={ (e) => handleValueChange(e.target.value, 'fontFamaily') }
                            {...singleInputFieldStyles}
                        >
                            <option value='arial'>Arial</option>
                            <option value='sans-serif'>Sans Serif</option>
                            <option value='serif'>Serif</option>
                        </Select>
                    </FormControl>
                </Box>

                <Box {...wrapperBoxStyles} >
                    <FormControl {...FormControlStyles} >
                        <FormLabel>Font Size</FormLabel>
                        <InputGroup w="60%">
                            <NumberSliderInput
                                value={testimonialTypo?.fontSize}
                                unitValue={testimonialTypo?.fontSizeUnit}
                                rangeSlider={false}
                                updateNumberInput={handleValueChange}
                                optionName="fontSize"
                                optionUnitName="fontSizeUnit"
                            />
                        </InputGroup>
                    </FormControl>
                </Box>


            </>
        )
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
                        {renderTestimonialTypoSettings()}
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                        preivew
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    </>);

}

export default TypographySettings;