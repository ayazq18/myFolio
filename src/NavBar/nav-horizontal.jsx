import { useCallback, useEffect, useState, useRef } from 'react';
import { alpha, Box, Card, Drawer, IconButton, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../App.css'
import { useThemeContext } from '../context/ThemeContext';
import { STATUS_OPTIONS } from '../mock/speedDial';
import { useNavigate } from 'react-router-dom';



function NavHorizontal() {
    const theme = useTheme();
    const roleRef = useRef(null);
    const { toggleTheme, mode } = useThemeContext();
    const [toggle, setToggle] = useState(false);
    const [productSelected, setProductSelected] = useState('home');

    // Sync the tab selection with the route
    useEffect(() => {
        const path = location.pathname.split('/').pop(); // Extract the last segment of the path
        const selectedTab = STATUS_OPTIONS.find(tab => tab.path === `/${path}`)?.value || 'home';
        setProductSelected(selectedTab);
    }, [location.pathname]);
    
    const navigate = useNavigate()

    const navigateTo = (path) => {
        navigate(path)
    }

    // Handler to toggle the drawer
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setToggle(open);
    };

    // Responsive check for mobile and tablet
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleFilterStatus = useCallback((event, newValue) => {
        setToggle(false)
        setProductSelected(newValue);
        localStorage.setItem('currentTab', newValue);
    }, []);

    useEffect(() => {
        const nameElement = document.getElementById('name');

        if (nameElement) {
            nameElement.addEventListener('mouseenter', () => {
                gsap.fromTo(roleRef.current,
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
                );
                // roleRef.current.classList.add('color-changing-text');
            });
            nameElement.addEventListener('mouseleave', () => {
                gsap.to(roleRef.current,
                    { x: -100, opacity: 0, duration: 0.5, ease: 'power2.out' }
                );
                // roleRef.current.classList.remove('color-changing-text');
            });
        }
    }, []);



    return (
        <Box sx={{ position: `${!isMobile && 'sticky'}`, top: 10, zIndex: 99999 }}>
            {isMobile ? (
                <>
                    {/* Menu Icon for Mobile */}
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1,
                        }}
                    >
                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                        >
                            <Icon icon="mdi:menu" style={{ fontSize: '40px' }} />
                        </IconButton>
                        <Box>
                            <IconButton onClick={toggleTheme} color="inherit">
                                {mode === 'light' ?
                                    <Icon
                                        icon='token-branded:sun'
                                        style={{ fontSize: '40px', cursor: 'pointer' }}
                                    />
                                    :
                                    <Icon
                                        icon='token-branded:moon'
                                        style={{ fontSize: '40px', cursor: 'pointer' }}
                                    />
                                }
                            </IconButton>
                        </Box>
                    </Card>

                    {/* Drawer for Mobile */}
                    <Drawer
                        anchor="left"
                        open={toggle}
                        onClose={toggleDrawer(false)}
                        sx={{ zIndex: 9999 }}
                    >
                        <Box
                            sx={{
                                width: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                p: 2,

                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#fbd6a5',
                                    fontSize: '24px',
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    mb: 1,
                                }}
                            >
                                Ayaz Qureshi
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    textTransform: 'uppercase',
                                    color: '#f8ba3a'
                                }}
                            >
                                Fullstack Developer
                            </Typography>
                            <Tabs
                                value={productSelected}
                                onChange={handleFilterStatus}
                                orientation="vertical"
                                sx={{
                                    mt: 2,
                                    display: 'flex', direction: 'column', alignItems: 'flex-start',
                                    textAlign: 'left',
                                }}
                                TabIndicatorProps={{
                                    sx: {
                                        left: 0, // Align indicator to the left
                                        width: 4, // Adjust the width of the indicator
                                        bgcolor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                {STATUS_OPTIONS.map((tab) => (
                                    <Tab
                                        key={tab.value}
                                        iconPosition="start"
                                        value={tab.value}
                                        label={tab.label}
                                        icon={<Icon icon={tab.icon} />}
                                        onClick={() => navigateTo(tab.path)}
                                    />
                                ))}
                            </Tabs>

                        </Box>
                    </Drawer>
                </>
            ) : (
                <Card
                    sx={{
                        flexGrow: { md: 1 },
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                    }}
                >
                    <Box sx={{ textAlign: 'center', pl: 1 }} >
                        <Typography
                            id='name'
                            sx={{
                                color: '#393951',
                                fontSize: '24px',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                cursor: 'pointer'
                            }}
                        >
                            Ayaz Qureshi
                        </Typography>
                        <Typography
                            ref={roleRef}
                            sx={{
                                color: '#1877f2',
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                opacity: 0,
                            }}
                        >
                            Fullstack Developer
                        </Typography>
                    </Box>

                    <Card
                        sx={{
                            width: 'auto', // Set width to auto to fit content
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            p: 1,
                            boxShadow: (theme) => `0px 2px 4px ${alpha(theme.palette.grey[500], 0.1)}`, // Optional: Adjust shadow for better visibility
                        }}
                    >
                        <Tabs
                            value={productSelected}
                            onChange={handleFilterStatus}
                            sx={{
                                px: 2.5,
                                boxShadow: (theme2) => `inset 0 -2px 0 0 ${alpha(theme2.palette.grey[500], 0.08)}`,
                            }}
                        >
                            {STATUS_OPTIONS.map((tab) => (
                                <Tab
                                    key={tab.value}
                                    iconPosition="start"
                                    value={tab.value}
                                    label={tab.label}
                                    sx={{ color: tab.value === productSelected && theme.palette.primary.main }}
                                    icon={<Icon icon={tab.icon} />}
                                    onClick={() => navigateTo(tab.path)}
                                />
                            ))}
                        </Tabs>

                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === 'light' ?
                                <Icon
                                    icon='token-branded:sun'
                                    style={{ fontSize: '40px', cursor: 'pointer' }}
                                />
                                :
                                <Icon
                                    icon='token-branded:moon'
                                    style={{ fontSize: '40px', cursor: 'pointer' }}
                                />
                            }
                        </IconButton>

                    </Card>
                </Card>
            )}
        </Box>
    );
}

export default NavHorizontal;
