import React from "react";
import { useTestimonialViewContext } from "./testimonialViewContext";
import SelectTesmonialView from "./selectTestimonialView";
import SelectTesmonialDesign from "./selectTestimonialDesign";
import EditTestimonialView from "./editTestimonialView";
import StepperEl from "../../elements/stepper";
import { Box, Button } from "@chakra-ui/react";

const AllViews = () => {

    const {state, dispatch} = useTestimonialViewContext();
    let testimonialViewData = {...state?.data[0]};

    testimonialViewData.currentStep = (typeof(testimonialViewData.currentStep) === "undefined") ? 1 : testimonialViewData.currentStep;

    const handleNextClick = (e) => {
        testimonialViewData.currentStep += 1;
        dispatch( {type: "NHUPDATE", data: [testimonialViewData] });
    }

    const handlePrevClick = (e) => {
        testimonialViewData.currentStep -= 1;
        dispatch( {type: "NHUPDATE", data: [testimonialViewData] });
    }

    const renderViewEl = () => {
        
        if(testimonialViewData?.currentStep === 1) return <SelectTesmonialView />;

        if(testimonialViewData?.currentStep === 2) return <SelectTesmonialDesign />;

        if(testimonialViewData?.currentStep === 3) return <EditTestimonialView />;
            
        return <SelectTesmonialView />;
    }
    
    return(<>
        <StepperEl currentStep={testimonialViewData.currentStep} steps={['Step 1', 'Step 2', 'Step 3']} />;
        { renderViewEl() }
        <Box w="100%" m="10px auto" textAlign="center">
            <Button m="0 5px" bg="#333" color="#fff" isDisabled={ (testimonialViewData?.currentStep === 1 ) ? true : false } onClick={ (e) => handlePrevClick(e) } >Previous</Button>
            <Button m="0 5px" bg="#333" color="#fff" isDisabled={ (testimonialViewData?.currentStep === 3) ? true : false } onClick={ (e) => handleNextClick(e) } >Next</Button>
        </Box>
    </>)
}

export default AllViews;