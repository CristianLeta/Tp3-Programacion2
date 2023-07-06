class PartidoPolitico {
  nombre: string;
  candidatos: Candidato[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.candidatos = [];
  }

  agregarCandidato(nombreCandidato: string, cargo: string) {
    const candidato = new Candidato(nombreCandidato, cargo);
    this.candidatos.push(candidato);
  }

  mostrarCandidatos() {
    console.log(`Candidatos del partido ${this.nombre}:`);
    for (const candidato of this.candidatos) {
      console.log(`- ${candidato.nombre} (${candidato.cargo})`);
    }
  }
}

class Candidato {
  nombre: string;
  cargo: string;

  constructor(nombre: string, cargo: string) {
    this.nombre = nombre;
    this.cargo = cargo;
  }
}

class Votante {
  nombre: string;
  dni: string;
  voto:boolean;

  constructor(nombre: string, dni: string, voto:boolean) {
    this.nombre = nombre;
    this.dni = dni;
    this.voto=voto;
  }
}

const partido1 = new PartidoPolitico("Juntos Por El Cambio");
const partido2 = new PartidoPolitico("La Libertad Avanza");
const partido3 = new PartidoPolitico("Kirchnerismo");


partido1.agregarCandidato("Bulrrich Patricia", "Presidente");
partido1.agregarCandidato("Alfredo Cornejo", "Gobernador");
partido2.agregarCandidato("Javier Milei", "Presidente");
partido2.agregarCandidato("Luis Gonzalez", "Gobernador");

const votante1 = new Votante("Cristian Leta", "34995624",true);
const votante2 = new Votante("Fernanda Flores", "34653588",true);

partido1.mostrarCandidatos();
partido2.mostrarCandidatos();

console.log(`Información de los votantes:`);
console.log(`- Votante 1: Nombre: ${votante1.nombre}, DNI: ${votante1.dni}`);
console.log(`- Votante 2: Nombre: ${votante2.nombre}, DNI: ${votante2.dni}`);
