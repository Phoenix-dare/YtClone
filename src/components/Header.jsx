import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '/images.png';

function Header() {
	return (
		<div className="header">
			<div className="left-box">
				<MenuRoundedIcon />
				<img id="logo" src={logo} alt="logo" />
			</div>

			<div className="center-box">
				<input type="text" placeholder="Search" />
				<SearchIcon />
			</div>
			<div className="right-box">
				<VideoCallIcon />
				<ViewComfyIcon />
				<CircleNotificationsIcon />
				<AccountCircleIcon />
			</div>
		</div>
	);
}
export default Header;
