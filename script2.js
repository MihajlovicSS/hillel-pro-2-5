let students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [ 9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]
console.log(averageStudentMark(13)); 
console.log(averageGroupMark(students));

function averageStudentMark(id){
    const student = students.find((user) => {
        return user.id === id;
    })
    return student.marks.reduce((sum, current) =>{
        return sum + current;
    }) 
}
function averageGroupMark(array){
    let result;
    let sum = 0;
    array.forEach((student) => {
        result = student.marks.reduce((sum, current) =>{
            return sum + current;
        });
        sum += result;
    })
    return sum/array.length;
}
console.log('New!!!!!!');
console.log(Array.isArray(students));
console.log(students.indexOf());