import React from "react";
import styles from "./HomePage.module.scss";
import VideoAmbulance from "../../assets/ambulance.mp4";

const HomePage: React.FC = () => (
	<div className={styles.HomePage}>
		<video className={styles.videoPlayer} autoPlay loop muted>
			<source src={VideoAmbulance} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
);

export default HomePage;
