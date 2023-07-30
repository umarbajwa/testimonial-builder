import React, {useState, useContext, createContext} from "react";
import { data } from "../../data/data";
import AllTestimonials from "./allTestimonials";

import { AppProvider } from "../../AppContext";

export const TestimonialAppContext = createContext();

const Wrapper = (props) => {

    console.log('wrapper render');

    const [testimonialData, setTestimonialData] = useState(data);
    return(
        <AppProvider >
            <AllTestimonials />
        </AppProvider>
    );
}

export default Wrapper;