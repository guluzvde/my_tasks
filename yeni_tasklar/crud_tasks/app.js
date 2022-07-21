const formAdd=document.getElementById("add")
const formDelete=document.getElementById("delete")
const fullNameInput=document.querySelector(".fullName")
const emailInput=document.querySelector(".email")
const login=document.querySelector(".deleteUser").value


addEventListeners();



function addEventListeners(){
    formAdd.addEventListener("submit",addUser)
    formDelete.addEventListener("submit",findUser)

}




function findUser(){
    const login=document.querySelector(".deleteUser").value
    let urlLogin=`http://localhost:3000/users?login=`
    urlLogin=urlLogin+login
    const findUserId = async()=>{
    const response = await axios.get(urlLogin)
    const userId=response.data[0].id;
    const urlId=`http://localhost:3000/users/${userId}`
    const deleteUser = async()=>{
        await axios.delete(urlId)
    }
    deleteUser()
}
findUserId()

}



const url=`http://localhost:3000/users`
function addUser(){
    const addData= async()=>{
        const body={
            fullName:fullNameInput.value,
            login:login.value,
            email:emailInput.value,
        }
        const data= await axios.post(url,body)
    }
 addData()

}



