
/*
const natalia={
    name:"Natalia",
    age:20,
    CursosAprobados:[
        "Curso definitivo html y css",
        "Curso practivo html y css",
    ],
    //creando metodos
    aprobarCurso:function(){
        //Hacer que Natalia apruebe otro curso
        natalia.CursosAprobados.push("Curso de responsive design");
    }
    //otra sintaxis para crear metodos:
    aprobarCurso(nuevocursito){
        this.CursosAprobados.push(nuevocursito);
    }

};
*/


//creando nuesttro prototipo clase como molde de objetos

function Student(name, age, CursosAprobados){
    this.name=name;
    this.age=age;
    this.CursosAprobados=CursosAprobados;
    //una forma de crear metodos dentro de los prototipos en js
    /*
    this.aprobarCurso=furnction(nuevocursito){
        this.CursosAprobados.push(nuevocursito)
    }
    */
}
//otra forma de crear metodos de los prototipos en js por fuera de la funcion
Student.prototype.aprobarCurso=function(nuevocursito){
    this.CursosAprobados.push(nuevocursito)
}
//creando una instancia del prototipo
const juanita=new Student(
    "Juanita alejandra",
    15,
    ["Curso de introduccion a los videojuegos","curso de creacion de personajes"]
)