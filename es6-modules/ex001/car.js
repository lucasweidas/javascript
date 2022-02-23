export default class Car {
  constructor(model, color){
    this.model = model;
    this.color = color;
  }
}

export function printCarInfos(car) {
  console.log(`The car is a ${car.color} ${car.model}`);
}