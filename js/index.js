function executeData(){
    var userName =document.getElementById('userName').value
    if(userName){
        var loader= document.getElementById('loader')
    loader.style.display='block'

    fetch(`https://api.github.com/users/${userName}`).then(
(res)=>res.json()
)
.then(data=>{
      var acc = document.getElementById('acc')
acc.style.display='none'
// console.log()
if(data.message===undefined){
    var datestr=new Date(data.created_at).toDateString()
var timestr=new Date().toLocaleTimeString([],{hour12: true,hour:"2-digit",minute:'2-digit'})
     document.getElementById('YourUserName').innerText=data.login
     document.getElementById('joinedAt').innerText=`Joined In ${datestr} At ${timestr}`
 document.getElementById('bio').innerText=data.bio
   document.getElementById('following').innerText="folllowings : "+ data.following
   document.getElementById('follower').innerText="followers : "+data.followers
   document.getElementById('imgUrl').src=data.avatar_url
   document.getElementById('card').style.display='block'
   var durl =document.getElementById("html-url")
  
   console.log(data.html_url,data)
 durl.href=data.html_url
   durl.innerText=`check ${data.login}'s URL`
}else{
document.getElementById('card').style.display='none'
  acc.style.display='block'
acc.innerText=document.getElementById('userName').value+"'s account does not exist please try again later with a new name"
   }
    loader.style.display='none'

})
.catch((e)=>{
    loader.style.display='none'
    
    alert(e)
})
}
}
var userName =document.getElementById('userName')
userName.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  
executeData()    }
});
