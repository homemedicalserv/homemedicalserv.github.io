import React from "react";
import Script from "react-load-script";
import styles from "./ContactPage.module.scss";
import { FacebookProvider, Page } from "react-facebook";
import { Link } from "react-router-dom";

class ContactPage extends React.Component {
	componentDidMount() {
		console.log("mount");
	}

	componentWillUnmount() {}

	render() {
		let fbPageAttributes = {
			"data-href": "https://www.facebook.com/homemedicalservsrl/",
			"data-tabs": "messages",
			"data-width": "",
			"data-height": "",
			"data-small-header": "false",
			"data-adapt-container-width": "true",
			"data-hide-cover": "false",
			"data-show-facepile": "true",
		};

		let scriptProperties = {
			crossorigin: "anonymous",
			nonce: "jqGVewxi",
		};

		console.log("render");

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
				</ul>
				<div id="fb-root"></div>
				<Script
					url={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&_rand=${Math.random()}`}
					attributes={scriptProperties}></Script>
				<div className={styles.fbPage} {...fbPageAttributes}>
					<blockquote
						cite="https://www.facebook.com/homemedicalservsrl/"
						className="fb-xfbml-parse-ignore">
						<a href="https://www.facebook.com/homemedicalservsrl/">
							Home Medical Serv SRL
						</a>
					</blockquote>
				</div>

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
