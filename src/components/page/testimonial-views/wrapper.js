import React, {useState, useContext, createContext} from "react";
import { TestimonialViewAppProvider } from "./testimonialViewContext";
import AllViews from "./allViews";

const Wrapper = (props) => {

    


    console.log('wrapper render');
    return(
        <TestimonialViewAppProvider >
            <AllViews />
        </TestimonialViewAppProvider>
    );
}

export default Wrapper;