import Text from '../../Components/Text/Text'
import React from 'react'

function weather() {
  return (
    <div>
        <div className="wraper">
        <div className="weatherDetwrpr">
              <Text text="Wind" className="light" />
              <Text text={data.currentConditions.windspeed} className="regularText" />
            </div>
        </div>
    </div>
  )
}

export default weather