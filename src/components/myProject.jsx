// import Stack from '@mui/material/Stack';
import { Box, Stack } from '@mui/system';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import SeoIllustration from './seo-illustration';
import AppWelcome from './app-welcome';
import { useTheme } from '@emotion/react';
import { Icon } from '@iconify/react';
import { projectData } from '../mock/myProjects';

// ----------------------------------------------------------------------

export default function MyProject({icon}) {

    const theme = useTheme()
    const handleWatchButtonClick = (path) => {
        window.open(path, '_blank');
    };

    return (
        <Box sx={{p:4, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, }}>
            <Typography
                variant='h4'
                sx={{
                    p: 2,
                    borderRadius: '5px',
                    //   boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.1)',
                    mb: 1,
                    textAlign: 'center',
                    fontWeight:'900',
                    textTransform:'uppercase'
                }}
            >
                Projects I have worked on
            </Typography>

            <Grid container spacing={2} xs={12} md={12} sx={{ mt: 1, mb:2, display:'flex', justifyContent:'center', }}>
                {projectData.map((item, index) => (
                    <Grid item xs={12} md={6} key={index} mb={3}>
                        <AppWelcome
                            img={item.image}
                            action={
                                <Icon
                                icon={item.icon}
                                width="30px"
                                height="30px"
                                // color={item.color}
                                style={{
                                    cursor: 'pointer',
                                    padding:'5px',
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius:'10px'
                                }}
                               
                                onClick={()=>handleWatchButtonClick(item.url)}
                            />
                                // <Button
                                //     sx={{ fontSize: '16px' }}
                                //     variant="contained"
                                //     color="primary"
                                //     onClick={()=>handleWatchButtonClick(item.url)}
                                // >
                                //     Visit
                                // </Button>
                            }
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}
