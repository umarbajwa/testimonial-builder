import React, {useState, useContext, useRef} from "react";
import { TestimonialAppContext } from "./wrapper";
import { Box, Button, Container, Flex, IconButton, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon, DragHandleIcon, EditIcon, PlusSquareIcon } from "@chakra-ui/icons";
import TestimonialEditDrawer from "../elements/testimonialEditDrawer";
import { useAppContext } from "../../AppContext";


const AllTestimonials = (props) => {

    const {state, dispatch} = useAppContext();

    let testimonialData = [...state?.data];

    console.log(state);

    const {isOpen, onOpen, onClose, getDisclosureProps} = useDisclosure();
    const [editIndex, setEditIndex] = useState(null);
    const btnRef = React.useRef(); 

    const handleDelete = (e, index) => {
        let newTestimonialData = [...testimonialData];
        newTestimonialData.splice(index, 1);
        dispatch( {type: "UPDATE", data: [...newTestimonialData] } );
    }

    const [isDragging, setIsDragging] = useState(false);
    const [draggedIndex, setDraggedIndex] = useState(null);

    const handleDragStart = (event, index) => {
        setIsDragging(true);
        setDraggedIndex(index);
    };

    const handleDragEnd = (event) => {
        setIsDragging(false);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, targetIndex) => {
        
        if(targetIndex === draggedIndex) return;

        let newTestimonialData = [...testimonialData];
        const temp = testimonialData[draggedIndex];
        newTestimonialData.splice(draggedIndex, 1);
        newTestimonialData.splice(targetIndex, 0, temp);
        dispatch( {type: "UPDATE", data: [...newTestimonialData] } );
        
    };


    const handleBtnClick = (e, index) => {
        setEditIndex(index);
        onOpen();
    }

    const handleAddNewTestimonial = (e) => {
        e.preventDefault();

        let newTestimonialData = [...testimonialData];
        console.log(newTestimonialData[newTestimonialData.length - 1].id);
        let newTestimonialIndex = parseInt(newTestimonialData[newTestimonialData.length - 1]?.id) + 1;

        const newTestimonial = {    
            "title": "Testimonial Title "+newTestimonialIndex,
            "firstName": "John",
            "lastName": "Doe",
            "testimonial":"Lorem Ipsum Dolor Ismet",
            "email": "example@example.com",
            "Company":"Company Name",
            "id":newTestimonialIndex
        }

        newTestimonialData.push(newTestimonial);
        dispatch( {type: "UPDATE", data: [...newTestimonialData] } );
    }


    const renderTestimonial = () => {

        return testimonialData.map( (testimonial, index) => (
            <Container 
                m={3} 
                bg="#F5F5F5" 
                boxShadow="lg" 
                key={`${testimonial}-${index}`} 
                draggable={true}
                onDragStart={ (e) => handleDragStart(e, index) }
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index) }
            >
                <Flex alignItems='center' h="60px">
                    <Box w="10%"> <DragHandleIcon /> </Box>
                    <Box w="70%">
                        <Text size="lg">{testimonialData[index].title}</Text>
                    </Box>
                    <Button w="10%" onClick={(e) => handleDelete(e,  index) }> <DeleteIcon /> </Button>
                    <Button w="10%" testimonial={index} ref={btnRef}  onClick={ (e) => handleBtnClick(e, index)}  > <EditIcon /> </Button>
                </Flex>
                
            </Container>
        ) );
    }


    const handleUndo = () => {
        if (state.currentIndex > 0) {
          dispatch({ type: 'UNDO' });
        }
    };
    
    const handleRedo = () => {
        if (state.currentIndex < state.history.length - 1) {
          dispatch({ type: 'REDO' });
        }
    };


    const renderUndoRedoBtns = () => {

        return(
            <Box>
                <IconButton aria-label="Undo" size="md" icon={<ArrowBackIcon /> } m="5px" onClick={handleUndo} />
                <IconButton aria-label="Redo" size="md" icon={<ArrowForwardIcon /> }  m="5px" onClick={handleRedo} />
            </Box>
        )
    }
    
    
    return (
        <>
            <VStack m="20px 10px">
                { renderUndoRedoBtns() }
                { renderTestimonial() }
                <IconButton aria-label="Add New Testimonial" size="md" icon={ <PlusSquareIcon /> } onClick={ (e) => handleAddNewTestimonial(e) } />
            </VStack>
            <TestimonialEditDrawer 
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                index={editIndex}
            />
        </>
        
    );  
}

export default AllTestimonials;