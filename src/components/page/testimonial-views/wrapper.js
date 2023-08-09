import React, {useState, useContext, createContext} from "react";
import { TestimonialViewAppProvider } from "./testimonialViewContext";
import AllViews from "./allViews";

const Wrapper = (props) => {


    return(
        <TestimonialViewAppProvider >
            <AllViews />
        </TestimonialViewAppProvider>
    );
}

export default Wrapper;