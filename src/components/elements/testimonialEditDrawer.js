import React, {useContext} from "react";
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useAppContext } from "../../AppContext";


const TestimonialEditDrawer = (props) => {
    

    const {state, dispatch} = useAppContext();
    let testimonialData = [...state?.data];

    let thisTestimonialData = {...testimonialData[props.index]};
        
    const saveData = () => {
        let updatedTestimonialData = [...testimonialData];
        updatedTestimonialData[props.index] = thisTestimonialData;
        dispatch(  {type: "UPDATE", data: [...updatedTestimonialData] } );
    }


    const handleChange = (e) => {
        thisTestimonialData[e.target.name] = e.target.value;
        saveData();
    }

    return(
        <>
            <Drawer
                isOpen={props.isOpen}
                placement='right'
                onClose={props.onClose}
                finalFocusRef={props.btnRef}
                size="md"
                index={props.index}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Edit Testimonial</DrawerHeader>
                    <DrawerBody>
                        
                        <FormControl>
                            <FormLabel>Testimonial Title</FormLabel>
                            <Input type="text" placeholder='Enter testimonial title' value={thisTestimonialData?.title} name="title" onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <br /> <Divider  m="0 auto" /> <br />
                        <FormControl>
                            <FormLabel>Testimonial Text</FormLabel>
                            <Textarea value={thisTestimonialData?.testimonial} name="testimonial" onChange={ (e) => handleChange(e) }></Textarea>
                        </FormControl>
                        <br /> <Divider  m="0 auto" /> <br />
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" value={thisTestimonialData?.firstName} placeholder="First Name" name="firstName" onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <br /> <Divider  m="0 auto" /> <br />
                        <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" value={thisTestimonialData?.lastName} placeholder="Last Name" name="lastName" onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <br /> <Divider  m="0 auto" /> <br />
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" value={thisTestimonialData?.email} placeholder="Email" name="email" onChange={ (e) => handleChange(e) } />
                        </FormControl>


                    </DrawerBody>
                    
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default TestimonialEditDrawer;