/ zadaca2:

for (let i=0; i <=10; i++) {
    console.log(i);
}

// b)

let start=3;
let end=10;
let sum=0;
 for (let i=start; i <=end; i++) {
    if (i % 2 === 0){
        sum +=i;
    }
 }
 console.log("Збир на парни броеви", sum);

 // v)
 
 let person= {
    name: "Jovan",
    age: 27,
    city: "Bitola"
 };
 for (let key in person) {
    console.log(key + ":" + person[key]);
 }

 // g)

 let colors= ["red", "green", "blue"];
 for (let color of colors) {
    console.log(color + ":" + color.length+ "карактери");
 }

 // zadaca3:

 let count= 5;
 while(count >=1) {
    console.log(count);
    count--;
 }

 // b)
 let number=10;
 do{
    console.log(number);
    number--;
    
    if(number===5){
        break;
    }
 }while (number >=1);

 //zadaca4:
 let students = [
    {
        name: "Anastasija",
        surname: "Gudeska",
        age: 23,
        adress: {
            city: "Skopje",
            street: {
                name: "Makedonija",
                number: 6,
                zipCode: "1000"
            }
        }
    },
    {
        name: "Ivana",
        surname: "Mihajlovska",
        age: 24,
        adress: {
            city: "Prilep",
            street: {
                name: "Ilindenska",
                number: 6,
                zipCode: "7000"            
            }
        }
    }
 ];
 console.log(students[0].adress.city);
 console.log(studetnts[1]["adress"]["street"]["name"];)

 //zadaca5:
  for (let i=1; i <=100; i+=4){
    console.log(i);
  }

  // b)
  for(let i=2; i <=50; i +=2){
    console.log(i);
  }

  //zadaca6:
  let cities= ["Skopje", "Bitola", "Prilep", "Ohrid", "Tetovo", "Kumanovo", "Veles", "Strumica", "Kavadarci", "Stip"];
  for(let index in cities){
    console.log(cities[index]);
  }

  // b)
  let city= ["Beograd", "Bujanovac", "", "Presevo", "Vranje", "Kraljevo", "Nis", "", "Leskovac", "Pancevo"];
  for(let city of cities1){
    console.log(city);
  }
