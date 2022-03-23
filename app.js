//main input tag
let inputEle = document.createElement("input");
//placeholder in the input
inputEle.placeholder="Username"
//input tag 2 (password):
let inputElePass = document.createElement("input");
//placeholder in second input
inputElePass.placeholder="Password";
inputElePass.setAttribute("type", "password");
//message ele
let messageEle = document.createElement("h3");
//button
let button = document.createElement("button");
button.innerHTML="Login";
button.addEventListener("click", function(){
    if(inputEle.value==="coolStudent123"){
        navigation()
        button.style.visibility = 'hidden'
        inputEle.style.visibility = 'hidden'
        inputElePass.style.visibility = 'hidden'
        messageEle.style.visibility = 'hidden'
    }else{
        messageEle.innerHTML="Wrong information entered, please try again"
    }

    // list.push(inputEle.value);
    // renderList();

})

const pages =[
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page: "View",
        navigate: view
    }
]



function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="90px";
    nav.style.backgroundColor="lightslategrey";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML="Home";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about = document.createElement("h1");
    about.innerHTML="About";
    document.body.querySelector(".wrapper").appendChild(about);
}
function view(){
    let view = document.createElement("h1");
    let inputEleNote = document.createElement("input");
    let inputEleImportance = document.createElement("input");
    let submit = document.createElement("button");
    inputEleNote.placeholder="Text";
    inputEleImportance.placeholder="Importance";
    submit.innerHTML="Submit";
    button.addEventListener("click", function(){


    })
    view.innerHTML="View Notes";
    document.body.querySelector(".wrapper").appendChild(view);
    document.body.appendChild(inputEleNote);
    document.body.appendChild(inputEleImportance);
    document.body.appendChild(submit);
}

//append the tag/inputs(s)
document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);
document.body.appendChild(listEle);


navigation();
homePage();
