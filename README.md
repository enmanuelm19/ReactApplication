# React-app

Esta aplicación es un reproductor de videos de **YouTube**.
Utiliza la API de YouTube para hacer busquedas y consultas de los videos.

#### Herramientas
* YouTube API
* Bootstrap 4 (CDN)


#### Notas de detalles aprendidos

* Function components vs Class components

Para cuendo el componente no maneja estatos (state), se puede realizar componente tipo función debido a que su unica responsabilidad es
renderizar HTML.

```Javascript
// Function component
const ComponentName = (props) => {
  return (
    <h3> Some component </h3>
  );
}

// Class component
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { key: 'value'} //initial state
  }

  render(){
    return (
      <h3>{this.state.key}</h3>
    );
  }
}
```

* ES6 syntax vs ES5 syntax

Comparando un poco sintaxis de **ES6** contra **ES5**
```Javascript
//Functions
// ES5
var x = function (params) {}
// ES6
let x = (params) => {}

//Asign values to JS objects (same name value and same name key)
//ES5
{ something: something}
//ES6
{ something }

// String interpolation
// ES5
var y = 'thing'
var x = 'some'+ y
//ES6
var y = 'thing'
var x = `some${y}`
```

* React
Para hacer cambios en un estado(state) presente en un componente padre desde un componente hijo(o descendiente)
 es necesario pasar o el estado o la función por parametros, en caso de componentes clase se realiza en el constructor y en los componentes funciones se para como parametros:

 ```Javascript
 //Parent component
 ...
 someFunction(param){
   this.setState(key: param);
 }
 ...
 <ChildComponent onEventChange={someFunction} />

 //ChildComponent
 someOtherFunction(param){
   this.props.onEventChange(param);
 }
 ...
 <input onChange={event => someOtherFunction(event.target.value)}
 ```
