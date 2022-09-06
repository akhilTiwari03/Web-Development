const myObj = {
  names: ["Arnav", "Akhil", "Arpit"],
  section: ["K20PB", "K20YK", "K20SD"],
  subjects: ["C Language", "C++", "Java", "Python"],
  grade: function() {
    return "A";
  }
};
for (let i = 0; i < 3; i++) {
  console.log(myObj.names[i]+" " + myObj.section[i]+" " + myObj.subjects[i]+" " + myObj.grade());

}

// Inheritance 

// const vehicle = {
//     wheels:4 ,
//     engine: function() {
//         return ""
//     }
// }


// class

class pizza {
    constructor() {
        this.size = "Medium";
        this.crust ="Wheat crust";
    }
    bake() {
        console.log("Baking a "+ this.size +" "+ this.crust + " pizza");
    }
}
const mypizza = new pizza();
mypizza.bake()
console.log(mypizza.size);
