import React from 'react';
import { UnderConstruction } from '../../components';
import styles from './AboutPage.module.scss';
import BackgroundImage from '../../assets/us.jpg';

const AboutPage: React.FC = () => (
	<div className={styles.pageBackground}>
		<img className={styles.pageBackgroundImage} src={BackgroundImage} alt="connect contact"></img>
		<div className={`${styles.AboutPage} simple-content frost-background`}>
			<p>
				<b>HOME MEDICAL SERV SRL </b>a fost infiintat in anul 2005 , avand ca obiect principal de activitate oferirea de
				servicii medicale la domiciliu. In acesti ani am avut ocazia sa contribuim la inbunatatirea calitatii vietii mai
				multor pacienti, venind in intampinarea nevoilor lor prin oferirea de servicii medicale particularizate.
				Observand nevoile complexe ale pacientilor cu dificultati de deplasare, in anul 2022 am infiintat serviciul de
				ambulanta privat.
			</p>
			<h1>
				<i className="icofont-dart"></i> MISIUNE
			</h1>
			<p>Misiunea noastră este prestarea unor servicii medicale de calitate, într-un mediu sigur și confortabil.</p>
			<p>
				Avem ca obiectiv îmbunătățirea calității vieții pacienților prin prestarea de servicii personalizate. Ingrijirea
				si transportul celor care beneficiază de serviciile noastre sunt întotdeauna centrate pe nevoile pacientului și
				au loc la cele mai înalte standarde de competență și profesionalism, așa încât cei care ni se adresează să
				atingă un nivel optim de sănătate fizică, emoțională și spirituală.
			</p>
			<h1>
				<i className="icofont-light-bulb"></i> VIZIUNE
			</h1>
			<p>
				Echipa noastră își dorește să inspire încredere și siguranță, prin promovarea bunelor practici medicale chiar la
				domiciliul pacientului. Deoarece suferința și durerea sunt momente dificile în viața pacientului, dorim să-i fim
				alături printr-o abordare caldă și empatică.
			</p>
			<p>
				Lucrăm având conștiința că excelența presupune o continuă creștere în performanță, prin adaptarea permanentă la
				ultimele rezultate ale științelor medicale, prin atenția acordată prevenției și educării unui stil de viață
				sănătos.
			</p>
			<h1>
				<i className="icofont-shield-alt"></i> VALORI
			</h1>
			<h2>
				<i className="icofont-holding-hands"></i> Demnitate
			</h2>
			<p>
				Fiecare om este darul lui Dumnezeu, de unde rezultă unicitatea și demnitate fiecărei persoane umane. Respectăm
				și acordăm timpul cuvenit tuturor, atât pacienților, cât și angajaților noștri, pentru a-i înțelege, a le
				cunoaște problemele și a-i putea ajuta.
			</p>
			<h2>
				<i className="icofont-heart-beat"></i> Dragoste și compasiune
			</h2>
			<p>
				Pentru noi dragostea înseamnă să tratăm cu multă atenție și compasiune pacienții, ca și cum ar face parte din
				familia noastră. Fiecare pacient este încurajat si ajutat să depășească mai ușor inconvenientele diagnosticului
				si consiliat in pe durata efectuarii actului terapeutic.
			</p>
			<h2>
				<i className="icofont-fire-alt"></i> Credință
			</h2>
			<p>
				<i>Dumnezeu</i> este Cel care luminează mintea medicului pentru ca întreaga experiență clinică și științifică să
				poată deveni utilă în diagnosticarea, tratarea și vindecarea bolnavului. Mai mult, El este Cel care poate
				vindeca, chiar și atunci când nu mai sunt speranțe de vindecare. Credința aduce pace în minte, împăcare în inimă
				și nădejde, atât de necesare în procesul vindecării.
			</p>
			<h2>
				<i className="icofont-icu"></i> Pacientul pe primul loc
			</h2>
			<p>
				Prioritatea noastră este reprezentată de nevoile pacienților noștri și căutăm cele mai bune soluții pentru a le
				oferi servicii de calitate
			</p>
			<h2>
				<i className="icofont-chart-histogram"></i> Îmbunătățirea continuă
			</h2>
			<p>
				Suntem preocupați de instruirea constantă a personalului nostru și dezvoltarea fiecărui angajat, întrucât suntem
				conștienți că instruirea și aprecierea resurselor umane este cheia performanței. Suntem dedicați întru totul
				pacienților noștri, pe care îi tratăm cu profesionalism, responsabilitate și nu în ultimul rând cu plăcere.
				Principiile pe care se bazează echipa noastră sunt respectul, aprecierea, încrederea, toleranța și loialitatea.
			</p>
			<h2>
				<i className="icofont-badge"></i> Standarde ridicate de calitate
			</h2>
			<p>
				Acțiunile noastre se centrează în jurul asigurării și îmbunătățirii continue a calității serviciilor medicale pe
				care le oferim. Respectăm standardele internaționale de calitate și evaluăm calitatea serviciilor oferite pe
				toate planurile, începând de la gradul de satisfacție a pacienților și până la standardele profesionale ridicate
				ale actului medical.
			</p>
		</div>
	</div>
);

export default AboutPage;
