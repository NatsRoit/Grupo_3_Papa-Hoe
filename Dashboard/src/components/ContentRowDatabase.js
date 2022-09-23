import React, { useEffect } from 'react';
import SmallCard from './SmallCard';

const FetchUsers = async () => {
    const res = await fetch (`http://localhost:3000/api/users/list`)
    const usersArray = res.json()
    console.log(FetchUsers());
    console.log(usersArray);
    
useEffect(() => {
    FetchUsers()
}, [])
}


let products = {
    color: "papahoePink",
    titulo: "Usuarios en Database",
    valor: 21,
    icono: "fas fa-user",
}

let users = {
    color: "papahoeBlueTec",
    titulo: "Productos en Database",
    valor: 79,
    icono: "fa-solid fa-box-open",
}
{/* <i class="fa-solid fa-screwdriver-wrench"></i> */}
let customs = {
    color: "papahoeGreen",
    titulo: "Custom Boards",
    valor: 49,
    icono: "fa-solid fa-hammer",
}

let cardProps = [products,users,customs];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((elem,index)=>{
                    return <SmallCard  {...elem}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;