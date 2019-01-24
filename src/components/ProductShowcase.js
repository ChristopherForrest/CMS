
import React from 'react'
import { Table} from 'reactstrap';




export default class ProductShowcase extends React.Component {

	constructor() {
		super()
		this.state = {
			data:undefined
		}
	}

	async componentDidMount(){

	}

	render() {
		return (
			<div className="productShowcaseOuter">
				<div className="productShowcaseInner">
					<div>
						<div className="sandhurstLogo"><img className="sandhurstLogo" src="Sandhurst-Fine-Foods---Website-Form-(Header)---v1-2.png" alt="Sandhurst Logo"></img></div>
						{/* <div className="contactInfo">
							<div><strong>Sandhurst Fine Foods</strong></div>
							<div>4-6 Kiama Street, Miranda, 2228, NSW, Australia</div>
							<div>Email: <u>info@sandhurstfinefoods.come.au</u></div>
							<div>Website: <u>www.sandhurstfinefoods.com.au</u></div>
							<div>Tel: +61 2 9522 4522; Fax: +61 2 9522 4139</div>
						</div> */}
					</div>
					<div className="productInfo">
						<div>
							<strong>PRODUCT SPECIFICATION:</strong> DRIED TOMATOES
						</div>
						<div>
							<strong>PRODUCT CODE:</strong> DRYTOM10
						</div>
						<div>
							<strong>GENERAL DESCRIPTION:</strong> Sun-dried tomato halves, sulphur treated
						</div>
						<div>
							<strong>COUNTRY OF ORIGIN:</strong> Turkey
						</div>
						<div>
							<strong>INGREDIENTS:</strong> Tomato, preservative (sodium metabisulphite)
						</div>
						<div>
							<strong>WEIGHT DECLARATION:</strong> 2 x 5kg
						</div>
						<div>
							<strong>PACKAGING:</strong> Vacuum pack
						</div>
						<div>
							<strong>SHELF LIFE:</strong>18 months from the production date at below storage conditions.
						</div>
						<div>
							<strong>RECOMMENDED STORAGE CONDITIONS:</strong> Recommended to keep under 4°C for colour stability.
						</div>
						<div>
							<strong>MANDATORY WARNING &amp; ADVISORY STATEMENT:</strong> Contains sulphites.
						</div>
						<hr></hr> 
						<div>
							<strong>NUTRITIONAL INFORMATION:</strong> Servings per package: 10; Serving size: 100g
						</div>
						<br></br>
						<Table bordered>
							<tbody>
								<tr>
									<th></th>
									<th>Average 50g qty per serve</th>
									<th>Average qty per 100g</th>
								</tr>
								<tr>
									<td>Energy</td>
									<td>790kJ</td>
									<td>790kJ</td>
								</tr>
								<tr>
									<td>Protein</td>
									<td>11.2g</td>
									<td>11.2g</td>
								</tr>
								<tr>
									<td>Fat, total</td>
									<td>1g</td>
									<td>1g</td>
								</tr>
								<tr>
									<td>Saturated</td>
									<td>0.3g</td>
									<td>0.3g</td>
								</tr>
								<tr>
									<td>Carbohydrate</td>
									<td>28.1g</td>
									<td>28.1g</td>
								</tr>
								<tr>
									<td>Sugars</td>
									<td>23g</td>
									<td>23g</td>
								</tr>
								<tr>
									<td>Sodium</td>
									<td>1330mg</td>
									<td>1330mg</td>
								</tr>
							</tbody>
						</Table>
						<div>
							*Information is based on average values
						</div>
						<hr></hr>

						<Table borderless className="otherTable">
							<tbody>
								<tr>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<td><strong>1. PHYSICAL</strong></td>
									<td></td>
								</tr>
								<tr>
									<td>a. Taste</td>
									<td>From brick red to brown colour</td>
								</tr>
								<tr>
									<td>b. Colour</td>
									<td> Typical salted sun-dried tomato flavor. No off flavors</td>
								</tr>
								<tr>
									<td>b. Shape</td>
									<td> - </td>
								</tr>
                                <tr><td><br></br></td></tr>
								<tr>
									<td><strong>2. CHEMICAL</strong></td>
									<td></td>
								</tr>
								<tr>
									<td>a. Sulphur</td>
									<td>Minimum 3000ppm (Monier Williams method)</td>
								</tr>
								<tr>
									<td>b. Moisture</td>
									<td>Maximum 25%</td>
								</tr>
								<tr>
									<td>c. Salt</td>
									<td> - </td>
								</tr>
								<tr>
									<td>d. Acid</td>
									<td> - </td>
								</tr>
								<tr>
									<td>e. </td>
									<td> - </td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>3. MICROBIOLOGICAL</strong></td>
									<td></td>
								</tr>
								<tr>
									<td>a. Total Count</td>
									<td>&lt;1,000,000 cfu/g</td>
								</tr>
								<tr>
									<td>b. Coliform</td>
									<td>&lt;1000 cfu/g</td>
								</tr>
								<tr>
									<td>c. E.Coli</td>
									<td>&lt;10 cfu/g</td>
								</tr>
								<tr>
									<td>d. Yeast</td>
									<td>&lt;10000 cfu/g</td>
								</tr>
								<tr>
									<td>e. Mould</td>
									<td>&lt;10000 cfu/g</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>4. ALLERGENS</strong> </td>
									<td>Contains sulphites.</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>5. HALAL</strong> </td>
									<td>Yes</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>6. GMO</strong> </td>
									<td>GMO free</td>
								</tr>
							</tbody>
						</Table>
						<div className="padder"></div>


					</div>
				</div>
			</div>

		)
	}
}