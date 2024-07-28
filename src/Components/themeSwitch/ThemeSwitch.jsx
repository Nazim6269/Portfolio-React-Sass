import { NightlightOutlined, WbSunnyOutlined } from '@mui/icons-material';
import * as React from 'react';

export default function ThemeSwitch({ onClick, theme }) {
  return (
    <>
      {theme === 'dark' ? (
        <WbSunnyOutlined onClick={onClick} />
      ) : (
        <NightlightOutlined onClick={onClick} />
      )}
    </>
  );
}
