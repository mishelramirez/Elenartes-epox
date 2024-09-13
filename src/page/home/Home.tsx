import { useState, useEffect } from "react"
import styles from "./home.module.css"

const Home = () => { 
 const [data, setData] = useState([]);
 

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setData(data));
    
 },[]);

 //console.log(data, "hola")

    return (
        <div>
            Home hola mundo
            <div>
            {data.map((element:any) => {  
                   
                return (

                    <div className={styles.card}>
                        <div>{element.title}</div>
                        <img className={styles.img}  src={element.image} alt={element.title} />
                        <div>{element.price}</div>
                    </div>
                )
            } )}
            </div>
        </div>
    )
}

export default Home