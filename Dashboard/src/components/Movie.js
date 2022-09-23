import React from 'react';

import MovieList from './MovieList';

function Movie(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<div className='container-fluid'>
					<h1 className="h3 mb-2 text-gray-800">Listado completo de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							{/* <div className="card-body"> */}
								<div className="table-responsive">
									<table className="table" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Categoría</th>
												<th>Subcategoría</th>
												<th>Precio</th>
												<th>Stock</th>
												<th>Marca</th>
												<th>Publicado</th>
											</tr>
										</thead>
										{/* <tfoot>
											<tr>
												<th>Totales: Id</th>
												<th>Totales: Titulo</th>
												<th>Totales: Calificación</th>
												<th>Totales: Premios</th>
												<th>Totales: Duración</th>
												<th>Totales: Duración</th>
												<th>Totales: Duración</th>
											</tr>
										</tfoot> */}
										<tbody>
											<tr>
												<td>01</td>
												<td>Pipona Royal</td>
												<td>Surfboards</td>
												<td>Shortboard</td>
												<td>15.000</td>
												<td>12</td>
												<td>Papa Hoe</td>
												<td>x</td>
											</tr>
											<tr>
												<td>02</td>
												<td>Gorra Papa Hoe</td>
												<td>Complementos</td>
												<td>Apparel</td>
												<td>18.000</td>
												<td>140</td>
												<td>Papa Hoe</td>
												<td>✓</td>
											</tr>
										</tbody>
									</table>
								</div>
							{/* </div> */}
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;