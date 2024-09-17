import { useState, useEffect } from "react"
import style from "./styles.module.css"

const Shelf = () => { 
 const [data, setData] = useState([]);
 

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setData(data));
    
 },[]);

 //console.log(data, "hola")

    return (
        <div >
           <h1 className={style.titleshelf}>Artesanías Elenartes Epox</h1> 
            <div className={style.containercard}>
            {data.map((element:any) => {  
                   
                return (

                    <div className={style.card}>
                        <img className={style.imgecard}  src={element.image} alt={element.title} />
                        <div className={style.titlecard}>{element.title}</div>
                        <div className={style.pricecard}>{element.price}</div>
                    </div>
                )
            } )}
            </div>
        </div>
    )
}
export default Shelf