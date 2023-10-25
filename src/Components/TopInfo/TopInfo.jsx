

import userPic from '../../assets/images/anas.jpg'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Notif from '@mui/icons-material/Notifications'
import './TopInfo.css'

const TopInfo = () => {
  return (
    <section className='topmenu'>
    <h1>Dashboard</h1>
    <div className="search">
      <SearchIcon/>
      <input type="text" placeholder='Search Something...' />
    </div>
    
    
    <div className="profile">
      <div className="notification">
      <Badge badgeContent={4} color="primary">
      <Notif color="action" />
    </Badge>
      </div>
        <div className="info">
          <h3>Your Name</h3>
          <h5>Administrator</h5>
        </div>
        <div className="userImage">
            <img src={userPic} />
        </div>
    </div>
</section>
  )
}

export default TopInfo