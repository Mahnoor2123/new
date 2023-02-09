let user= localStorage.getItem("user");
console.log(user); 
function submit(){
   let title = document.getElementById("title").value;
   let description = document.getElementById("description").value;

   if(title==""|| description=="")
   {
    window.alert("please enter all fields")
   }
   else{
    let blog = db.collection("blog").doc()

    let data={
        title:title,
        description:description,
        blogid:blog.id,
        date:new Date(),
        userid:user
    }

    blog.set(data).then(()=>{
        window.alert("sucessfully added");
        window.location.href="./index.html"
    }
    )
   }
}