
import { Product } from "./Product";

export function ProductsGrid({products, loadCart}){

    //NO LO PONEMOS AQUI PORQUE CAMBIARIAN TOOODOS LOS SELECTORES DE TODOS LOS PRODUCTOS AL CAMBIAR UNO
    //solucion: ponerlo dentro del loop
    // Y ADEMAS: separar producto en otro componente
    //PORQUE ROMPERIA LAS REGLAS DE REACT HOOKS usar el useState NO AL INICIO DE TODO sino alli adentro
    //const [quantity, setQuantity] = useState(1);

    return(


                    <div className="products-grid">

                    {products.map((product) => {
                        
                        return (

                            <Product key={product.id} product={product} loadCart={loadCart}/>
                        )

                    })}

                </div>
        );
}