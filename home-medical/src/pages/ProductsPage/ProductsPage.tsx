import React from "react";
import { UnderConstruction } from "../../components";
import styles from "./ProductsPage.module.scss";

const ProductsPage: React.FC = () => (
	<div className={`${styles.ProductsPage} simple-content`}>
		<UnderConstruction></UnderConstruction>
	</div>
);

export default ProductsPage;
