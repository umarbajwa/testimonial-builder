import React, {useState} from "react"; 
import { useTestimonialViewContext } from "./testimonialViewContext";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const SelectTesmonialDesign = (props) => {

    const {state, dispatch} = useTestimonialViewContext();

    let testimonialViewData = {...state?.data[0]};

    const handleViewChange = (e, value) => {
        testimonialViewData.design = value;
        dispatch( {type: "NHUPDATE", data: [testimonialViewData] });
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
                        fontSize="24px"
                        onClick={(e) => handleViewChange(e, '1') }
                        bg={ (testimonialViewData.design === "1") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.design === "1") ? "#fff" : "#333" }
                    >Design 1</GridItem>

                    <GridItem
                        w='100%' 
                        h='60'
                        textAlign="center"
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="6px"
                        fontSize="24px"
                        onClick={(e) => handleViewChange(e, '2') }
                        bg={ (testimonialViewData.design === "2") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.design === "2") ? "#fff" : "#333" }
                    >Design 2</GridItem>
                    <GridItem 
                        w='100%' 
                        h='60'
                        textAlign="center"
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="6px"
                        fontSize="24px"
                        onClick={(e) => handleViewChange(e, '3') }
                        bg={ (testimonialViewData.design === "3") ? "#333" : "#e3e3e3" }
                        color={ (testimonialViewData.design === "3") ? "#fff" : "#333" }
                    >Design 3</GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default SelectTesmonialDesign;