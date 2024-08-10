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
    <div className='homecontainer'>
        <div className="box1">
            <div className="welcome_msg fade-in">
                <h1 className='font-bold largesize'>Welcome to <span className='gradient'>"SpaceReg"</span></h1>
            </div>
            <div className="welcome_content fade-in">
                <p className='content_p'>SpaceReg integrates a model which detects fluctuations in magnetic field in atmosphere which indicates satellite to go in defensive mode if the atmospheric change is harmful</p>
                <button className='start_btn'>Let's Start&rarr;</button>
            </div>
        </div>
        <div className="box2">
            {/* <img src={bg} alt="" /> */}
        </div>
    </div>
    
  );
}