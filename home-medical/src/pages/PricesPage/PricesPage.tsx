import React from 'react';
import styles from './PricesPage.module.scss';

const PricesPage: React.FC = () => (
	<div className={`${styles.PricesPage} simple-content`}>
		<div className="two-column">
			<h3>PREȚURI</h3>
			<ol>
				<li>Prețul unui transport în orașul Brăila este de 250 lei (tur) </li>
				<li>
					Tur-retur în orasul Brăila este de 450 lei/ transport, la care după caz se adaugă 50 lei/30 minute staționare
					a ambulanței.
				</li>
				<li>
					Prețul unui transport în judetul Brăila, se calculează in funcție de disțanta și particularitatea fiecărui
					caz.
				</li>
				<li>Transportul pacientului în afara judetului Brăila este de 4 lei/km (tur-retur)</li>
				<li>Tariful de staționare a ambulanței este de 50 lei/30 min</li>
			</ol>
		</div>
		<div className="two-column">
			<h3>IMPORTANT!</h3>
			<p>
				* Orice solicitare necesită o programare cu 24 ore în avans, iar pentru solicitările de transport în aceeași zi,
				se percepe o taxă de urgență 100 lei.
			</p>
			<p>* Luni - Vineri: 08:00 - 16:00</p>
		</div>
	</div>
);

export default PricesPage;
