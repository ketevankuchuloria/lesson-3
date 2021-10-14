const people = [
    {
      name: 'Ben',
      age: 30,
      occupation: 'Banker',
      salary: 3000,
      pets: []
    },
    {
      name: 'Jane',
      age: 26,
      occupation: 'Teacher',
      salary: 1200,
      pets: ['dog']
    },
    {
      name: 'John',
      age: 31,
      occupation: 'Developer',
      salary: 4000,
      pets: ['dog', 'cat']
    },
    {
      name: 'Mike',
      age: 26,
      occupation: 'Developer',
      salary: 5000,
      pets: []
    },
    {
      name: 'Tom',
      age: 34,
      occupation: 'Teacher',
      salary: 3400,
      pets: ['dog', 'parrot']
    }
  ];


//   1...............................
  const sum = people.reduce((acc, curr) => {
     return (curr.salary += acc);
    }, 0);

    console.log(sum);


// 3..................................

const dogLover = [];
people.forEach(person => {
    const dogs = person.pets.filter(dog => dog =="dog");
    if (dogs.length > 0) {
        dogLover.push (person)
    }
});
console.log(dogLover);



// 5.....................................
const age = people.some((x) => x.age > 30)
console.log(age);




function flatten(arr) {
            let flatArray = [].concat(...arr)
            return flatArray;
        }
    
        const arrays = [
        ['first', 'second'],
        [1, 2, 3],
        [true]
        ];
        console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],