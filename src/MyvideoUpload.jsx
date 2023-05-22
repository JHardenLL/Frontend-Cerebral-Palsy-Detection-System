import React from "react";

// class Myvideopupload extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             myform:""
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <input type="button" value="Myvideoupload" onClick={()=>{
//                     this.state.myform = new FormData();
//                     this.state.myform.append("Video",document.getElementById("video").value);
//                     fetch("http://192.168.61.111:8080/VideoUpload",{
//                         method:"POST",
//                         body:this.state.myform
//                     })
//                     .then(response=>response.json())
//                     .then(data=>{console.log(data);
//                     })
//                 }}>

//                 </input>
//             </div>
//         );
//     }
// }

// class Myvideoupload extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         myform: new FormData(),
//       };
//     }
  
//     handleUpload = () => {
//       const { myform } = this.state;
//       myform.append("Video", document.getElementById("video").files[0]);
  
//       fetch("http://localhost:8080/VideoUpload", {
//         method: "POST",
//         headers:{'Content-Type':'multipart/form-data'},
//         body: this.state.myform,
//       })
//         .then(response => response.json()) 
//         .then(data => {
//           console.log(data);
//         })
//         .catch(error => {
//           console.error("文件上传失败:", error);
//         });
//     };
  
//     render() {
//       return (
//         <div>
//           <input type="file" id="video" />
//           <input type="button" value="MyVideoUpload" onClick={this.handleUpload} />
//         </div>
//       );
//     }
//   }
class Myvideoupload extends React.Component {
  handleUpload = () => {
    const myform = new FormData();
    myform.append("Video", document.getElementById("video").files[0]);

    fetch("http://localhost:8080/UploadVideo", {
      method: "POST",
      body: myform,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      // .catch(error => {
      //   console.error("文件上传失败:", error);
      // });
  };

  render() {
    return (
      <div>
        <input type="file" id="video" />
        <input type="button" value="MyVideoUpload" onClick={this.handleUpload} />
      </div>
    );
  }
}


export default Myvideoupload
