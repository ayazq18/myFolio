import { Box, Stack } from '@mui/material'
import React from 'react'
import { social_icons } from '../mock/speedDial';
import { Icon } from '@iconify/react';

function Social({icon}) {
    const handleClick = (url) => {
        window.open(url, '_blank'); // Open URL in a new tab
    };

    return (
        <Box>
            <Stack direction='row' gap={2}>
                {social_icons.map((item, index) => (
                    <Icon
                        key={index}  // Add a unique key for each item
                        ref={icon?.current[index]}  // Assign individual ref to each icon
                        icon={item.icon}
                        width="30px"
                        height="30px"
                        color={item.color}
                        style={{
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={() => {
                            icon.current[index].current.style.transform = 'scale(1.5) rotate(360deg)';
                        }}
                        onMouseLeave={() => {
                            icon.current[index].current.style.transform = 'scale(1) rotate(0deg)';
                        }}
                        onClick={() => handleClick(item.path)}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default Social
