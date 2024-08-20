import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Icon } from '@iconify/react'; // Ensure you have this package installed
import { useMediaQuery } from '@mui/material'; // To handle responsive breakpoints
import { _socials } from '../mock/speedDial';

// Example social actions data
const socials = [
  { name: 'Facebook', icon: 'ant-design:facebook-filled', color: '#3b5998' },
  { name: 'Twitter', icon: 'ant-design:twitter-circle-filled', color: '#1DA1F2' },
  { name: 'Instagram', icon: 'ant-design:instagram-filled', color: '#E1306C' },
];

function SpeedDialer() {
  // Using MUI's useMediaQuery to handle responsiveness
//   const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

const handleClick = (url) => {
    window.open(url, '_blank'); // Open URL in a new tab
  };

  return (
    <div>
      <SpeedDial
        // direction={smUp ? 'left' : 'up'}
        ariaLabel="Share post"
        icon={<Icon icon="solar:share-bold" />}
        FabProps={{ size: 'medium' }}
        sx={{
          // position: 'absolute',
          bottom: { xs: 32, md: 64 },
          right: { xs: 16, md: 24 },
        }}
      >
        {_socials.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={<Icon icon={action.icon} sx={{ color: action.color }} />}
            tooltipTitle={action.name}
            tooltipPlacement="top"
            FabProps={{ color: 'default' }}
            onClick={()=>handleClick(action.path)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default SpeedDialer;
