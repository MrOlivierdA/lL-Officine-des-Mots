import { Navbar } from "../Components/Navbar/Navbar";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { Products } from "../Components/Products/Products";

export function ProductsDetails() {
	return (
		<>
			<Navbar />
			<Products />
			<Newsletter />
			<Footer />
		</>
	);
}
