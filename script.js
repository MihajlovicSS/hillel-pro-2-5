const students = [
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
console.log(averageGroupMark2(students));

function averageStudentMark(id){
    const student = students.find((user) => {
        return user.id === id;
    })
    const sum = student.marks.reduce((sum, current) =>{
        return sum + current;
    }) 
    return sum/student.marks.length;
}
//Функция, которую я изначально написал вычисляла сразу среднее значение 
//оценок по каждому студенту, потом суммировала их и делила на array.length
//Все работало, но в некоторых случаях получались дробные числа, которые неверно округлялись.
// Переделал ее по своему разумению, чтобы все было точно. 
function averageGroupMark(array){
    let sumAllMarks = 0;
    let result;
    let numberOfMarks = 0;
    array.forEach((student) => {
        result = student.marks.reduce((sum, current) =>{
            return sum + current;
        });
        numberOfMarks += student.marks.length;
        sumAllMarks += result;
    })
    return sumAllMarks/numberOfMarks;
}
//Вторая версия той же функции в точном соответствии с ТЗ.
function averageGroupMark2(array){
  const allMarksAllStudents = students.reduce((accumulator, student) => {
    return accumulator.concat(student.marks);
  },[]);
  const sum = allMarksAllStudents.reduce((accumulator, mark) => {
    return accumulator + mark;
  });
  return sum/allMarksAllStudents.length;
}
