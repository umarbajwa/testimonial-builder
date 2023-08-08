import React, {useState} from "react";
import { HexAlphaColorPicker } from "react-colorful";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Box,
  } from '@chakra-ui/react'

const ColorPicker = (props) => {
    const [color, setColor] = useState(props.color);

    const handleColorChange = (color) => {
        setColor(color);
        props.updateColor(color, props.optionName);
    }

    return(<>
        <Popover>
            <PopoverTrigger>
                <Box bg={color} w="35px" h="35px" border="1px solid #e3e3e3" shadow="4px 4px 10px #33333345" borderRadius="6px" cursor="pointer" ></Box>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody> <HexAlphaColorPicker color={color} onChange={handleColorChange} /> </PopoverBody>
            </PopoverContent>
        </Popover>
    </>);

}

export default ColorPicker;