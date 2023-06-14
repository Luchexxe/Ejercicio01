//* ====== EJERCICIO 2 ======

const familia = [
  {
    nombre: "Miguel",
    edad: 32,
    integrante: "Padre",
  },
  {
    nombre: "Angela",
    edad: 30,
    integrante: "Madre",
  },
  {
    nombre: "Florencia",
    edad: 15,
    integrante: "Hija",
  },
  {
    nombre: "Marcos",
    edad: 19,
    integrante: "Hijo",
  },
  {
    nombre: "Gonzalo",
    edad: 25,
    integrante: "Hijo",
  },
];

//* Contamos con un listado que tiene los datos de los miembros de una familia y se desea saber si cuenta con al menos un miembro menor de 18 años.
//* En caso afirmativo, devolver esa información. En caso contrario devolver un texto que diga "Esta familia no cuenta con ningun miembro menor a 18 años"

//* CONSIGNA: Crear una función que reciba como parámetro el listado de la familia y retorne lo solicitado.


function eje2(arr)
{

  let a="";
 const b= arr.some((value,index,array)=>
{
 return value.edad<18;
});
if(b==true)
{
a="Esta familia cuenta con al menos un miembro menor a 18 años";
}
else
{
a="Esta familia no cuenta con ningun miembro menor a 18 años";
}
console.log(a);
}
eje2(familia)
