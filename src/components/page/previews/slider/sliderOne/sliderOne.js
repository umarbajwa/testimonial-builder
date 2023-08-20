import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {data} from "../../../../../data/data";

import "./sliderOneStyles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderOne = (props) => {
    const testimonialsData = [...data];

    const renderSlides = () => {
        return testimonialsData.map( (testimonial, index) => (<>
            <SwiperSlide style={{background:"#e3e3e3", borderRadius:'10px'}} key={`singleTestimonial-${testimonial.id}`}>
                <Box p={"20px"} minH={"100px"} >

                    <Image 
                        borderRadius="full"
                        boxSize={"150px"}
                        src={testimonial.image}
                    />
                    <Text>
                        {testimonial.firstName} {testimonial.firstName}  
                    </Text>
                    <Text>
                        {testimonial.company}
                    </Text>
                    <Text>
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