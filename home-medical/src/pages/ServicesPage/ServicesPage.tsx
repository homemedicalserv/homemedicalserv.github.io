import React from "react";
import styles from "./ServicesPage.module.scss";
import BackgroundImage from "../../assets/services-background.jpg";
import { ServiceItem, UnderConstruction } from "../../components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
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
			<img
				className={styles.pageBackground}
				src={BackgroundImage}
				alt="ambulanta asistenta"></img>
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

export default ServicesPage;
