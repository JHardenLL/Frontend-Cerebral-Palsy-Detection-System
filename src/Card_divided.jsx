import React from 'react';
import { Card, Col, Row } from 'antd';
import MyStatistic from './Statistic';
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
    
    <Col span={24}>
      <Card title="上传视频" bordered={false} style={{height:1000}}>
        <button onClick={()=>{
                        fetch("http://192.168.61.111:8080/Hello",{
                          method:"GET",
                        })
                        .then(response=>response.json())
                        .then(data=>{console.log(data);
                            })
                    }}>
          Hello
        </button>
        {/* <br></br>
        <Login/>
        <br></br>
        <Getinfo/> */}
        <br></br>
        <Myvidepupload/>
        <button onClick={()=>{
                        fetch("http://192.168.61.111:8080/StartDetection",{
                          method:"POST",
                        })
                        .then(response=>response.json())
                        .then(data=>{console.log(data);
                            })
                    }}>
          Detection
        </button>
        <button onClick={()=>{
                        fetch("http://192.168.61.111:8080/VideoRes",{
                          method:"GET",
                        })
                        .then(response=>{console.log(response);console.log(response.url);})
                    }}>
          VideoRes
        </button>
        <video src="http://192.168.61.111:8080/VideoRes" controls></video>
      </Card>
    </Col>

    <Col span={24}>
      <Card title="分析结果" bordered={false} style={{height:300}}>
        <MyStatistic rate={12}/>
      </Card>
    </Col>
  </Row>
);
export default Card_divided;