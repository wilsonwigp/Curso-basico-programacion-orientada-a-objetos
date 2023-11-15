class Coment{
    constructor({
        content,
        studentName,
        studentRole="estudiante",
    }){
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.likes=0;
    }

    publicar(){
        console.log(this.studentName+" ("+this.studentRole+")");
        console.log(this.likes+ " likes");
        console.log(this.content);
    }
}
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
    publicarComentario(comentcontent){
        const coment=new coment({
            content:comentcontent,
            studentName:this.name,

        })
        coment.publicar();
    }
}

class Freestudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, "+this.name+ ", solo puedes tomar cursos gratuitos.")
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.lang!=="english"){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, "+this.name+ ", no puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacehrStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(comentcontent){
        const coment=new coment({
            content:comentcontent,
            studentName:this.name,
            studentRole:"proffesor"

        })
        coment.publicar();
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
        name,classes=[],
        isFree=false,
        lang="spanish",
    }){
        this._name=name;
        this.classes=classes;
        this.isFree=isFree;
        this.lang=lang;
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

function videoPlay(id){
    const urlsecreta="https://platziultrasecreto.com"+id;
    console.log("se esta reproduciendo desde la url"+urlsecreta)

}
function videoStoop(id){
    const urlsecreta="https://platziultrasecreto.com"+id;
    console.log("se pausó desde "+urlsecreta)
}
//los export nos permite ejecutar codigo desde otro lado
export class Platziclass{
    constructor({
        name,videoID,
    }){
        this.name=name;
        this.videoID=videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStoop(this.videoID);
    }

}

 
const cursoProgrBasica=new Course({
    name:"Curso gratis de programacion basica",
    isFree:true,
})
const cursodefinitohtml=new Course({
    name:"Curso definitio de html",
    lang:"english"
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
const juan2= new Freestudent({
    name:"JuanDC",
    username:"juandc",
    email:"juandc@gamil.com",
    twitter:"fjuandc",
    learningPaths:[
        escuelaWeb,
        escueladenengocios
    ]
})
const miguelito2=new BasicStudent({
    name:"migueliotDC",
    username:"miguendc",
    email:"miguelitoc@gamil.com",
    twitter:"fmiguec",
    learningPaths:[
        escuelaWeb,
        escueladenengocios
    ]
})

const Freddy= new TeacehrStudent({
    name:"Freddy Vega",
    username:"fredier",
    email:"fredi@gamil.com",
    twitter:"fredivega",
})