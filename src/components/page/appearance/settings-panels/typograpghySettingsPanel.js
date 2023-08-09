import React from "react";
import { useTestimonialViewContext } from "../../testimonial-views/testimonialViewContext";
import {
    Box,
    FormControl,
    FormLabel, 
    InputGroup, Input, Select
} from "@chakra-ui/react";
import ColorPicker from "../../../elements/fields/colorPicker";
import NumberSliderInput from "../../../elements/fields/numberSliderInput";

const TypographySettingsPanel = (props) => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};
    let thisPanelDataObject =  testimonialViewData.options.typography[props.settingsPath];
    
    const wrapperBoxStyles = {borderBottom:'1px solid #e3e3e3', padding:'4px 10px 15px 10px', margin:'5px'};
    const FormControlStyles = {display:'flex', flexDirection:'row', alignContent:'center',justifyContent:'space-between', alignItems:'center'};

    const singleInputFieldStyles = {width:"35%"};

    const saveData = () => {
        dispatch( {type: "UPDATE", data: [testimonialViewData] });
    }

    const updateColor = (color, optionName) => {
        thisPanelDataObject[optionName] = color;
        saveData();
    }

    const handleValueChange = (value, optionName) => {
        thisPanelDataObject[optionName] = value;
        saveData();
    }


    return(
        <>
            <Box {...wrapperBoxStyles} >
                <FormControl {...FormControlStyles} >
                    <FormLabel>Font Color</FormLabel>
                    <ColorPicker color={thisPanelDataObject?.color} updateColor={updateColor} optionName="color" />
                </FormControl>
            </Box>

            <Box {...wrapperBoxStyles} >
                <FormControl {...FormControlStyles} >
                    <FormLabel>Font Family</FormLabel>
                    <Select placeholder='Select option' value={thisPanelDataObject?.fontFamily} 
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
                            value={thisPanelDataObject?.fontSize}
                            unitValue={thisPanelDataObject?.fontSizeUnit}
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

export default TypographySettingsPanel;