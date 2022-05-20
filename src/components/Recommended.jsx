import React from 'react';

function Recommended() {
	let apiKey = 'AIzaSyB26l6-1zSXia2PmV4haPpop2t_ElyUxjU';
	const [home, setHome] = React.useState([]);

	React.useEffect(() => {
		fetch(
			'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=AIzaSyB26l6-1zSXia2PmV4haPpop2t_ElyUxjU'
		)
			.then(res => res.json())
			.then(data => {
				setHome(data.items);
			})
    .catch(error=>console.log(error))
	}, []);
  
	//console.log(home)

	return (
		<div className="container_popular">
			<h2>Popular Videos</h2>
<div className="recommended">
  
			{home.map(keys => {
				const channelId = keys.snippet.channelId;
				const videoId = 'https://youtube.com/watch?v=' + keys.id;
				const channelurl =
					'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&';

				fetch(channelurl + new URLSearchParams({ id: channelId, key: apiKey }))
					.then(res => res.json())
					.then(data => {
						console.log(data.items[0].snippet.thumbnails.default.url);

						const image = document.getElementById(channelId);
						const setImage = image.setAttribute(
							'src',
							data.items[0].snippet.thumbnails.default.url
						);
					});

				return (
					<div className="video">
						<a href={videoId}>
							<div className="container">
								<img
									className="thumbnail"
									src={keys.snippet.thumbnails.high.url}
									alt=""
								/>
								<div className="video_description">
									<img id={channelId} className="creator" src="" alt="" />
									<div className="video_title">
										<h4>{keys.snippet.title}</h4>
										<p>{keys.snippet.channelTitle}</p>
										<p>
											{Math.round(keys.statistics.viewCount / 10000) +
												'k views'}
											{keys.snippet.publishedAt}
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				);
			})}
		</div>
      </div>
	);
}

export default Recommended;
