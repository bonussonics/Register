import'./FormComponents.css'
import {useState} from "react"

const FormComponent = ()=>{
    const [userName,setUserName] = useState('')
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')


    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')


    const [userNameColor,setUserNameColor] = useState('')
    const [EmailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRePasswordColor] = useState('')

    const validationform = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('Please fill at least 8 characters.')
            setUserNameColor('red')
        }

        if(Email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Invalid email format')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Password must be at least 8 characters')
            setPasswordColor('red')
        }

        if(repassword !== "" && repassword === password){
            setErrorRePassword('')
            setRePasswordColor('green')
        }else{
            setErrorRePassword('Password is incorrect.')
            setRePasswordColor('red')
        }

    }


    return(
        <div className="container">
            <form className="form" onSubmit={validationform}>
                <h2>Register</h2>
                <div className="form-control">
                    <lable>ID</lable> 
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <lable>Email address</lable> 
                    <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:EmailColor}}/>
                    <small style={{color:EmailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <lable>Password</lable> 
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <lable>Confirm Password</lable> 
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="Sumit">CREATE ACCOUNT</button>
            </form>
        </div>
    )
}

export default FormComponent