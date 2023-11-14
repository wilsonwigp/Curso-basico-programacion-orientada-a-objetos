
//objetos literales antigua forma no escalable
/*
const juan1={
    name:"Juandc",
    username:"juandc",
    points:100,
    socialMedia:{
        twiter:"fjuandc",
        instagram:"fjuandc",
        facebook:undefined,
    },
    approvedCourses:[
        "Curso de html y css",
        "curso practico html y css",
    ],
    learningpaths:[
{
    name:"escuela de desarrollo web",
    courses:["Curso de html y css",
    "curso practico html y css",
    "curso responsive design"]
    ,
},
{
    name:"escuela de videojuegos",
    courses:["Curso de introduccion a la produccion de videojuegos",
    "curso de unreal engine",
    "curso unity"]
    ,
},
    ]
}

const miguelito1={
    name:"Miguelito",
    username:"miguelitofeliz",
    points:1000,
    socialMedia:{
        twiter:"miguelitosf",
        instagram:"migel",
        facebook:undefined,
    },
    approvedCourses:[
        "Curso de databusines",
        "curso bi",
    ],
    learningpaths:[
{
    name:"escuela de desarrollo web",
    courses:["Curso de html y css",
    "curso practico html y css",
    "curso responsive design"]
    ,
},
{
    name:"escuela de datascience",
    courses:["Curso de databusiness",
    "curso dataviz",
    "curso tableau"]
    ,
},
    ]
}
*/
class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approvedCourses=[],
        learningpaths=[],

    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses=approvedCourses;
        this.learningpaths=learningpaths;
    }
}

class LearningPath{ 
    constructor({
        name,courses=[]
    }){
        this.name=name;
        this.courses=courses;
    }

}

class Course{
    constructor({
        name,classes=[]
    }){
        this._name=name;
        this.classes=classes;
    }
    get name(){
        return this._name
    }
    changeName(Nuevonombrecito){
        this._name=Nuevonombrecito
    }
    set name(Nuevonombrecito){
        if(Nuevonombrecito==="curso malito de prog basica"){
            console.error("wey ... no")
        }
        else{
            this._name=Nuevonombrecito;
        }

    }
}



const cursoProgrBasica=new Course({
    name:"Curso gratis de programacion basica",
})
const cursodefinitohtml=new Course({
    name:"Curso definitio de html",
}
)
const cursodenegocios=new Course({
    name:"Curso de negocios",
}
)
const cursodefinanzas=new Course({
    name:"Curso de finanzas",
}
)



const escuelaWeb=new LearningPath({
    name:"escuela de desarrrollo web",
    courses:[cursodefinitohtml,cursoProgrBasica],
});

const escueladenengocios=new LearningPath({
    name:"escuela de negocios",
    courses:[cursodenegocios,cursodefinanzas],
});


const juan2= new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juandc@gamil.com",
    twitter:"fjuandc",
    learningPaths:[
        escuelaWeb,
        escueladenengocios
    ]
})

const miguelito2=new Student({
    name:"migueliotDC",
    username:"miguendc",
    email:"miguelitoc@gamil.com",
    twitter:"fmiguec",
    learningPaths:[
        escuelaWeb,
        escueladenengocios
    ]
})