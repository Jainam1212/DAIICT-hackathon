import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import bg from '../assets/bg.png'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Homecontent=()=>{
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
        // This function will run when the component mounts
        const faders = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0,
            rootMargin: '0px 0px -150px 0px',
        };

        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('show');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach((fader) => {
            appearOnScroll.observe(fader);
        });

        // Cleanup function to remove observers when component unmounts
        return () => {
            faders.forEach((fader) => {
                appearOnScroll.unobserve(fader);
            });
        };
    }, []);

  return (
    <>
        <div className='homecontainer'>
            <div className="box1">
                <div className="welcome_msg fade-in">
                    <h1 className='font-bold largesize'>Welcome to <span className='gradient'>"SpaceReg"</span></h1>
                </div>
                <div className="welcome_content fade-in">
                    <p className='content_p'>SpaceReg integrates a model which detects fluctuations in magnetic field in atmosphere which indicates satellite to go in defensive mode if the atmospheric change is harmful</p>
                    <button className='start_btn'><a href="#home">Let's Start&rarr;</a></button>
                </div>
            </div>
        </div>
        <section className="homecontainer2" id="home" style={{display:'flex',flexDirection:'row',color:'white',marginBottom:'3rem',marginTop:'3rem'}}>
            <div className="innerbox1 fade-in" style={{width:'50%',display:'flex',height:'auto',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{fontWeight:'bold', fontSize:'3rem'}}><span className="gradient">What </span>our project is about</h1>
            </div>
            <div className="innerbox2 fade-in" style={{width:'50%', padding:'1rem',backdropFilter:'blur(15px)',border:"2px solid white"}}>
                <p>Space weather refers to the environmental conditions in space as influenced by the Sun's activity. These conditions can affect satellites, communication systems, and power grids on Earth. A key component of space weather prediction is understanding the Bz magnetic field component, which plays a crucial role in geomagnetic storms.
                    The Bz magnetic field component, part of the interplanetary magnetic field (IMF), is critical in predicting geomagnetic activity. When Bz is southward, it can merge with Earth's magnetic field, leading to geomagnetic storms. Accurate prediction of Bz can help in forecasting space weather events and mitigating their impact.</p>
            </div>
        </section>
        <div className="homecontainer3" style={{display:'flex',flexDirection:'column',justifyContent:'center', color:'white'}}>
            <h1 style={{fontWeight:'bold', fontSize:'3.5rem',textAlign:'center'}}><span className="gradient">Importance</span> of monitoring Space Weather</h1>
            <div className="cards" style={{display:'flex'}}>
                <div className="card fade-in">
                    <h1>1.<span className="gradient">Protecting Critical Infrastructure</span></h1>
                    <p>Accurate space weather forecasting helps safeguard power grids, communication systems, and satellite operations from the effects of geomagnetic disturbances.</p>
                </div>
                <div className="card fade-in">
                    <h1>2.<span className="gradient">Ensuring Astronaut Safe</span></h1>
                    <p>Monitoring space weather is essential for protecting astronauts and spacecraft from the hazards of solar radiation and energetic particles</p>
                </div>
                <div className="card fade-in">
                    <h1>3.<span className="gradient">Improving Technological Resilience</span></h1>
                    <p>Understanding and mitigating the impacts of space weather events helps develop more resilient and reliable technologies.</p>
                </div>
            </div>
        </div>
        <div className="homecontainer3" style={{display:'flex',flexDirection:'column',justifyContent:'center', color:'white',marginTop:'4rem'}}>
            <h1 style={{fontWeight:'bold', fontSize:'3.5rem',textAlign:'center'}}><span className="gradient">Importance</span> of monitoring Space Weather</h1>
            <div className="cards" style={{display:'flex'}}>
                <div className="card fade-in" style={{width:'20%'}}>
                    <h1>1.<span className="gradient">Real-Time Monitoring</span></h1>
                    <p>Continuous monitoring of Bz magnetic field data for early detection of space weather events.</p>
                </div>
                <div className="card fade-in" style={{width:'20%'}}>
                    <h1>2.<span className="gradient">Alerts and Notifications</span></h1>
                    <p>Customizable alerts to warn users of impending geomagnetic disturbances and their potential impacts.</p>
                </div>
                <div className="card fade-in" style={{width:'20%'}}>
                    <h1>3.<span className="gradient">Space Weather Forecasting</span></h1>
                    <p>Access to advanced space weather forecasting models to predict the evolution of space weather conditions.</p>
                </div>
                <div className="card fade-in" style={{width:'20%'}}>
                    <h1>3.<span className="gradient">Data Visualization</span></h1>
                    <p>Interactive charts, graphs, and maps to help users analyze and interpret space weather data.</p>
                </div>
            </div>
        </div>
        <section className="homecontainer2" id="home" style={{display:'flex',flexDirection:'row',color:'white',marginBottom:'3rem',marginTop:'5rem'}}>
            <div className="innerbox1" style={{width:'50%',display:'flex',height:'auto',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{fontWeight:'bold', fontSize:'3rem'}}><span className="gradient">How </span>do we collect our data?</h1>
            </div>
            <div className="innerbox2" style={{width:'50%', padding:'1rem',backdropFilter:'blur(15px)', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div className="card fade-in" style={{width:'80%',margin:'1rem',height:'fit-content'}}>
                    <h1>1.<span className="gradient">Ground-Based Observatories</span></h1>
                    <p>The application aggregates data from a network of ground-based magnetometers and other space weather monitoring stations around the world.</p>
                </div>
                <div className="card fade-in" style={{width:'80%',margin:'1rem',height:'fit-content'}}>
                    <h1>2.<span className="gradient">Satellite Measurements</span></h1>
                    <p>Data is also collected from specialized satellites that continuously measure the Bz component of the Earth's magnetic field.</p>
                </div>
                <div className="card fade-in" style={{width:'80%',margin:'1rem',height:'fit-content'}}>
                    <h1>3.<span className="gradient">Global Collaboration</span></h1>
                    <p>The app integrates data from various national and international agencies to provide a comprehensive view of space weather conditions.</p>
                </div>
                <div className="card fade-in" style={{width:'80%',margin:'1rem',height:'fit-content'}}>
                    <h1>3.<span className="gradient">Quality Assurance</span></h1>
                    <p>Rigorous data validation and quality control measures ensure the accuracy and reliability of the space weather information.</p>
                </div>
            </div>
        </section>
    </>    
  );
}