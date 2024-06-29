import React from "react";

const Collaborations = () => {
	return (
		<section className="collaborations">
			<div className="container">
				<h2 className="collaborations-title">Collaborations</h2>
				<table>
					<thead align="center">
						<tr>
							<th>Brand</th>
							<th>No. of products</th>
							<th>Collections</th>
							<th>Years of supply</th>
						</tr>
					</thead>
					<tbody align="center">
						<tr>
							<td>David Yurman</td>
							<td>79</td>
							<td>8</td>
							<td>5</td>
						</tr>
						<tr>
							<td>Links of London</td>
							<td>40</td>
							<td>3</td>
							<td>6</td>
						</tr>
						<tr>
							<td>Bvulgari</td>
							<td>66</td>
							<td>5</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Cartier</td>
							<td>108</td>
							<td>12</td>
							<td>8</td>
						</tr>
						<tr>
							<td>Tiffany &amp; Co.</td>
							<td>29</td>
							<td>4</td>
							<td>10</td>
						</tr>
						<tr>
							<td>Swarovski</td>
							<td>44</td>
							<td>7</td>
							<td>3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Collaborations;
