import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myform:""
        }
    }

    render(){
        return(
            <div>
                <input type="button" value="newlogin" onClick={()=>{
                    this.state.myform = new FormData();
                    this.state.myform.append("Username",'zhangsan');
                    this.state.myform.append("Password","zhangsan123");
                    fetch("http://localhost:8080/UserLogin",{
                        method:"POST",
                        body:this.state.myform
                    })
                    .then(response=>response.json())
                    .then(data=>{console.log(data);
                    })
                }}>

                </input>
            </div>
        );
    }
}

export default Login
