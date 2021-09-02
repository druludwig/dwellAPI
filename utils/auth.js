// const withAuth = (req, res, next) => {
//   // If the user is not logged in, redirect the request to the login route
//   if (!req.session.logged_in) {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };

// console.log("linked");

// const loginForm = document.querySelector("#loginForm")
// loginForm.addEventListener("submit",(e) => {
//   e.preventDefault();
//   const authObj={
//     email:document.querySelector("#loginEmail").value,
//     password:document.querySelector("#loginPassword").value,

//   }
//   fetch("/api/users/login", {
//     method:"POST",
//     body:JSON.stringify(authObj),
//     headers:{
//       "Content-Type":"application/json"
//     }
//   }).then(res=>{
//     if(res.ok){
//       return res.json()
//     }else {
//       alert("error!")
//     }
//   }).then(data=>{
//     console.log(data);
//   })
// })

// const signupForm = document.querySelector("#signupForm")
// signupForm.addEventListener("submit",(e) => {
//   e.preventDefault();
//   const authObj={
//     first_name:document.querySelector("#first_name").value,
//     last_name:document.querySelector("#last_name").value,
//     email:document.querySelector("#email").value,
//     password:document.querySelector("#password").value,

//   }
//   fetch("/api/users", {
//     method:"POST",
//     body:JSON.stringify(authObj),
//     headers:{
//       "Content-Type":"application/json"
//     }
//   }).then(res=>{
//     if(res.ok){
//       return res.json()
//     }else {
//       alert("error!")
//     }
//   }).then(data=>{
//     console.log(data);
//   })
// })

// module.exports = withAuth;
