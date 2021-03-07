function executeData(){
    var userName =document.getElementById('userName').value
    if(userName){
    
    fetch(`https://api.github.com/users/${userName}`).then(
(res)=>res.json()
)
.then(data=>{
    console.log(data)  
    var datestr=new Date(data.created_at).toDateString()
var timestr=new Date().toLocaleTimeString([],{hour12: true,hour:"2-digit",minute:'2-digit'})
     document.getElementById('YourUserName').innerHTML=data.login
     document.getElementById('joinedAt').innerHTML=`Joined In ${datestr} At ${timestr}`
 document.getElementById('bio').innerHTML=data.bio
   document.getElementById('following').innerHTML="folllowings : "+ data.following
   document.getElementById('follower').innerHTML="followers : "+data.followers
   document.getElementById('imgUrl').src=data.avatar_url
   document.getElementById('card').style.display='block'
})
.catch(()=>{alert("userName not found")
})
}
}