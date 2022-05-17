import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
function Sidebar() {
	return (
		<div className="sidebar">
			<div className="home">
        <HomeIcon />
Home
        </div>
      <div className="explore">
        <ExploreIcon />
Explore
        </div>
    <div className="shorts">
<PlayCircleOutlineIcon />
Shorts
      </div>
      <div className="subscription">
<SubscriptionsIcon />
        Subscriptions
        </div>
      <div className="library">
        <VideoLibraryIcon />
        Library
        </div>
		</div>
	);
}
export default Sidebar;
