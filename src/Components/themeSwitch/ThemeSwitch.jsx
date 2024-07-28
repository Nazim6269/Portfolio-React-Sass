import { NightlightOutlined, WbSunnyOutlined } from '@mui/icons-material';
import './_themeSwitch.scss';

export default function ThemeSwitch({ onClick, theme }) {
  return (
    <div className="theme-switch">
      {theme === 'dark' ? (
        <WbSunnyOutlined onClick={onClick} className="theme-switch__light" />
      ) : (
        <NightlightOutlined onClick={onClick} className="theme-switch__dark" />
      )}
    </div>
  );
}
