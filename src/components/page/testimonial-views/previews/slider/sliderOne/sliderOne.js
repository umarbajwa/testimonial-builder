import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import {data} from "../../../../../../data/data";

import { useTestimonialViewContext } from "../../../testimonialViewContext";

import "./sliderOneStyles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SliderOne = (props) => {
    const testimonialsData = [...data];

    const {state, dispatch} = useTestimonialViewContext();
    const testimonialViewData = {...state?.data[0]};

    const containerOps = testimonialViewData.options.container;
    const typographyOps = testimonialViewData.options.typography;

    let testimonialProps = {...typographyOps.testimonial};
    testimonialProps.fontSize = testimonialProps.fontSize+testimonialProps.fontSizeUnit;

    let authorProps = {...typographyOps.author};
    authorProps.fontSize = authorProps.fontSize+authorProps.fontSizeUnit;

    let authorRoleProps = {...typographyOps.authorRole};
    authorRoleProps.fontSize = authorRoleProps.fontSize+authorRoleProps.fontSizeUnit;
    


    const renderSlides = () => {
        return testimonialsData.map( (testimonial, index) => (<>
            <SwiperSlide style={{background:containerOps.background, borderRadius:'10px',}} key={`singleTestimonial-${testimonial.id}`}>
                <Box p={"20px"} minH={"100px"} textAlign={"center"}>

                    <Image 
                        borderRadius="full"
                        boxSize={"150px"}
                        src={testimonial.image}
                        m="0 auto"
                    />
                    <Text {...authorProps} >
                        {testimonial.firstName} {testimonial.lastName}  
                    </Text>
                    <Text {...authorRoleProps} >
                        {testimonial.company}
                    </Text>
                    <Text {...testimonialProps} >
                        {testimonial.testimonial}
                    </Text>
                </Box>
            </SwiperSlide>
        </>) );
    }

    return(<>
        <Swiper 
            pagination={ {clickable:true} }
            navigation
            modules={[Pagination, Navigation]}
            className="sliderOneTheme"
            style={{minHeight:'200px', margin:"35px auto"}}
            slidesPerView={2}
            spaceBetween={30}
        >
            {renderSlides()}
        </Swiper>
    </>);

}

export default SliderOne;