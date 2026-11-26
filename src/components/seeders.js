import {db} from "../firebase/config.js"
import { collection, addDoc } from "firebase/firestore"

const productsCollection= collection(db, 'productos nacionales')

const productsSeeders=[
  { nombre: "Alimento Premium para Perros 15kg",
    precio: 42500,
    categoria: "Alimentos",
    descripcion: "Alimento balanceado premium para perros adultos. Aporta proteínas, vitaminas y minerales para una nutrición completa.",
    stock: 25
  },
  { nombre: "Alimento para Gatos Adultos 10kg",
    precio: 38900,
    categoria: "Alimentos",
    descripcion: "Alimento seco para gatos adultos. Favorece una buena digestión y mantiene un pelaje saludable.",
    stock: 18
  },
  { nombre: "Alimento para Cachorros 3kg",
    precio: 14500,
    categoria: "Alimentos",
    descripcion: "Fórmula especial para cachorros en crecimiento, rica en proteínas y nutrientes esenciales.",
    stock: 30
  },
  { nombre: "Alimento para Gatos Castrados 7kg",
    precio: 32500,
    categoria: "Alimentos",
    descripcion: "Alimento formulado para gatos castrados. Ayuda a controlar el peso y cuidar el sistema urinario.",
    stock: 12
  },
  { nombre: "Alimento para Conejos 2kg",
    precio: 8900,
    categoria: "Alimentos",
    descripcion: "Mezcla nutritiva de fibras y vegetales diseñada para la alimentación diaria de conejos.",
    stock: 20
  },
  { nombre: "Alimento para Peces Tropicales 100g",
    precio: 4200,
    categoria: "Alimentos",
    descripcion: "Escamas nutritivas para peces tropicales de acuario. Favorece su crecimiento y coloración.",
    stock: 35
  },
  { nombre: "Alimento para Canarios 1kg",
    precio: 5600,
    categoria: "Alimentos",
    descripcion: "Mezcla de semillas seleccionadas para cubrir las necesidades nutricionales de los canarios.",
    stock: 22
  },
  { nombre: "Snacks Dentales para Perros",
    precio: 6500,
    categoria: "Alimentos",
    descripcion: "Premios masticables que ayudan a reducir la acumulación de sarro y mantener una buena higiene bucal.",
    stock: 40
  },
  { nombre: "Piedras Sanitarias para Gatos 10kg",
    precio: 7800,
    categoria: "Higiene",
    descripcion: "Piedras absorbentes para bandejas sanitarias. Ayudan a controlar los olores y mantener limpio el espacio.",
    stock: 28
  },
  { nombre: "Shampoo para Perros 500ml",
    precio: 5900,
    categoria: "Higiene",
    descripcion: "Shampoo de uso frecuente para perros. Limpia suavemente y deja el pelaje brillante y perfumado.",
    stock: 16
  },
  { nombre: "Toallitas Húmedas para Mascotas",
    precio: 3800,
    categoria: "Higiene",
    descripcion: "Toallitas suaves para limpiar patas, hocico y pelaje sin necesidad de utilizar agua.",
    stock: 32
  },
  { nombre: "Cepillo Quitapelos para Gatos",
    precio: 7200,
    categoria: "Higiene",
    descripcion: "Cepillo diseñado para retirar el pelo suelto y reducir la formación de nudos en gatos.",
    stock: 14
  },
  { nombre: "Cortaúñas para Perros y Gatos",
    precio: 4800,
    categoria: "Higiene",
    descripcion: "Herramienta ergonómica para mantener las uñas de las mascotas cortas y cuidadas.",
    stock: 19
  },
  { nombre: "Perfume para Perros 125ml",
    precio: 5200,
    categoria: "Higiene",
    descripcion: "Fragancia suave para perros que ayuda a mantener un aroma agradable entre baños.",
    stock: 11
  },
  { nombre: "Paños Absorbentes x 30",
    precio: 9500,
    categoria: "Higiene",
    descripcion: "Paños descartables de alta absorción, ideales para cachorros y mascotas que permanecen en interiores.",
    stock: 24
  },
  { nombre: "Bandeja Sanitaria para Gatos",
    precio: 12500,
    categoria: "Higiene",
    descripcion: "Bandeja plástica resistente y fácil de limpiar para las necesidades diarias de los gatos.",
    stock: 9
  },
  { nombre: "Pelota de Goma para Perros",
    precio: 4500,
    categoria: "Juguetes",
    descripcion: "Pelota resistente para juegos de lanzamiento y búsqueda. Ideal para mantener activo al perro.",
    stock: 27
  },
  { nombre: "Ratón de Peluche para Gatos",
    precio: 2800,
    categoria: "Juguetes",
    descripcion: "Juguete liviano con forma de ratón que estimula el instinto de caza y entretenimiento felino.",
    stock: 45
  },
  { nombre: "Cuerda Mordedora para Perros",
    precio: 3900,
    categoria: "Juguetes",
    descripcion: "Cuerda trenzada para juegos de tirar y morder. Ayuda a estimular la actividad física.",
    stock: 21
  },
  { nombre: "Caña con Plumas para Gatos",
    precio: 3500,
    categoria: "Juguetes",
    descripcion: "Juguete interactivo con plumas que incentiva el movimiento y la actividad diaria de los gatos.",
    stock: 33
  },
  { nombre: "Pelota Interactiva Dispensadora",
    precio: 8900,
    categoria: "Juguetes",
    descripcion: "Pelota para perros que permite colocar pequeños premios y estimula el juego y la curiosidad.",
    stock: 13
  },
  { nombre: "Rascador de Cartón para Gatos",
    precio: 7600,
    categoria: "Juguetes",
    descripcion: "Rascador de cartón resistente que permite a los gatos afilar sus uñas y entretenerse.",
    stock: 17
  },
  { nombre: "Collar Ajustable para Perros",
    precio: 5500,
    categoria: "Accesorios",
    descripcion: "Collar regulable de material resistente con hebilla de seguridad para paseos cotidianos.",
    stock: 26
  },
  { nombre: "Correa Extensible 5 Metros",
    precio: 14500,
    categoria: "Accesorios",
    descripcion: "Correa extensible con sistema de bloqueo que permite controlar la distancia durante los paseos.",
    stock: 10
  },
  { nombre: "Pretal Ajustable para Perros",
    precio: 9800,
    categoria: "Accesorios",
    descripcion: "Arnés regulable que distribuye la presión y brinda comodidad durante las caminatas.",
    stock: 15
  },
  { nombre: "Comedero de Acero Inoxidable",
    precio: 6200,
    categoria: "Accesorios",
    descripcion: "Recipiente de acero inoxidable resistente y fácil de lavar, apto para agua y alimento.",
    stock: 29
  },
  { nombre: "Bebedero Automático para Mascotas",
    precio: 18500,
    categoria: "Accesorios",
    descripcion: "Fuente de agua con circulación continua que ayuda a mantener el agua fresca y en movimiento.",
    stock: 8
  },
  { nombre: "Cama Acolchada para Perros",
    precio: 28500,
    categoria: "Accesorios",
    descripcion: "Cama acolchada con funda desmontable que brinda comodidad y descanso a las mascotas.",
    stock: 7
  },
  { nombre: "Transportadora para Gatos",
    precio: 22000,
    categoria: "Accesorios",
    descripcion: "Transportadora plástica con ventilación lateral y puerta segura para trasladar gatos.",
    stock: 6
  },
  { nombre: "Ropa de Abrigo para Perros",
    precio: 13500,
    categoria: "Accesorios",
    descripcion: "Abrigo liviano para perros pequeños y medianos. Ideal para protegerlos durante los días fríos.",
    stock: 12
  },
  { nombre: "Jaula para Canarios",
    precio: 32000,
    categoria: "Accesorios",
    descripcion: "Jaula metálica con bandeja extraíble, comederos y espacio adecuado para aves pequeñas.",
    stock: 5
  },
  { nombre: "Acuario de Vidrio 40 Litros",
    precio: 58000,
    categoria: "Accesorios",
    descripcion: "Acuario de vidrio transparente para peces pequeños y medianos. Ideal para espacios interiores.",
    stock: 4
  },
  { nombre: "Filtro para Acuario 500 L/h",
    precio: 19500,
    categoria: "Accesorios",
    descripcion: "Filtro eléctrico para acuarios que ayuda a mantener el agua limpia y libre de residuos.",
    stock: 9
  },
  { nombre: "Piedras Decorativas para Acuario",
    precio: 4800,
    categoria: "Accesorios",
    descripcion: "Piedras decorativas para ambientar acuarios y crear espacios atractivos para los peces.",
    stock: 18
  },
  { nombre: "Antiparasitario para Perros",
    precio: 8900,
    categoria: "Salud",
    descripcion: "Producto antiparasitario para perros. Su administración debe realizarse según peso e indicación veterinaria.",
    stock: 14
  },
  { nombre: "Pipeta Antipulgas para Gatos",
    precio: 7500,
    categoria: "Salud",
    descripcion: "Tratamiento tópico para el control de pulgas en gatos. Utilizar siguiendo las indicaciones del fabricante.",
    stock: 20
  },
  { nombre: "Suplemento Vitamínico para Perros",
    precio: 11200,
    categoria: "Salud",
    descripcion: "Suplemento nutricional con vitaminas y minerales para complementar la alimentación de los perros.",
    stock: 10
  },
  { nombre: "Pasta Dental para Perros",
    precio: 6800,
    categoria: "Higiene",
    descripcion: "Pasta dental especialmente formulada para perros. Ayuda a mantener la higiene bucal y prevenir el mal aliento.",
    stock: 16
  },
  { nombre: "Casita Plástica para Perros",
    precio: 65000,
    categoria: "Accesorios",
    descripcion: "Casa de plástico resistente para exteriores, diseñada para ofrecer refugio y protección a los perros.",
    stock: 3
  },
  { nombre: "Kit de Bienvenida para Cachorros",
    precio: 24900,
    categoria: "Accesorios",
    descripcion: "Set que incluye comedero, juguete, collar y accesorios básicos para recibir un nuevo cachorro.",
    stock: 8
  }
];


const addProductsToDb= ()=>{
    productsSeeders.forEach( async(product)=>{
        await addDoc(productsCollection,product)
        console.log("agregado",product)
    })
}
addProductsToDb()
