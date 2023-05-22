import React, {Component} from 'react';

class ViedeoUpload extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    upload = () => {
        const data = new FormData();
        data.append('Video', this.fileInput.current.files[0]);  //相当于 input:file 中的name属性
        console.log(this.fileInput.current.files[0]);
        fetch('http://localhost:8080/VideoUpload', {
            method: 'POST',
            headers:{'Content-Type':'multipart/form-data'},
            body:data
        }).then(response => console.log(response))
    };
    render() {
        return (
            <div>
                <input type="file" name='file' ref={this.fileInput}/>
                <input type="button" value="上传" onClick={this.upload}/>
            </div>
        )
    }
}
export default ViedeoUpload;