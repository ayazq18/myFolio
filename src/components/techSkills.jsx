import { Box, Card, Grid, keyframes, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { techData } from '../mock/techData'
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const rotateImage = keyframes`
  from {
    transform: rotateX(0deg) rotateY(180deg);
  }
  to {
    transform: rotateX(360deg) rotateY(0deg);
  }
`;

function TechSkills({ isMobile }) {
    const theme = useTheme()
    const techCardRef = useRef([])
    const mainRef = useRef(null)

    techCardRef.current = techData.map((_, i) => techCardRef.current[i] ?? React.createRef());

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.5, delay: 0.2 } });
        // Animate each icon individually
        tl.fromTo(mainRef.current, { x: 0 }, { x: !isMobile && -150, duration: 1 })
        // techCardRef.current.forEach((ref, index) => {
        //     if (ref.current) {
        //         tl.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1.5');
        //     }
        // });

    }, [isMobile]);

    return (
        <Box sx={{ p:2, color: theme.palette.text.primary, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: theme.palette.background.paper }}>

            <Typography variant='h4' sx={{ textAlign: 'center', mb: 1 }}>TECHNOLOGIES AND TOOLS</Typography>
            <Typography sx={{ fontSize: { xs: '12px', md: '15px', }, textAlign: 'center', width: { md: '560px' }, }}>I create dependable, user-focused websites for computers, tablets, and smartphones using a blend of cutting-edge technology and open-source software.</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column-reverse', md: 'row' }, }}>
                <Grid container spacing={2} xs={12} md={12} mt={{ md: 2, xs: 1 }} ref={mainRef}>
                    {techData.map((item, index) => (
                        <Grid item xs={6} md={4} spacing={2} key={index}>
                            <Card ref={techCardRef.current[index]} sx={{
                                cursor: 'pointer', width: '100%', height: '50px', gap: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',

                            }}
                                onMouseEnter={() => {
                                    techCardRef.current[index].current.style.transform = 'scale(1.5)';
                                }}
                                onMouseLeave={() => {
                                    techCardRef.current[index].current.style.transform = 'scale(1)';
                                }}
                            >
                                <Icon
                                    icon={item.icon}
                                    width="30px"
                                    height="30px"
                                    color={item.color}
                                    style={{
                                        transition: 'transform 0.3s ease-in-out',
                                        cursor: 'pointer',
                                    }}
                                />
                                <Typography>{item.tech}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: { xs: 2 } }}>
                    <iframe src="https://giphy.com/embed/2IudUHdI075HL02Pkk" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </Box>

            </Box>
        </Box>
    )
}

export default TechSkills
