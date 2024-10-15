import { useEffect, useRef } from 'react';
import { Box, Button, FormControl, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { keyframes } from '@emotion/react';
import gsap from 'gsap';

// Define the keyframes animation
const rotateGlobe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function About() {
    const theme = useTheme();
    const aboutRef = useRef(null)
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        gsap.fromTo(aboutRef.current, { x: 400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
    }, [])
    return (
        <Box sx={{ pt: 2, mt:2, bgcolor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Stack direction={{ xs: 'column', md: 'row' }} gap={5} justifyContent="center" alignItems='center'>
                <Box sx={{ width: { xs: '90vw', md: '30vw' }, height: '40vh', animation: `${rotateGlobe} 10s ease-in-out infinite`, }}>
                    <Icon
                        icon='emojione:globe-showing-europe-africa'
                        style={{
                            width: '100%',
                            height: '100%',

                        }}
                    />
                </Box>

                <Box sx={{ width: { xs: '100vw', md: '60vw' }, }} >
                    <Box ref={aboutRef} >
                        <Typography variant={!isMobile ? 'h1' : 'h5'} sx={{ textAlign: 'center', color: theme.palette.text.primary, }}>About Me</Typography>
                        <Typography  sx={{ textAlign: 'center', textWrap: 'wrap', fontSize: `${!isMobile ? '20px' : '12px'}`, color: theme.palette.text.primary, }}>
                            • A result-oriented youth aspiring to prove skills/abilities in Information Technology field.
                            • Strongly believes in problem solving tools: Creativity, Out of box thinking & Brainstorming session.
                            • Fully conversant with SDLC.
                            • Possess IT experience of 1 year and non-IT experience of 2 years.
                        </Typography>
                    </Box>
                </Box>
            </Stack>

            <Box sx={{ p: 5, mt: 5, width: {xs:'80vw', md:'60vw'}, color: theme.palette.text.primary, }}>
                <Typography variant='h4' mt={2} mb={2}>Get in touch</Typography>
                <Typography sx={{ fontSize: '15px', fontWeight: '400', textAlign: 'start' }}>If you want to know more about me or my work, or if you would just like to say hello, or if you would like to collaborate please contact me below and leave a link to your website or portfolio. I am looking forward to hearing from you!</Typography>
                <FormControl sx={{ width: '100%' }}>
                    <Stack mt={2}>
                        <TextField label='Your Email' fullWidth sx />
                    </Stack>
                    <Stack mt={2}>
                        <TextField label='Your Name' />
                    </Stack>
                    <Stack mt={2}>
                        <TextField label='Type a message' />
                    </Stack>
                </FormControl>

                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Button variant='contained'>Submit</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
