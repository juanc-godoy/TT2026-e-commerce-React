import {db} from "../firebase/config.js"
import { collection, addDoc } from "firebase/firestore"

const productsCollection= collection(db, 'productos nacionales')

const productsSeeders=
[
{
"id": 1,
"categoria": "Camaras",
"nombre": "Camara Instantánea",
"precio": 85000,
"stock": 50,
"imagen": "/images/CamaraInstantanea.png"
},
{
"id": 2,
"categoria": "Camaras",
"nombre": "Camara Nikon",
"precio": 97500,
"stock": 50,
"imagen": "/images/CamaraNikon.webp"
},
{"id": 3,
"categoria": "Perifericos",
"nombre": "Monitor Curvo",
"precio": 300000,
"stock": 20,
"imagen": "/images/MonitorCurvo.jpg"
},
{"id": 4,
"categoria": "Perifericos",
"nombre": "Monitor Asus",
"precio": 200000,
"stock": 20,
"imagen": "/images/MonitorAsus.jpg"
},
{"id": 5,
"categoria": "Perifericos",
"nombre": "Mouse",
"precio": 11000,
"stock": 200,
"imagen": "/images/Mouse.jpg"
},
{"id": 6,
"categoria": "Notebooks",
"nombre": "Notebook Pro",
"precio": 1200000,
"stock": 5,
"imagen": "/images/NotebookPro.jpeg"
},
{"id": 7,
"categoria": "Perifericos",
"nombre": "Teclado Mecanico",
"precio": 12000,
"stock": 100,
"imagen": "/images/TecladoMecanico.jpg"
},
{"id": 8,
"categoria": "Notebooks",
"nombre": "Notebook Base",
"precio": 800000,
"stock": 10,
"imagen": "/images/windows11.jpg"
}
]

const addProductsToDb= ()=>{
    productsSeeders.forEach( async(product)=>{
        await addDoc(productsCollection,product)
        console.log("agregado",product)
    })
}
addProductsToDb()

/*
[
  {
    "price": 12500,
    "name": "Mouse",
    "stock": 1000,
    "origin": "China"
  },
  {
    "price": 300000,
    "name": "Proyector",
    "stock": 10,
    "origin": "Brasil"
  },
  {
    "name": "Monitor LED",
    "origin": "Argentina",
    "stock": 10,
    "price": 400000
  },
  {
    "price": 5000,
    "name": "Pendrive",
    "stock": 100,
    "origin": "China"
  },
  {
    "name": "PC All In One",
    "stock": 10,
    "origin": "Argentina",
    "price": 1750000
  },
  {
    "name": "Mousepad",
    "stock": 200,
    "origin": "China",
    "price": 5000
  },
  {
    "name": "Notebook",
    "origin": "USA",
    "stock": 10,
    "price": 1500000
  },
  {
    "name": "PC Escritorio",
    "origin": "Chile",
    "stock": 10,
    "price": 1600000
  },
  {
    "name": "Teclado",
    "origin": "Malasia",
    "stock": 100,
    "price": 20000
  },
  {
    "name": "Monitor Curvo 32 pulgadas",
    "origin": "Argentina",
    "stock": 10,
    "price": 400000
  }
]
*/