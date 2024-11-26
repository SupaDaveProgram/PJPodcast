// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
//const emailRef = document.querySelector(".email")
//console.log(emailRef)
// 1. Then

//fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//response.json().then(data => {
//console.log(data)
//emailRef.innerHTML = data.email
//})
//})


//Then method

/*const emailRef = document.querySelector(".email")
console.log(emailRef)



fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.email
        })
        
        })*/
       
       /*fetch('https://jsonplaceholder.typicode.com/users/1').then((response)=>{
        return response.json()
        
        }).then((data) =>{
            console.log(data)
            emailRef.innerHTML = data.email;
            })
            
            const emailRef = document.querySelector(".email")*/
           /*
            const emailRef = document.querySelector(".email");
            // 2. Async/Await - 
           async function main() {
               const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
               console.log(response.json())
            }

            main()*/

           /* *************************************************************************** */
            
            //Promise Method 1. Not as practical
            
            //Then Method

        /*document.querySelector(".email") 
        fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
        return response.json()
        }).then((data) => {
            console.log(data)
            emailRef.innerHTML = data.email;
        })
        
        const emailRef = document.querySelector(".email")*/
       

       // Promise Method 2. This is the best practice method
        // Async/Await Method
        
                        /*
        const emailRef = document.querySelector(".email");
        async function main() {
          //  console.log(1)
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
           // console.log(2)
            const data = await response.json()
           // console.log(3)
            console.log(data)
            emailRef.innerHTML = data.email
        }
        main()
                       */
function addition(num1, num2){
    return num1 + num2
}
       console.log( addition(2, 3))

       function hoursIntoSeconds(hour){
      let minutes =  hour * 60;
      let seconds = minutes * 60;
      return seconds
       }

       console.log(hoursIntoSeconds(2))
       console.log(hoursIntoSeconds(4))
       console.log(hoursIntoSeconds(6))