import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { requestApiAggregateByTime } from './redux/actions' 
import { Row, Col, Button } from 'reactstrap';

const AggregateChart = (props) => {
    const [title, setTitle] = useState('Thống kê doanh thu 7 ngày qua');
    const [path, setPath] = useState('last7day');
    const dispatch = useDispatch();
    const aggregateByTime = useSelector(state => state.aggregateByTimeResponse);

    useEffect(() => {
        dispatch(requestApiAggregateByTime(path));
    }, [path])
    console.log(aggregateByTime);

    return (
        <div style={{marginTop: 15}}>
            <Row>
                <h5 style={{textAlign: 'center', width: '100%', color: 'teal'}}>{title}</h5>
            </Row>

            <Row>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Button style={{backgroundColor: (path !== 'last7day')? 'grey': 'seagreen'}} 
                        onClick={() => { setPath('last7day'); setTitle('Thống kê doanh thu 7 ngày qua') }}>
                        7 ngày qua
                    </Button>
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Button  style={{backgroundColor: (path !== 'last7month')? 'grey': 'seagreen'}}
                        onClick={() => { setPath('last7month'); setTitle('Thống kê doanh thu 7 tháng qua') }}>
                        7 tháng qua
                    </Button>
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Button  style={{backgroundColor: (path !== 'last7year')? 'grey': 'seagreen'}}
                        onClick={() => { setPath('last7year'); setTitle('Thống kê doanh thu 7 năm qua') }}>
                        7 năm qua
                    </Button>
                </Col>
            </Row>
        </div>    
    )
}

export default AggregateChart;