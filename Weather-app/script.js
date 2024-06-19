// async function getWeather(){
//     const city = document.getElementById("city").value;
//     try{
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8005e0a1974f974d81c999400dd12dc9`);
//       const data = await response.json();
//       console.log(data);
//       if (data.cod === 200){
//         const temp = `<h2>${data.main.temp}</h2>`
//         const name = `<h2>${data.name}</h2>`
//         const lon = `<h2>${data.coord.lon}</h2>`
//         const lat = `<h2>${data.coord.lat}</h2>`
//         document.getElementById("name").innerHTML = `City: ${name}`
//         document.getElementById("temp").innerHTML = `Temp: ${temp}`
//         document.getElementById("lon").innerHTML = `Lon: ${lon}`
//         document.getElementById("lat").innerHTML = `Lat: ${lat}`
//       } else{
//         document.getElementById("result").innerHTML = `<p>${data.message}</p>`
//       }
//     }
//     catch (error){
//       document.getElementById("result").innerHTML = `<p>Cant fetch</p>`
//     }
//     }
  
//     document.getElementById("getWeather").addEventListener("click", () =>{
//       if(city.value == ""){
//         alert("Enter City Name")
//       }else{
//         getWeather()
//       }
  
//     })





// function Car(brand, model, currentSpeed, topSpeed) {
//     this.brand = brand; 
//     this.model = model; 
//     this.currentSpeed = currentSpeed; 
//     this.topSpeed = topSpeed; 


//     this.accelerate = function() {
//         if (this.currentSpeed + 10 > this.topSpeed) {
//             this.currentSpeed = this.topSpeed;
//             console.log(`The car is at its maximum speed of ${this.topSpeed} km/h.`);
//         } else {
//             this.currentSpeed += 10;
//         }
//     };

//     this.decelerate = function() {
//         if (this.currentSpeed - 10 < 0) {
//             this.currentSpeed = 0;
//             console.log("The car is at its minimum speed of 0 km/h.");
//         } else {
//             this.currentSpeed -= 10;
//         }
//     };

    
//     this.printCurrentSpeed = function() {
//         console.log(`The current speed is ${this.currentSpeed} km/h.`);
//     };
// }

// let myCar = new Car('Toyota', 'Camry', 0, 200);


// myCar.printCurrentSpeed(); 
// myCar.accelerate();
// myCar.printCurrentSpeed(); 
// myCar.accelerate();
// myCar.printCurrentSpeed(); 
// myCar.decelerate();
// myCar.printCurrentSpeed(); 
// myCar.decelerate();
// myCar.printCurrentSpeed(); 
// myCar.decelerate(); 
// myCar.printCurrentSpeed(); 
// delete myCar.model;
// console.log(myCar); 
