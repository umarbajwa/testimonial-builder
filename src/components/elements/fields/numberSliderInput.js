import React, {useState} from "react"
import { Flex, NumberInput, NumberInputField, NumberInputStepper,NumberIncrementStepper, NumberDecrementStepper, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select } from "@chakra-ui/react"


const NumberSliderInput = (props) => {
  
    const [value, setValue] = React.useState(props.value);

    const handleChange = (value) => {
        setValue(value);
        props.updateNumberInput(value, props.optionName);
    }

    const handleChangeUnit = (value) => {
        props.updateNumberInput(value, props.optionUnitName);
    }
    

    const RangeSliderEl = () => {
        return(
        <>
            <Slider
            flex='1'
            focusThumbOnChange={false}
            value={value}
            onChange={(e) => handleChange(e)}
            mr='2rem'
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='22px' />
            </Slider>
        </>
        );
    }
        

    return (
      <Flex w="100%" justifyContent="flex-end" >
        
        {props.rangeSlider === true ? RangeSliderEl() : '' }
        <NumberInput maxW='80px' value={value} onChange={(e) => handleChange(e)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select w="80px" ml="0.5rem" onChange={ (e) => handleChangeUnit(e.target.value)} value={props.unitValue}>
            <option>px</option>
            <option>em</option>
        </Select>
      </Flex>
    )
}

export default NumberSliderInput;