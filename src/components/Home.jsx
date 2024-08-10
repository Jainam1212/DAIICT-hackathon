import React,{ useState } from "react";
import { Button } from "@mui/material";
import { Form } from "./Formcontent";
export const HomeHeader = ()=>{
    const [viewComponent, setviewComponent] = useState(false);
    function handleButtonClick(){
        setviewComponent(true);
    }

    return(
        <>
            <section className="home-section">
                <div className="title">
                    <div className="text">"Ready to explore the mysteries of space through some calculations?"</div>
                </div>
                <div className="start_icon">
                    <Button variant="contained" color="primary" onClick={handleButtonClick} className="margin-right-1" sx={{ marginRight: '1rem' }}>Start Magic ⚡</Button>
                </div>
            </section>
            {viewComponent && <Form setviewComponent={setviewComponent}/>}
        </>
    )
}