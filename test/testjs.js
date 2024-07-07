let myObject = [
  {
    name: "max",
    is_good: true,
  },
  {
    name: "vivi",
    is_good: true,
  },
  {
    name: "lisa",
    is_good: false,
  },
  {
    name: "peter",
    is_good: true,
  },
  {
    name: "hans",
    is_good: false,
  },
];

console.log(
  myObject.filter((element) => {   //element ist pro irretation also wie i in for scheleife, schaut welche i bzw welches element "is_good" false hat, ES MUSS!! eine true oder false rauskommen
    return element["is_good"] == false;
  })
);
