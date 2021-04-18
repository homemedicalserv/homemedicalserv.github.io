import React from "react";
import styles from "./ServicesPage.module.scss";
import BackgroundImage from "../../assets/services-background.jpg";
import { ServiceItem, UnderConstruction } from "../../components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ServiceItemModel from "../../model";

const ServicesPage: React.FC = () => {
	let match = useRouteMatch();

	let serviceItems: Array<ServiceItemModel> = [
		{
			title: "Monitorizarea parametrilor fiziologici",
			icon: "heart-beat-alt",
			url: "/monitorizare",
		},
		{
			title:
				"Administrarea medicamentelor intramuscular subcutant / intradermic și oral",
			icon: "pills",
			url: "/administrare-medicamente",
		},
		{
			title: "Administrarea medicamentelor intravenos / perfuzie endovenoasă",
			icon: "injection-syringe",
			url: "/admininstrare-intravenos",
		},
		{
			title: "Manevre terapeutice pentru evitarea escarelor",
			icon: "herbal",
			url: "/evitare-escare",
		},
		{
			title: "Îngrijirea plăgilor simple / suprainfectate",
			icon: "bandage",
			url: "/infectare",
		},
		{
			title: "Suprimarea firelor",
			icon: "brand-aircell",
			url: "/suprimare-fire",
		},
		{
			title: "Îngrijirea escarelor multiple",
			icon: "icu",
			url: "/escare-multiple",
		},
		{
			title: "Montat / schimbat sondă urinară",
			icon: "paper-clip",
			url: "/sonda",
		},
		{
			title: "Servicii",
			icon: "prescription",
			url: "",
		},
	];

	let serviceItemControls = serviceItems.map((item) => (
		<ServiceItem {...item}></ServiceItem>
	));
	return (
		<div className={styles.ServicesPage}>
			<img className={styles.pageBackground} src={BackgroundImage}></img>
			{serviceItemControls}

			<CSSTransition timeout={200} classNames="my-node">
				<div
					className={`${styles.serviceDescription} frost-background light-shadow`}>
					<Switch>
						<Route
							path={`${match.path}/monitorizare`}
							component={UnderConstruction}
						/>
						<Route exact={true} path={match.path}>
							{({ match }) => (
								<CSSTransition
									in={match != null}
									timeout={300}
									classNames="page"
									unmountOnExit>
									<div className="page">
										<UnderConstruction></UnderConstruction>
									</div>
								</CSSTransition>
							)}
						</Route>
						<Route exact={false} path={match.path}>
							<UnderConstruction></UnderConstruction>
						</Route>
					</Switch>
				</div>
			</CSSTransition>
		</div>
	);
};

function Monitorization() {
	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices
				placerat dictum. Phasellus malesuada maximus ligula, eget convallis
				purus dictum vel. Integer justo dolor, dapibus a nulla vitae, blandit
				congue metus. Nulla at tristique nisl, eu cursus nisl. Nulla pulvinar
				dapibus ante id pretium. Morbi lectus urna, euismod ut nisi dictum,
				ultrices ullamcorper magna. Sed quis fringilla lorem, at facilisis
				dolor. Aliquam at nulla efficitur, laoreet ligula at, consectetur felis.
				Suspendisse aliquet urna orci, eu sodales tellus congue quis.
				Suspendisse auctor velit id sem ultricies scelerisque.
			</p>
			<p>
				Aenean eu hendrerit eros. Suspendisse nec velit ut nisi rutrum
				ullamcorper id sit amet arcu. Vestibulum varius suscipit nulla vel
				ornare. Etiam sodales ante quis diam facilisis feugiat. Suspendisse
				potenti. Nam ut nisl vitae purus cursus auctor sit amet lacinia urna.
				Suspendisse et sodales justo, ut ultricies est. Nullam et quam posuere,
				tempor tortor sed, faucibus magna. Nunc ut accumsan diam. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Cras fermentum, nulla eu
				imperdiet consectetur, justo orci auctor orci, in auctor est massa eu
				erat. Proin diam enim, porttitor eu hendrerit non, aliquet nec nisl.
				Vivamus aliquet commodo purus vitae dictum. Proin leo nisl, imperdiet in
				ex et, lobortis eleifend metus.
			</p>
			<p>
				Vivamus nec nibh in dui pellentesque bibendum non eu ante. Mauris
				imperdiet nec ex id blandit. Donec mollis risus quis accumsan
				scelerisque. Nulla venenatis magna a congue feugiat. Phasellus magna
				sem, cursus et sem eu, ornare facilisis justo. Nullam sit amet arcu id
				lacus aliquam dictum. Nulla at vulputate enim, mollis fermentum enim.
				Suspendisse in mi sem. Mauris laoreet tellus ac urna placerat tincidunt.
				Nunc aliquam consequat tincidunt. Vivamus interdum elit id nibh congue,
				in lacinia arcu finibus. Aliquam dignissim ac nisi et ultricies.
			</p>
		</div>
	);
}

export default ServicesPage;
