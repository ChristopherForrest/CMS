
import React from 'react'
import { Table, Button} from 'reactstrap';




export default class ProductShowcase extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data:undefined,	
		}
	}

	async componentDidMount(){
		
	}

	render() {


		return (
			<div>
				{this.props.location.state ? (

			<div className="productShowcaseOuter">
				<div className="productShowcaseInner">
					<div>
						<div className="sandhurstLogo"><img className="sandhurstLogo" src="Sandhurst-Fine-Foods---Website-Form-(Header)---v1-3.png" alt="Sandhurst Logo"></img></div>
					</div>
					<div className="productInfo">
						<div>
							<strong>PRODUCT SPECIFICATION:</strong> {this.props.location.state.something['Product Name']}
						</div>
						<div>
							<strong>PRODUCT CODE:</strong> {this.props.location.state.something['Product Code']}
						</div>
						<div>
							<strong>COUNTRY OF ORIGIN:</strong> {this.props.location.state.something['Country']}
						</div>
						<div>
							<strong>INGREDIENTS:</strong> {this.props.location.state.something['Ingredients ( by descending weight ) Characterising ingredient/s to include percentage.']}
						</div>
						<div>
							<strong>PERCENTAGE OF AUSTRALIAN INGREDIENTS</strong> {this.props.location.state.something['Percentage of Australian Ingredients']}
						</div>
						<div>
							<strong>WEIGHT DECLARATION:</strong> Net Weight: {this.props.location.state.something['Pack Size ( Net Weight ) ']} | Drained Weight : {this.props.location.state.something['Drained Weight ( Grams )']}
						</div>
						<div>
							<strong>PACKAGING:</strong> {this.props.location.state.something['Pack Size ( Net Weight ) ']} x {this.props.location.state.something['Carton Quantity']}
						</div>
						<div>
							<strong>SHELF LIFE:</strong> {this.props.location.state.something['Shelf Life from date of manufacture (days)'] +  " days."} 
						</div>
						<div>
							<strong>SHELF LIFE AFTER OPENING:</strong> {this.props.location.state.something['Recommended storage conditions and shelf life once opened']} 
						</div>
						<div>
							<strong>RECOMMENDED STORAGE CONDITIONS:</strong> {this.props.location.state.something['Recommended Storage Conditions']} 
						</div>
						<div>
							<strong>MANDATORY WARNING &amp; ADVISORY STATEMENT:</strong> {this.props.location.state.something['Statement']} 
						</div>
						<hr></hr> 
						<div>
							<strong>NUTRITIONAL INFORMATION:</strong> Servings per package: {this.props.location.state.something['Number of servings per package']} ; Serving size: {this.props.location.state.something['Serving Size']}
						</div>
						<br></br>
						<Table bordered>
							<tbody>
								<tr>
									<th></th>
									<th>Average per serve</th>
							     	<th>Average qty per 100g</th>
								</tr>
								<tr>
									<td>Energy</td>
									<td>{this.props.location.state.something['Energy (kJ) ( Average Quantity Per Serve )']}kJ</td>
									<td>{this.props.location.state.something['Energy (kJ) ( Average Quantity Per 100g / mL)']}kJ</td>
								</tr>
								<tr>
									<td>Protein</td>
									<td>{this.props.location.state.something['Protein, total (g) ( Average Quantity Per Serve )']}g</td>
									<td>{this.props.location.state.something['Protein, total (g) ( Average Quantity Per 100g / mL )']}g</td>
								</tr>
								<tr>
									<td>Fat, total</td>
									<td>{this.props.location.state.something['Fat, total (g) ( Average Quantity Per Serve ) ']}g</td>
									<td>{this.props.location.state.something['Fat, total (g) (Average Quantity Per 100g / mL)']}g</td>
								</tr>
								<tr>
									<td>Saturated</td>
									<td>{this.props.location.state.something['Saturated Fat (g) ( Average Quantity Per Serve )']}g</td>
									<td>{this.props.location.state.something['Saturated Fat (g) ( Average Quantity Per 100g / mL )']}g</td>
								</tr>
								<tr>
									<td>Carbohydrate</td>
									<td>{this.props.location.state.something['Carbohydrate (g) ( Average Quantity Per Serve )']}g</td>
									<td>{this.props.location.state.something['Carbohydrate (g) (  Average Quantity Per 100g / mL ) ']}g</td>
								</tr>
								<tr>
									<td>Sugars</td>
									<td>{this.props.location.state.something['Sugars (g) ( Average Quantity Per Serve )']}g</td>
									<td>{this.props.location.state.something['Sugars (g) ( Average Quantity Per 100g / mL )']}g</td>
								</tr>
								<tr>
									<td>Sodium</td>
									<td>{this.props.location.state.something['Sodium (g) ( Average Quantity Per Serve )']}g</td>
									<td>{this.props.location.state.something['Sodium (g) ( Average Quantity Per 100g / mL )']}g</td>
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
									<td>{this.props.location.state.something['Flavour & Aroma']}</td>
								</tr>
								<tr>
									<td>b. Colour</td>
									<td>{this.props.location.state.something['Appearance & Colour']}</td>
								</tr>
								<tr>
									<td>b. Shape</td>
									<td>{this.props.location.state.something['Shape']}</td>
								</tr>
                                <tr><td><br></br></td></tr>
								<tr>
									<td><strong>2. CHEMICAL</strong></td>
									<td></td>
								</tr>
								<tr>
									<td>a. Sulphur</td>
									<td>{this.props.location.state.something['Sulphites (ppm) [ If sulphites present please specify amount in ppm ]']}</td>
								</tr>
								{/* <tr>
									<td>b. Moisture</td>
									<td>{this.props.location.state.something['']}</td>
								</tr> */}
								<tr>
									<td>c. Salt</td>
									<td>{this.props.location.state.something['Salt ( % )']}</td>
								</tr>
								<tr>
									<td>d. Acid</td>
									<td>{this.props.location.state.something['Acid ( % )']}</td>
								</tr>
								<tr>
									<td>e. pH </td>
									<td>{this.props.location.state.something['pH']}</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>3. MICROBIOLOGICAL</strong></td>
									<td></td>
								</tr>
								<tr>
									<td>a. E.Coli</td>
									<td>{this.props.location.state.something['Escherichia Coli ( cfu/g )']}</td>
								</tr>
								<tr>
									<td>b. Yeast &#38; Mould</td>
									<td>{this.props.location.state.something['Yeasts & Moulds ( cfu/g )']}</td>
								</tr>
								<tr>
									<td>c. Salmonella </td>
									<td>{this.props.location.state.something['Salmonella ( cfu/g )']}</td>
								</tr>
								<tr>
									<td>d. B. Listeria </td>
									<td>{this.props.location.state.something['Listeria Monocytogenes ( cfu/g )']}</td>
								</tr>
								<tr>
									<td>e. B. Cerius </td>
									<td>{this.props.location.state.something['Bacillus Cereus ( cfu/g )']}</td>
								</tr>


								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>4. ALLERGENS</strong> </td>
									<td>{
										
										this.props.location.state.something['Allergens Present?']
										
										}</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>5. HALAL</strong> </td>
									<td>{this.props.location.state.something['Suitable for Halal?']}</td>
								</tr>
								<tr><td><br></br></td></tr>
								<tr>
									<td><strong>6. GMO Free?</strong> </td>
									<td>{this.props.location.state.something['GMO Free? ( Genetically modified organism )']}</td>
								</tr>
							</tbody>
						</Table>
						<div className="padder"></div>


					</div>
				</div>
			</div>
				)
				:
				(
					<div className="badRequestForm">
					<img src="charmander-loading-gif.gif" alt="Loading..." />
						<h1>ERROR</h1>
						<p>You have tried to make an invalid request!</p>
						<Button color="danger" className="currencyButton" onClick={() => {
							this.props.history.push({
								pathname:"/",
							})     
						}}>Dashboard</Button>
					</div>
				)
			}

			</div>	
			
		
		)
	}
}