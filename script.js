async function abcd(){
   let ans= await fetch ("https://randomuser.me/api/");
   let ans2 = await  ans.json();
   console.log(ans2)
}


abcd();



