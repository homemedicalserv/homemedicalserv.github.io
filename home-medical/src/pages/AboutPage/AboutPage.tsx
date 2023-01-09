import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import NoiImage from '../../assets/noi.jpg';
import MisiuneImage from '../../assets/misiune.jpg';
import ViziuneImage from '../../assets/viziune.jpg';
import { AboutItem, CardItem } from '../../components';

const AboutPage: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState('');
	return (
		<div className={styles.pageBackground}>
			<div className={`${styles.AboutPage} simple-content`}>
				<div className={styles.intro}>
					<div className="two-column">
						<p>
							<span className={styles.placeholder}></span>
							<b>HOME MEDICAL SERV SRL</b> a fost înființat în anul 2005, având ca obiect principal de activitate -
							oferirea de servicii medicale la domiciliu.
						</p>
						<p>
							În acești ani, am avut ocazia să contribuim la îmbunătățirea calității vieții mai multor pacienți, venind
							în întâmpinarea nevoilor lor, prin oferirea de servicii medicale particularizate.
						</p>
						<p>
							Observând nevoile complexe ale pacienților cu dificultăți de deplasare, în anul 2022 am înființat
							serviciul de ambulanță privat.
						</p>
					</div>
					<div className="two-column">
						<p>
							<img className="lazy-content" src={NoiImage} width="100%" alt="home medical serv braila"></img>
						</p>
					</div>
				</div>
				<AboutItem isOpen={selectedItem === 'MISIUNE'} title="MISIUNE" icon="icofont-dart" selected={setSelectedItem}>
					<div className="two-column">
						<p className="lazy-content-2">
							Misiunea noastră este prestarea unor servicii medicale de calitate, într-un mediu sigur și confortabil.
						</p>
						<p className="lazy-content-3">
							Avem ca obiectiv îmbunătățirea calității vieții pacienților prin prestarea de servicii personalizate.
						</p>
						<p className="lazy-content-4">
							Ingrijirea si transportul celor care beneficiază de serviciile noastre sunt întotdeauna centrate pe
							nevoile pacientului și au loc la cele mai înalte standarde de competență și profesionalism, așa încât cei
							care ni se adresează să atingă un nivel optim de sănătate fizică, emoțională și spirituală.
						</p>
					</div>
					<div className="two-column">
						<img className="lazy-content-1" src={MisiuneImage} width="100%" alt="home medical serv misiune"></img>
					</div>
				</AboutItem>
				<AboutItem
					isOpen={selectedItem === 'VIZIUNE'}
					title="VIZIUNE"
					icon="icofont-eye-alt"
					selected={setSelectedItem}>
					<div className="two-column">
						<p className="lazy-content-1">
							Echipa noastră își dorește să inspire încredere și siguranță, prin promovarea bunelor practici medicale
							chiar la domiciliul pacientului.{' '}
						</p>
						<p className="lazy-content-2">
							Deoarece suferința și durerea sunt momente dificile în viața pacientului, dorim să-i fim alături printr-o
							abordare caldă și empatică.
						</p>
						<p className="lazy-content-3">
							Lucrăm având conștiința că excelența presupune o continuă creștere în performanță, prin adaptarea
							permanentă la ultimele rezultate ale științelor medicale, prin atenția acordată prevenției și educării
							unui stil de viață sănătos.
						</p>
					</div>
					<div className="two-column">
						<img className="lazy-content-1" src={ViziuneImage} width="100%" alt="home medical serv viziune"></img>
					</div>
				</AboutItem>
				<AboutItem isOpen={selectedItem === 'VALORI'} title="VALORI" icon="icofont-diamond" selected={setSelectedItem}>
					<div className="two-column">
						<CardItem className="lazy-content-1" icon="icofont-holding-hands" title="Demnitate">
							<p>
								Fiecare om este darul lui Dumnezeu, de unde rezultă unicitatea și demnitate fiecărei persoane umane.
								Respectăm și acordăm timpul cuvenit tuturor, atât pacienților, cât și angajaților noștri, pentru a-i
								înțelege, a le cunoaște problemele și a-i putea ajuta.
							</p>
						</CardItem>
						<CardItem className="lazy-content-3" icon="icofont-heart-beat" title="Dragoste și compasiune">
							<p>
								Pentru noi dragostea înseamnă să tratăm cu multă atenție și compasiune pacienții, ca și cum ar face
								parte din familia noastră. Fiecare pacient este încurajat si ajutat să depășească mai ușor
								inconvenientele diagnosticului si consiliat in pe durata efectuarii actului terapeutic.
							</p>
						</CardItem>
						<CardItem className="lazy-content-5" icon="icofont-fire-alt" title="Credință">
							<p>
								<i>Dumnezeu</i> este Cel care luminează mintea medicului pentru ca întreaga experiență clinică și
								științifică să poată deveni utilă în diagnosticarea, tratarea și vindecarea bolnavului. Mai mult, El
								este Cel care poate vindeca, chiar și atunci când nu mai sunt speranțe de vindecare. Credința aduce pace
								în minte, împăcare în inimă și nădejde, atât de necesare în procesul vindecării.
							</p>
						</CardItem>
					</div>
					<div className="two-column">
						<CardItem className="lazy-content-2" icon="icofont-icu" title="Pacientul pe primul loc">
							<p>
								Prioritatea noastră este reprezentată de nevoile pacienților noștri și căutăm cele mai bune soluții
								pentru a le oferi servicii de calitate
							</p>
						</CardItem>
						<CardItem className="lazy-content-4" icon="icofont-chart-histogram" title="Îmbunătățirea continuă">
							<p>
								Suntem preocupați de instruirea constantă a personalului nostru și dezvoltarea fiecărui angajat,
								întrucât suntem conștienți că instruirea și aprecierea resurselor umane este cheia performanței. Suntem
								dedicați întru totul pacienților noștri, pe care îi tratăm cu profesionalism, responsabilitate și nu în
								ultimul rând cu plăcere. Principiile pe care se bazează echipa noastră sunt respectul, aprecierea,
								încrederea, toleranța și loialitatea.
							</p>
						</CardItem>
						<CardItem className="lazy-content-6" icon="icofont-badge" title="Standarde ridicate de calitate">
							<p>
								Acțiunile noastre se centrează în jurul asigurării și îmbunătățirii continue a calității serviciilor
								medicale pe care le oferim. Respectăm standardele internaționale de calitate și evaluăm calitatea
								serviciilor oferite pe toate planurile, începând de la gradul de satisfacție a pacienților și până la
								standardele profesionale ridicate ale actului medical.
							</p>
						</CardItem>
					</div>
				</AboutItem>
			</div>
		</div>
	);
};

export default AboutPage;
