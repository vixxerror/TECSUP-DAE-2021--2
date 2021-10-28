import { Component } from "react"

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width:'30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    img: {
        width:'100%'
    }
}

class Producto extends Component {
    render() {
        const { producto} = this.props
        return (
           <div style={styles.producto}>
               <img style={styles.img} alt={producto.nombre} src={producto.imagen}/>
               <h3>{producto.nombre}</h3>
               <h2>S/. {producto.precio}</h2>
           </div>
        )
    }
}

export default Producto
