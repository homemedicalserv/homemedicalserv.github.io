import React from "react";
import VideoAmbulance from "../../assets/ambulance.mp4";

function HomePage() {
	return (
		<div className="home-page">
			<video className="video-player" autoPlay loop muted>
				<source src={VideoAmbulance} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default HomePage;
