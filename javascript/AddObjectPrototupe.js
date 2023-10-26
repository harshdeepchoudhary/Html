function Student(first,last,age,cls)
{
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.cls=cls;

}

Student.prototype.nationality="Indian"

Student.prototype.carrer="Fresher"


var student1=new Student("hhp","kumar",34,5);
var student2=new Student("china","kumar",34,5);

console.log(student1.nationality)
console.log(student1)

console.log(student2.nationality)


