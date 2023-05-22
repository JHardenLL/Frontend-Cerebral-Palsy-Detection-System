import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Statistic } from 'antd';
class MyStatistic extends React.Component {        

    render(){
      return(
        <Statistic
        title="您的孩子患有脑瘫的概率为"
        value={this.props.rate}
        precision={2}
        valueStyle={{
          color: '#3f8600',
        }}
        //prefix={<ArrowUpOutlined />}
        suffix="%"
        />
      );
    };
};

export default MyStatistic;