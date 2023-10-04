//RESUELVE LOS EJERCICIOS AQUI

/*Map
 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.*/
 let numbers = [4, 5, 6, 7, 8, 9, 10];

 const elevados = () =>
   numbers.map((x) => {
     return Math.pow(x, x);
   });
  

 //2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

 const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
 const result2 = foodList.map((food) => {
   switch (true) {
     case food == "Pizza":
       return "Como soy de Italia, amo comer Pizza";
     case food == "Ramen":
       return "Como soy de Japón, amo comer Ramen";
     case food == "Paella":
       return "Como soy de Valencia, amo comer Paella";
     default:
       return "Aunque no como carne, el Entrecot es sabroso";
   }
 
 });

//3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

let staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
];

let staffDescription = [];

let result3 = staff.map(function callback(currentValue, index){
  staffDescription.push(`${staff[index].name} es ${staff[index].role} y le gusta ${staff[index].hobbies[0]} y ${staff[index].hobbies[1]}`);
  return (`${staff[index].name} es ${staff[index].role} y le gusta ${staff[index].hobbies[0]} y ${staff[index].hobbies[1]}`);
})

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(x=> !(x%2==0));


//5 Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 =[
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];

  let result5 = foodList2.filter((currentValue, index) => foodList2[index].isVeggie == true)
  result5 = result5.map( function (currentValue, index){
    if (index == 0){
    return `Que rico ${result5[index].name} me voy a comer!`;
    } else {
      return `Que rica ${result5[index].name} me voy a comer!`;
    }
  });


  //6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

  const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

  let result6 = inventory.filter(function (currentValue, index){
    return inventory[index].price > 300;
  })

  result6 = result6.map(function (currentValue, index){
    return `${result6[index].name}`
  });


//6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((accumulator, currentValue) => accumulator * currentValue);


//7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  "Carlos",
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

let result8 = sentenceElements.reduce((accumulator, currentValue,) => accumulator += ` ${currentValue}`);



//8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];


let result9 = books.filter((currentValue, index) => books[index].category == "code");
result9 = result9.map((currentValue, index) => {
    return result9[index].price 
  })
result9 = result9.reduce( (accumulator, currentValue) => accumulator += currentValue)
  
  

