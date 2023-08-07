import React from "react";
import { useTestimonialViewContext } from "../testimonial-views/testimonialViewContext";
import { 
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import ColorPicker from "../../elements/fields/colorPicker";

const TypographySettings = () => {

    const wrapperBoxStyles = {borderBottom:'1px solid #e3e3e3', padding:'4px 10px 15px 10px', margin:'5px'}
    const FormControlStyles = {display:'flex', flexDirection:'row', alignContent:'center',justifyContent:'space-between', alignItems:'center'};

    return (<>

        <Box {...wrapperBoxStyles} >
            <FormControl {...FormControlStyles} >
                <FormLabel>Testimonial Color</FormLabel>
                <ColorPicker color="#333" />
            </FormControl>
        </Box>

        <Box {...wrapperBoxStyles} >
            <FormControl {...FormControlStyles} >
                <FormLabel>Author Name Color</FormLabel>
                <ColorPicker color="#333" />
            </FormControl>
        </Box>

        <Box {...wrapperBoxStyles} >
            <FormControl {...FormControlStyles} >
                <FormLabel>Author Role Color</FormLabel>
                <ColorPicker color="#333" />
            </FormControl>
        </Box>

        <Box {...wrapperBoxStyles} >
            <FormControl {...FormControlStyles} >
                <FormLabel>Rating Color</FormLabel>
                <ColorPicker color="#333" />
            </FormControl>
        </Box>

        <Box {...wrapperBoxStyles} >
            <FormControl {...FormControlStyles} >
                <FormLabel>Background Color</FormLabel>
                <ColorPicker color="#333" />
            </FormControl>
        </Box>

    </>);

}

export default TypographySettings;