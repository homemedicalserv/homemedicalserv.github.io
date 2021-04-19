import React from "react";
import Script from "react-load-script";
import styles from "./ContactPage.module.scss";
import { FacebookProvider, Page } from "react-facebook";
import { Link } from "react-router-dom";

class ContactPage extends React.Component {
	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div className={`${styles.ContactPage} simple-content`}>
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
							target="_blank">
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
						<Page href="https://www.facebook.com/gradinalori" tabs="messages" />
					</FacebookProvider>
				</div>
			</div>
		);
	}
}

export default ContactPage;
