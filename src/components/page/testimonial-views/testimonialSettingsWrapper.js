import React, {useState, useContext, createContext} from "react";
import { TestimonialViewAppProvider } from "./testimonialViewContext";
import AllViews from "./allViews";

const TestimonialSettingsWrapper = (props) => {


    return(
        <TestimonialViewAppProvider >
            <AllViews />
        </TestimonialViewAppProvider>
    );
}

export default TestimonialSettingsWrapper;