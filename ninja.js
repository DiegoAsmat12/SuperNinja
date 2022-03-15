class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.velocidad = 3;
        this.fuerza = 3;
        this.salud = 100;
    }

    sayName(){
        console.log(this.nombre);
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre;
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}\nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud}`);
    }
    
    drinkSake(){
        this.salud+=10;
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre)
        this.velocidad=10;
        this.fuerza=10;
        this.salud=200;
        this.sabiduria = 10;
    }


    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();

superSensei.showStats();