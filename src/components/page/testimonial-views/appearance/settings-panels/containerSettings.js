import React from "react";
import { useTestimonialViewContext } from "../../testimonialViewContext";
import {
    Box,
    FormControl,
    FormLabel, 
    InputGroup, Input, Select
} from "@chakra-ui/react";
import ColorPicker from "../../../../elements/fields/colorPicker";
import NumberSliderInput from "../../../../elements/fields/numberSliderInput";


const ContainerSettings = (props) => {
    
    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};
    let thisPanelDataObject =  testimonialViewData.options.container;
    
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
                    <FormLabel>Background Color</FormLabel>
                    <ColorPicker color={thisPanelDataObject?.background} updateColor={updateColor} optionName="background" />
                </FormControl>
            </Box>

        </>
    )

}

export default ContainerSettings;