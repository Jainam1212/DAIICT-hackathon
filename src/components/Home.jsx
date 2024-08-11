import React,{ useState } from "react";
import { Button } from "@mui/material";
import { Form } from "./Formcontent";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Link } from "react-router-dom";

export const HomeHeader = ()=>{
    const [viewComponent, setviewComponent] = useState(false);
    function handleButtonClick(){
        setviewComponent(true);
    }
    const [dynamictxt] = useTypewriter({
        words:[`Let's dive into some exciting space calculations!"`,`Ready to explore the mysteries of space through some calculations?"`,`Time to tackle some fascinating space-related challenges!"`,`Prepare to embark on a journey through space with some intriguing calculations!"`,`Let's launch into some cosmic calculations!"`],
        loop:true,
        delaySpeed:200,
    });
    return(
        <>
            <section className="home-section">
                <div className="title">
                    <div className="text wrapper">
                        <h1 style={{margin:'5px'}}>
                            "
                            <span style={{fontWeight:'bold',color:'blue'}}>
                                {dynamictxt}
                            </span>
                            <Cursor/>
                        </h1> 
                    </div>
                </div>
                <div className="start_icon">
                    <Button variant="contained" color="primary" component={Link} to="/formpage" className="margin-right-1" sx={{ marginRight: '1rem' }}>Start Magic ⚡</Button>
                </div>
            </section>
        </>
    )
}