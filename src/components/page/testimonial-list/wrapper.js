import React, {useState, useContext, createContext} from "react";
import AllTestimonials from "./allTestimonials";
import { AppProvider } from "../../../AppContext";


const Wrapper = (props) => {

    console.log('wrapper render');

    return(
        <AppProvider >
            <AllTestimonials />
        </AppProvider>
    );
}

export default Wrapper;