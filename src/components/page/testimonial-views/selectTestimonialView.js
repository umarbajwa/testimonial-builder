import React, {useState} from "react"; 
import { useTestimonialViewContext } from "./testimonialViewContext";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

const SelectTesmonialView = (props) => {

    const {state, dispatch} = useTestimonialViewContext();

    let testimonialViewData = {...state?.data[0]};
    console.log(testimonialViewData);


    const handleViewChange = (e, value) => {
        testimonialViewData.view = value;
        dispatch( {type: "UPDATE", data: [testimonialViewData] });
    }


    return(
        <>
            <Box w="70%" m="20px auto" bg="#fff" padding="10px 20px">
                <Grid templateColumns='repeat(3, 1fr)' gap={6} m="0 auto"  w="100%" >
                    <GridItem 
                        w='100%' 
                        h='60'
                        textAlign="center"
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="6px"
                        onClick={(e) => handleViewChange(e, 'slider') }
                        bg={ (testimonialViewData.view === "slider") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.view === "slider") ? "#fff" : "#333" }
                    >Slider</GridItem>

                    <GridItem
                        w='100%' 
                        h='60'
                        textAlign="center"
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="6px"
                        onClick={(e) => handleViewChange(e, 'list') }
                        bg={ (testimonialViewData.view === "list") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.view === "list") ? "#fff" : "#333" }
                    >List</GridItem>
                    <GridItem 
                        w='100%' 
                        h='60'
                        textAlign="center"
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="6px"
                        onClick={(e) => handleViewChange(e, 'gallery') }
                        bg={ (testimonialViewData.view === "gallery") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.view === "gallery") ? "#fff" : "#333" }
                    >Gallery</GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default SelectTesmonialView;