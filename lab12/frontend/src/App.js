import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      libros:[],
      pos:null,
      titulo:'Nuevo',
      id:0,
      libro:'',
      nombre:'',
      fechaIni:'',
      fechaFin:''
    })

    this.cambiolibro = this.cambiolibro.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioFechaIni = this.cambioFechaIni.bind(this);
    this.cambioFechaFin = this.cambioFechaFin.bind(this);
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/libro')
    .then(res=> {
      this.setState({libros:res.data})
    })
  }


  cambiolibro(e){
    this.setState({
      libro : e.target.value
    })
  }
  cambioNombre(e){
    this.setState({
      nombre : e.target.value
    })
  }
  cambioFechaIni(e){
    this.setState({
      fechaIni : e.target.value
    })
  }
  cambioFechaFin(e){
    this.setState({
      fechaFin : e.target.value
    })
  }


  

  mostrar(cod,index){
    axios.get('http://127.0.0.1:8000/libro/'+cod)
    .then(res => {
      this.setState({
        pos: index,
        titulo: 'Editar',
        id: res.data.id,
        libro :res.data.Libro,
        nombre: res.data.nombre,
        fechaIni: moment(res.data.fechaInicio, "YYYY-MM-DD HH:mm Z").format('YYYY-MM-DDThh:mm'),
        fechaFin :  moment(res.data.fechaFin, "YYYY-MM-DD HH:mm Z").format('YYYY-MM-DDThh:mm')
      })
    })
  }


  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    const datos = {
      Libro: this.state.libro,
      nombre: this.state.nombre,
      fechaInicio: this.state.fechaIni,
      fechaFin: this.state.fechaFin
    }
    if(cod>0){
      //edición de un registro
      axios.put('http://127.0.0.1:8000/libro/'+cod,datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.libros[indx] = res.data;
        var temp = this.state.libros;
        this.setState({
          pos:null,
          titulo:'Nuevo',
          id:0,
          libro:'',
          nombre:'',
          fechaIni:'',
          fechaFin:'',
          libros: temp
        });
      }).catch((error) =>{
        console.log(error.toString());
      });
    }else{
      //nuevo registro
      axios.post('http://127.0.0.1:8000/libro',datos)
      .then(res => {
        this.state.libros.push(res.data);
        var temp = this.state.libros;
        this.setState({
          id:0,
          libro:'',
          nombre:'',
          fechaIni:'',
          fechaFin:'',
          libros: temp
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }
  }
  

  eliminar(cod){
    let rpta = window.confirm("Desea Eliminar?");
    if(rpta){
      axios.delete('http://127.0.0.1:8000/libro/'+cod)
      .then(res =>{
        var temp = this.state.libros.filter((libros)=>libros.id !== cod);
        this.setState({
          libros: temp
        })
      })
    }
  }




  render() {
    
    return (<div>
      <Container>
          <Table striped bordered hover>
            
          <thead>
            <tr>
              <th>id</th>
              <th>Libro</th>
              <th>Usuario</th>
              <th>Fecha de inicio</th>
              <th>Fecha de Fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.libros.map((librero,index) =>{
              return (
                <tr key={librero.id}>
                  <td>{librero.id}</td>
                  <td>{librero.Libro}</td>
                  <td>{librero.nombre}</td>
                  <td>{moment(librero.fechaInicio, "YYYY-MM-DD HH:mm Z").format('YYYY-MM-DD hh:mm')}</td>
                  <td>{moment(librero.fechaFin, "YYYY-MM-DD HH:mm Z").format('YYYY-MM-DD hh:mm')}</td>
                  <td>
                    <Button variant="success" onClick={()=>this.mostrar(librero.id,index)} >Editar {index}</Button>
                    <Button variant="danger"onClick={()=>this.eliminar(librero.id,index)} >eliminar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <hr />
        
        <h1> {this.state.titulo} </h1>
        <Form onSubmit={this.guardar}>
        <input type="hidden" value={this.state.id} />
            <Form.Group className="mb-3">
              <Form.Label>Nombre del libro</Form.Label>
              <Form.Control type="text" value={this.state.libro} onChange={this.cambiolibro} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Usuario</Form.Label>
              <Form.Control type="text" value={this.state.nombre} onChange={this.cambioNombre}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Fecha Inicio</Form.Label>
              <Form.Control type="datetime-local" value={this.state.fechaIni}  onChange={this.cambioFechaIni}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Fin</Form.Label>
              <Form.Control type="datetime-local" value={this.state.fechaFin}  onChange={this.cambioFechaFin}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
        </Form>
      </Container>
    </div>)
  }
}
export default App;

