import { Card, Col, Row } from 'antd';
import Myupload from './Myupload';
import MyStatistic from './Statistic';
import ViedeoUpload from './Viedoupload';
import Getinfo from './Getinfo';
import Login from './Login';
import Myvidepupload from './MyvideoUpload';
const Card_divided = () => (
  <Row gutter={16}>
    <Col span={24} style={{paddingBottom:25}}>
      <Card title="须知" bordered={false}>
         <p> 
          <strong>
          请上传一段清晰的婴儿姿态视频，时长在60s左右，要求视频中除一个婴儿外无其他人（如家长等）入镜，婴儿占视频面积的五分之三以上
          </strong>
         </p>
      </Card>
    </Col>
    <Col span={24} style={{paddingBottom:25}}>
      <Card title="上传视频文件" bordered={false}>
        <Myupload/>
      </Card>
    </Col>
    
    <Col span={24}>
      <Card title="title" bordered={false} style={{height:300}}>
        <input type='file' id="vvideo"></input>
        <input type="text" id="generated"></input>
        <button onClick={()=>{
                        //console.log(document.getElementById("generated").value)
                        console.log(document.getElementById("video").value);
                        fetch("http://localhost:8080/VideoUpload",{
                            method:"POST",
                            headers:{'Content-Type':'multipart/form-data'},
                            body:{"Video":document.getElementById("vvideo").value}
                        })
                        .then(response=>response.json())
                        .then(data=>{console.log(data);
                                //console.log(data.code);
                                // this.setState({
                                //     responcode:data.code,
                                //     responjwt:data.jwt
                                // });
                                // console.log(this.state.responcode)这里会显示0，要整个onClick结束以后responcode才会变
                            })
                    }}>
          上传视频
        </button>
        <ViedeoUpload/>
        <button onClick={()=>{
                        fetch("http://localhost:8080/Hello",{
                          method:"GET",
                        })
                        .then(response=>response.json())
                        .then(data=>{console.log(data);
                            })
                    }}>
          Hello
        </button>
        <br></br>
        <Login/>
        <br></br>
        <Getinfo/>
        <br></br>
        <Myvidepupload/>
      </Card>
    </Col>

    <Col span={24}>
      <Card title="title" bordered={false} style={{height:300}}>
        <MyStatistic/>
      </Card>
    </Col>
  </Row>
);
export default Card_divided;