import React from 'react' 
import AggregateHeader from './aggregate-header'
import AggregateChart from './aggregate-chart'



const Aggregate = (props) => {

    

    return(
        <div style={{marginLeft: 200, padding: '0 15px'}}>
            <AggregateHeader/>
            <AggregateChart/>
        </div>
    )
}


export default Aggregate;