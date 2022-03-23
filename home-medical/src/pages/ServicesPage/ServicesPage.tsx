import React from 'react';
import styles from './ServicesPage.module.scss';
import BackgroundImage from '../../assets/services-background.jpg';
import { ServiceItem, UnderConstruction } from '../../components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ServiceItemModel from '../../model';

const ServicesPage: React.FC = () => {
	let match = useRouteMatch();

	let serviceItems: Array<ServiceItemModel> = [
		{
			title: 'Îngrijiri medicale la domiciliu',
			icon: 'patient-bed',
			url: '/ingrijiri-medicale-la-domiciliu',
		},
		{
			title: 'Transport sanitar neasistat',
			icon: 'ambulance-cross',
			url: '/transport-sanitar-neasistat',
		},
		{
			title: 'Dispozitive medicale',
			icon: 'first-aid',
			url: '/dispozitive-medicale',
		},
		{
			title: 'Servicii',
			icon: 'prescription',
			url: '',
		},
	];

	let serviceItemControls = serviceItems.map((item) => <ServiceItem {...item}></ServiceItem>);
	return (
		<div className={styles.ServicesPage}>
			<img className={styles.pageBackground} src={BackgroundImage} alt="ambulanta asistenta"></img>
			{serviceItemControls}

			<CSSTransition timeout={200} classNames="my-node">
				<div className={`${styles.serviceDescription} frost-background light-shadow`}>
					<Switch>
						<Route path={`${match.path}/ingrijiri-medicale-la-domiciliu`}>
							<div className="page">
								<p>
									Îngrijirea medicală la domiciliu este un serviciu la care tot mai mulți pacienți apelează pentru a nu
									fi nevoiți sa ramană în spital.
								</p>
								<p>
									Scopul principal al acestui model de ingrijire este acela de a face posibil ca oamenii sa-si mentina
									gradul de independenta si sa-si continue viata acasa in conditii cat mai bune si cit mai mult timp
									posibil.
								</p>
								<p>
									Cu noi, pacientul beneficiaza de îngrijire demnă, adecvată şi corespunzătoare nevoilor individuale
									direct în mediul său familiar. Datorită acestui tip de îngrijire numărul şi durata tratamentelor
									spitalizate pot fi reduse, iar procesul de vindecare al bolnavului poate fi îmbunătăţit.
								</p>
								<p>
									<b>
										Pacientii asigurati prin serviciul public de sanatate pot beneficia de maximum 90 de zile intr-un an
										calendaristic de ingrijire medicala la domiciliu. Acasa bolnavul va beneficia de monitorizare,
										tratament si recuperare conform recomandarii medicului.
									</b>
								</p>
							</div>
						</Route>
						<Route path={`${match.path}/transport-sanitar-neasistat`}>
							<div className="page">
								<p>
									<b>HOME MEDICAL SERV SRL</b> - furnizor privat de transport sanitar neasistat- care are ca scop
									principal efectuarea transportului pacientilor care nu se afla in stare critica si nu necesita
									monitorizare si ingrijiri medicale speciale pe durata transportului.
								</p>
								<p>
									Transportul sanitar neasistat se efectueaza cu ambulanta tip A1/A2, echipata conform standardelor
									prevazute de legislatia in vigoare si echipaj format din sofer autosanitara cu pregatire de asistent
									medical generalist- grad principal.
								</p>
								<p>
									Beneficiarii serviciilor oferite de noi sunt cei care doresc sa fie transportati cu o{' '}
									<b> ambulanță privata</b>, persoane care necesita ajutor la deplasare, persoane care au nevoie de
									transport special, dar nu pot apela la <b>serviciul public de ambulanta</b> pentru ca nu prezinta un
									caz de urgenta medicala.
								</p>
								<p>
									Asiguram <b>transportul pacientilor pe tot teritoriul tarii:</b>
									<ul>
										<li>
											de la domiciliu la spitale, clinici medicale, alte institutii medicale pentru consultatii /
											investigatii medicale sau internari;
										</li>
										<li>externari din spitale, clinici, alte institutii medicale la domiciliu; </li>
										<li>transfer intre spitale, camine / azile de batrani, clinici medicale, etc;</li>
										<li>
											in orice alte situatii care impun ajutor la deplasarea persoanelor ce nu se pot deplasa singure si
											necesita targa sau scaun rulant;
										</li>
									</ul>
								</p>
								<p>
									<b>De ce sa alegi HOME MEDICAL SERV SRL?</b>
									<ul>
										<li>Profesionalism</li>
										<li>Respect pentru pacient</li>
										<li>Punctualitate</li>
										<li>Devotament si empatie</li>
										<li>Personal calificat</li>
										<li>Ofera cele mai rapide, potrivite si deontologice solutii de transport sanitar neasistat</li>
									</ul>
								</p>
							</div>
						</Route>
						<Route path={`${match.path}/dispozitive-medicale`}>
							<UnderConstruction></UnderConstruction>
						</Route>
						<Route exact={true} path={match.path}>
							{({ match }) => (
								<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
									<div className="page">monitorizam...</div>
								</CSSTransition>
							)}
						</Route>
					</Switch>
				</div>
			</CSSTransition>
		</div>
	);
};

export default ServicesPage;
