import './LeftMenu.css'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const LeftMenu = () => {
  return (
    <aside>
            <h1>LOGO</h1>

            
                    <a href='#'>
                    <SpaceDashboardIcon/><h3>Dashboard</h3>
                    </a>

                    <a href='#'>
                    <LeaderboardIcon/><h3>Leaderboard</h3>
                    </a>

                    <a href='#'>
                    <LocalShippingIcon/><h3>Shipment</h3>
                    </a>

                    <a href='#'>
                    <PersonIcon/><h3>Administration</h3>
                    </a>

                    <a href='#'>
                    <FolderOpenIcon/><h3>Library</h3>
                    </a>

                    <a href='#'>
                    <LocationOnIcon/><h3>Maps</h3>
                    </a>

                    <a href='#'>
                    <SupportAgentIcon/><h3>Support</h3>
                    </a>
                <div className="link-container">
                    
                    <a href='#'>
                    <SettingsIcon/><h3>Settings</h3>
                    </a>

                    <a href='#'>
                    <LogoutIcon/><h3>Log Out</h3>
                    </a>
                   
            </div>
        </aside>
  )
}

export default LeftMenu