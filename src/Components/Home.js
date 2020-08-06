import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            nombre: this.props.nombre,
            nombre2: this.props.nombre2,
            nombre3: "Carmen",
        };

    }
// Tengo que revisar la grabación de la clase como desde los 50 minutos
    render() {
        return {
            <div>
                <h1>Hola {this.state.nombre}!</h1>
                <h2>Hola {this.state.nombre2}!</h2>
                <h3>Hola {this.state.nombre3}!</h3>
            </div>
        };
    }

    props: {
        nombre = "Esteban",
        nombre2 = "María",
    }
}