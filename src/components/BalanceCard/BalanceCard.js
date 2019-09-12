
import React, { PureComponent } from 'react';
import {  AreaChart, Area, Tooltip} from 'recharts';

import './BalanceCard.css';

class Chart extends PureComponent {

    render() {
      return (
        <AreaChart
          width={312}
          height={100}
          data={this.props.diagram}
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={this.props.color} fill={this.props.color} />
        </AreaChart>
      );
    }
  }

class BalanceCard extends React.Component {

    render () {
        return (
            <div className='card'>
                <div className='card__header'>{this.props.cardData.id}</div> 
                <div className='card__data'>
                    <div className='card__balance'>
                        <div className='card__sum'>{this.props.cardData.sum}</div>
                        <div className='card__currency'>{this.props.cardData.currency}</div>
                    </div>
                    <div className='card__stat'>
                        <div className='card__percent'>+40%</div>
                        <div className='card__date'>this week</div>
                    </div>
                </div>
                <div className='card__diagram'>
                    <Chart diagram={this.props.cardData.diagram} color={this.props.cardData.color}/>
                </div>
            </div>
        )
    }
}

export default BalanceCard;








