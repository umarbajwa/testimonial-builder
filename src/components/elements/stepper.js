import React, {useState} from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const StepperEl = (props) => {
    const {currentStep, steps} = {...props};

    const renderSteps = () => {

        const activeStepBg = "#333333";
        const inActiveStepBg = "#e3e3e3";

        return steps.map( (step, index) => {
            
            if((index+1) <= currentStep){
                return <GridItem w="100%" h="2" bg={activeStepBg}  borderRadius="4px" key={`progressItem-${index}`} />
            }else{
                return <GridItem w="100%" h="2" bg={inActiveStepBg}  borderRadius="4px" key={`progressItem-${index}`}  />
            }
        });
    }



    return(<>
        <Box m="20px auto">
            <Text align="center" >Step {currentStep} of {steps.length} </Text>
            <Grid templateColumns={`repeat(${steps.length}, 2fr)`} gap="1" w="35%" m="10px auto" >
                { renderSteps() }
            </Grid>
        </Box>
    </>);

}

export default StepperEl;