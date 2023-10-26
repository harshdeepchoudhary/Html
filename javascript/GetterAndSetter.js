// var person=new Object()
// person.name="hhp"
// person.age=26
// documen.write(person.name)

var person = {
  name: "hhp",
  age: 44,
  get getname() {
    return this.name.toLocaleUpperCase();
  },
  set setname(n)
  {
    this.name=n.toLocaleUpperCase();
  }
};
person.setname="ajit"

document.write(person.age);
document.write(person.getname);
