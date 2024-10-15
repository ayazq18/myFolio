import { alpha, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { social_icons } from '../mock/speedDial';
import { keyframes } from '@emotion/react';
import Footer from '../components/Footer';
import Social from '../components/social';

const rotateImage = keyframes`
  from {
    transform: rotateX(0deg) rotateY(360deg);
  }
  to {
    transform: rotateX(360deg) rotateY(0deg);
  }
`;

function Home() {
    const theme = useTheme(); // Get the theme
    const card1 = useRef(null);
    const card2 = useRef(null);
    const designation = useRef(null);
    const desc = useRef(null);
    const tech = useRef(null);
    const icon = useRef([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [borderRadius, setBorderRadius] = useState('0px');

    icon.current = social_icons.map((_, i) => icon.current[i] ?? React.createRef());
    console.log(icon.current)
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.5 } });

        tl.fromTo(card1.current, { opacity: 0 }, { opacity: 1, duration: 2 })
            .fromTo(card2.current, { x: -100, opacity: 0 }, { x: !isMobile && -150, opacity: 1, onComplete: () => setBorderRadius('30px') }, '-=1')
            .fromTo(designation.current, { x: 50, opacity: 0 }, { x: !isMobile && -50, opacity: 1 })
            .fromTo(desc.current, { x: 50, opacity: 0 }, { x: !isMobile && -50, opacity: 1 })
            .fromTo(tech.current, { x: 50, opacity: 0 }, { x: !isMobile && -50, opacity: 1 })
        // .fromTo(icon.current, { opacity: 0 }, { opacity: 1, duration: 2 });

        // Animate each icon individually
        icon.current.forEach((ref, index) => {
            if (ref.current) {
                tl.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1.5');
            }
        });

    }, [isMobile]);



    return (
        <Box sx={{ height: '100vh', pt: 2, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                {!isMobile ? <Card
                    ref={card1}
                    sx={{
                        height: { xs: 200, md: 400 },
                        width: { xs: 200, md: 400 },
                        bgcolor: theme.palette.grey[500],
                        borderRadius: { xs: '30px', md: '0 30px 30px 0' },
                        mb: { xs: 2, md: 0 },
                    }}
                /> :
                    <Typography>Ayaz Shahnawaz Qureshi</Typography>
                }
                <Box ref={card2}
                    sx={{
                        height: { xs: 200, md: 300 },
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Card
                        sx={{
                            width: '200px',
                            height: '80%',
                            bgcolor: theme.palette.secondary.contrastText,
                            display: 'flex',
                            p: 1,
                            boxShadow: (theme) => `0px 2px 4px ${alpha(theme.palette.grey[500], 0.1)}`,
                            borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
                            animation: `${rotateImage} 4s linear`,
                        }}
                    >
                        <img src='/image.jpeg' style={{ width: '200px', height: 'auto', borderRadius: `0 ${borderRadius} ${borderRadius} 0`, }} />
                    </Card>
                </Box>
                <Box sx={{ p: 1, height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 2 }}>
                    <Typography ref={designation} sx={{ fontSize: { xs: '12px', md: '25px' }, fontWeight: 700 }}>Front-end developer, full-stack developer, and back-end developer</Typography>
                    <Typography ref={desc} sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: '400', }}>A full-stack web developer who is passionate about making interesting and user-friendly websites and web apps. I have a constant desire to learn new things and keep up with current trends.</Typography>
                    {/* <Typography ref={tech} sx={{ color: theme.palette.text.primary, fontSize: `${!isMobile ? '20px' : '6px'}` }}>Tech Stack : Reactjs, Nextjs, Material UI</Typography> */}

                   <Social icon={icon}/>

                </Box>
            </Box>

            {/* <TechSkills isMobile={isMobile}/> */}

            {/* <MyProject icon={icon}/> */}
            <Footer theme = {theme} />
        </Box>
    );
}

export default Home;
