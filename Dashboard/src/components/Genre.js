import React from 'react';

function Genre(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-papahoe bg-dark-papahoe  shadow">
                    <div className="card-body">
                        {props.genre}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;