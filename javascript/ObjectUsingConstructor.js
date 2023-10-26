function Student(first,last,age,cls)
{
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.cls=cls;

}
var student1=new Student("hhp","kumar",34,5);

// add
student1.nationality="Indian"


var student2=new Student("china","kumar",34,5);
// add
student2.nationality="China"


var student3=new Student("hhp","kumar",34,5);
// add
student3.nationality="Japan"


var student4=new Student("hhp","kumar",34,5);
// add
student4.nationality="Russia"

// Print
document.write(student1.firstName+"<br>")
document.write(student1.nationality+"<br>")
document.write(student2.lastName+"<br>")
document.write(student2.nationality+"<br>")
document.write(student3.age)
document.write(student3.nationality+"<br>")
