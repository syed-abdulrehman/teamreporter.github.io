const myModel = document.querySelectorAll('.modal');
let username;

async function signup(e){
    e.preventDefault();
    const user = document.querySelector('#signupuser').value;
    const password = document.querySelector('#signuppassword').value;
  //  const user2 = document.querySelector('#)
    console.log(user,password)


                        try{
                              const result = await  firebase.auth().createUserWithEmailAndPassword(user,password)
                              console.log(result);
                              M.toast({html:`welcome ${result.user.email}`,classes:"green"})
                           }
                        catch(err){
                              console.log(err);
                              M.toast({html:err.message,classes:"red"})
                                  }
user.value='';
password.value='';                                  
M.Modal.getInstance(myModel[0]).close()                                 
}
// sign in function
async function signin(e){
    e.preventDefault();
    const user = document.querySelector('#loginuser').value;
    const password = document.querySelector('#loginpassword').value;
    console.log(user,password)


                        try{
                              const result = await  firebase.auth().signInWithEmailAndPassword(user,password)
                              console.log(result);
                              M.toast({html:`welcome ${result.user.email}`,classes:"green"})
                              username=result.user.email
                              teamyouarepartof();
                              teamdetail();
                              document.getElementById('welcome').textContent=`   welcome ${username} `;
                              
                           }
                        catch(err){
                              console.log(err);
                              M.toast({html:err.message,classes:"red"})
                                  }
                                 M.Modal.getInstance(myModel[1]).close()  


}
// logout function

function signout(){
    firebase.auth().signOut()
}

// observer function
firebase.auth().onAuthStateChanged((user)=>{
    if(user){console.log('user')}
    else {console.log('signout success')
    M.toast({html:'SignOut Success',classes:"green"})}
})



// ----------------



// insert data into TEAM table

const teamdata = document.querySelector('#team-add');

teamdata.addEventListener('submit',(e)=>
{e.preventDefault();
firebase.firestore().collection('team').add({
    name: teamdata.name.value,
    owner: username
        })
firebase.firestore().collection('members').add({
    teamname: teamdata.name.value,
    teammember: teamdata.teammembers.value,
    teamowner : username
        })        
console.log(teamdata.name.value)
  
} 
)
// getting data from team table

const teamss= document.querySelector('.team-names')
function teamdetail(){
firebase.firestore().collection('team').where("owner","==",username).get().then((snapshot)=>{
snapshot.docs.forEach(doc=>{renderteam(doc)})
})
}
function renderteam(doc){
let name = document.createElement('a');
name.setAttribute("class","collection-item #ec407a pink lighten-5")
name.textContent = doc.data().name;
teamss.appendChild(name);
}

// getting data teams you are part of 
const teamss2= document.querySelector('.team-you-are-part')
function teamyouarepartof(){
firebase.firestore().collection('members').where("teammember","==",username).get().then((snapshot)=>{
snapshot.docs.forEach(doc=>{render2(doc)})
})
}
function render2(doc){
let name = document.createElement('a');
name.setAttribute("class","collection-item #ec407a pink lighten-5")
name.setAttribute("href","#")
name.setAttribute("onclick","alert()")
name.textContent = doc.data().teamname;
teamss2.appendChild(name);
}







/*
const teamss= document.querySelector('#team-names')
function teamdetail(){
firebase.firestore().collection('team').get().then((snapshot)=>{
snapshot.docs.forEach(doc=>{renderteam(doc)})
})
}
function renderteam(doc){
let li = document.createElement('li');
let name = document.createElement('a');
name.setAttribute("class","collection-item #ec407a pink lighten-5")
name.textContent = doc.data().name;
li.appendChild(name);
teamss.appendChild(li);
}
*/





/*


//  CRUD OPERATIONS -------------------------------------------------------------

// get data from table--------------------------------------------------
const cafelist= document.querySelector('#cafe-list')
function getnewdata(){
firebase.firestore().collection('test').get().then((snapshot)=>{
snapshot.docs.forEach(doc=>{rendercafe(doc)})
})
}

function rendercafe(doc){
let li = document.createElement('li');
let name = document.createElement('span');
let age = document.createElement('span');
name.textContent = doc.data().name;
age.textContent = doc.data().age;
li.appendChild(name);
li.appendChild(age);
cafelist.appendChild(li);
}
// -----------------------------------------------------------------------------


// insert data into table 
const formdata = document.querySelector('#add-cafe-form');

formdata.addEventListener('submit',(e)=>
{e.preventDefault();
firebase.firestore().collection('test').add({
    name: formdata.name.value,
    email : formdata.email.value,
    age : formdata.age.value     })

    formdata.name.value='';
    formdata.email.value='';
    formdata.age.value='';
  
} 
)
//---------------------------------------------------------------------------------

// filtering data



const cafelist2= document.querySelector('#cafe-list')
function filterdata(){
firebase.firestore().collection('test').where('name','==','person3').get().then((snapshot)=>{
snapshot.docs.forEach(doc=>{rendercafe(doc)})
})
}

function rendercafe(doc){
let li = document.createElement('li');
let name = document.createElement('span');
let age = document.createElement('span');
name.textContent = doc.data().name;
age.textContent = doc.data().age;
li.appendChild(name);
li.appendChild(age);
cafelist2.appendChild(li);
}
//-------------------------------------------------------------------
// function login




















// firebase adding data script
//firebase.firestore().collection("test2").add({name:"karim",age:34,salary:2000})

//firebase update data script
//var testref = firebase.firestore().collection("test").doc("zqqVwRwT4R7XF8YVat0l")
//tesetref.update({salary:3000})

//query data from database
//let q = await firebase.firestore().collection("test2")
//.doc("lvWOTJnC32U2OgtYevZo").get()
//q.data();

//query data on where clause basis
//  let querysnap = await firebase.firestore().collection("test").
//  where('age','==',20)
//  .get()
//  querysnap.docs
//  querysnap.docs[0].data();

//delete data
//firebase.firestore().collection("test").doc("zqqVwRwT4R7XF8YVat0l").delete()
*/