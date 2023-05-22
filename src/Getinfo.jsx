import React from "react";

class Getinfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myform:""
        }
    }

    render(){
        return(
            <div>
                <input type="button" value="getinfo" onClick={()=>{
                    this.state.myform = new FormData();
                    this.state.myform.append("Username","zhangsan");
                    fetch("http://localhost:8080/UserBaseInfo",{
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

export default Getinfo
