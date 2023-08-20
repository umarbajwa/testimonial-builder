import React, {useState, useContext, createContext} from "react";
import AllTestimonials from "./allTestimonials";
import { AppProvider } from "../../../AppContext";


const TestimonialListWrapper = (props) => {


    return(
        <AppProvider >
            <AllTestimonials />
        </AppProvider>
    );
}

export default TestimonialListWrapper;