// db.collection("blog").get().then((data)=>{
//     data.forEach((singleblog)=>{
//         console.log(singleblog.data());


//         $("#blogs").append(`
// <div class="col-md-4">
// <div class="card mt-5" >
//     <img class="card-img-top" src="./assets/images/images.jpg" alt="Card image cap">
//     <div class="card-body ">
//         <small>19-march-2023</small>
//         <h2>${singleblog.data().title}</h2>
//         <p>${singleblog.data().description}</p>
//     </div>
//   </div>
// </div>
// `)
//     })
// })


db.collection("blog").get().then((data)=>{
    data.forEach((singleblog)=>{
        console.log(singleblog.data())

let date = singleblog.data().date.toDate().toString();
console.log(date);

        $("#blogs").append(`<div class="col-md-4">
        <div class="card mt-5" >
            <img class="card-img-top" src="./assets/images/images.jpg" alt="Card image cap">
            <div class="card-body ">
                <small>${date.slice(4,15)}</small>
                <h2>${singleblog.data().title}</h2>
                <p>${singleblog.data().description}</p>
            </div>
          </div>
    </div>`)
    })
})




function logout(){
    window.alert("logout sucessfully")
    localStorage.removeItem('user')
    window.location.href="./login.html"

}
function del(){
    db.collection("blog").doc(id).delete().then(()=>{
        
    });
}






















