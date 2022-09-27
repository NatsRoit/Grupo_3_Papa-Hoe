import React from 'react';

function Category(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-papahoe bg-dark-papahoe  shadow">
                    <div className="card-body">
                        <a target="_blank" href={'http://localhost:3001/product/category/'+ props.id}>
                            {props.name}
                            </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;