import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function Videos({image,channel,channelImage,title,views,timestamp}) {
	return (
		<div className="video">
			<img className="thumbnail" src={image} alt="" />
			<div className="video_description">
				<PersonPinIcon className="creator" src={channelImage} alt={channel} />
				<div className="video_title">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Videos;
