import React from "react";
import styles from "./ContactPage.module.scss";
import { FacebookProvider, Page } from "react-facebook";
import BackgroundImage from "../../assets/connect.jpg";

class ContactPage extends React.Component {
	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div className={styles.pageBackground}>
				<img
					className={styles.pageBackgroundImage}
					src={BackgroundImage}
					alt="connect contact"></img>
				<div
					className={`${styles.ContactPage} simple-content frost-background`}>
					<ul className="icofont-ul">
						<li>
							<span className="icofont-phone"></span> 0741 236 640
						</li>
						<li>
							<span className="icofont-email"></span> homemedicalserv@yahoo.com
						</li>

						<li>
							<span className="icofont-facebook"></span>{" "}
							<a
								href="https://www.facebook.com/homemedicalservsrl"
								target="_blank"
								rel="noreferrer">
								@homemedicalservsrl
							</a>
						</li>
						<li>
							<span className="icofont-location-pin"></span> Brăila, jud. Brăila
						</li>
					</ul>
					<div id="fb-root"></div>

					<div className={styles.fbPage}>
						<FacebookProvider appId="868929373664504">
							<Page
								href="https://www.facebook.com/homemedicalservsrl"
								tabs="messages"
							/>
						</FacebookProvider>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactPage;
