//zadaca1
let books -[
    {title: "Book1", author: "Author A", year: 2000};
    {title: "Book2", author: "Author B", year: 2010};
    {title: "Book3", author: "Author C", year: 2020};
]
books.forEach(book => console.log(book.title, book.author));
let bookPublishedAfter2000 = books.find((book) => book.year > 2000);
console.log(bookPublishedAfter2000)

//zadaca 2 a)

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    adress: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        postalCode: "1001",
    },
    hobbies : ["Reading", "Traveling", "Cooking"],
}

let  additionalInfo ={
    email: "john.doe@gmail.com",
    phone: "929-445-2009",
    education: {
        degree: "Bachelor of Science",
        major: "Science, Techonolgy, Engineering, and Mayh"
    },
}
 let personInfo = {...person, ...additionalInfo}
 console.log(personInfo)

 //zadaca 3 a)

 let countriesLand = countries
 .filter(country => country.slice(-4) === 'land')
 .map(country => country.toUpeerCase())

 console.log(countriesLnd)

 //zadaca 3 b)

 let countriesIa = countries.filer(country => country.slice(-2) === 'ia' && country.length > 7)
 console.log(countriesIa)

 zadaca 4 a)

 let popularAnimals = zooAnimals.filer(animal =>animal.popularity >4).map(animal => animal.name)
 console.log(popularAnimals)

 //b)

 let elephants = zooAnimals.filter(animal =› animal name=== 'elephants'). map(((residents]) => (residents))
  let elephantsAge = elephants.flat()-map(elephant →> elephant-age) - sort((a,b) →> b-a)
   let oldestElephant = elephants.flat().filter (elephant -> elephant.age == elephantsAge[®])
    let oldestelephantName = oldestelephant-map(elephant → elephant.name)
console.log(oldestElephantName)

// c)

let penguins = zooAnimals.filter (animal => animal.name==='penguins').map(((residents)) => (residents))
let youngFemalepenguins = penguins-flat .filter (penguin →> penguin.age < 10 && penguin.sex === 'female*) 
    let youngFemalePenguinName - youngFemalePenguins.map(penguin => penguin.name)
console. log(youngFemalePenguinsName)

// d)

let animalsNamesNumChar = zooAnimals.map(a => a.name.length) sort((a,b) →> b-a)
let animalswithLongestName = zoonimals.filter (animal => anjmal.name. length ==*animalsNamesNumchar (®]).map(animal => animal.name)
console.log(animalswithLongestName )

let animalswithLongestNameAges = 200Animals. filter (animal -› animal.name.length ==animalsNamesNumchar[®])-map(((residents}) → (residents)).flat()
let sumAge = animalsWithLongestNameAges.reduce((acc, curr) →> acc + curr, 0) console. log(sumage)

// e)

let let
let animalResidentstumber • zooAnimals/map (animal => animal.residents.length).sort (a,b) →> a-b) lowestNumberOfResidents = animalResidentsNumber [®)
let highestNumberofresidents = animalResidentsNumber [animalResidentsNumber.length - 1]
let animalSWithLeastResidents = zooAnimalSofflter (aninal = aninal.residents.Length =*= LowestiumberofResidents)
let animalswithLeastResidentsName = animalswithLeastResidents.map(animal => animal.name)
console.log(animalsWithLeastResidentsName)

let animalswithMostResidents - zooAnimals.filter(animal »> animal.residents.length == highestNumberofResidents)
let animalswithMostResidentstane = animalsWithMostResidents.map(animal »> animal.name)
console.log(animalswit/MostResidentsName)

//zadaca5

function checkGrade (score) {
     score>=90 && score‹=100
    ? console.log("Grade:A")
    : score>=80 && score<=89
    ? console.log("Grade:B")
    : score>=70 && score<=79
    ? console.log("Grade:C")
    : score>=60 && score<=69
    ? console.log("Grade:D")
    : score>=0 && score<=59
    ? console.log("Grade:F")
    : score<0 || score>100
    ? console. log("Invalid scorel Please enter a score between 0 and 100")
    : console.log("Invalid entry! Please enter a numerical value")
}
    
    checkGrade(73)