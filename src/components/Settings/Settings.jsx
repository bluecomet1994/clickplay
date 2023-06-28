import React, {memo} from 'react'
import { ChoseClickType } from './ChoseClickType'
import { Timer } from './Timer'

export const Settings = memo(  ({changeTimer, changeClickType,clickType, timer,testType}) => {
  return (
    <>
    {/* {testType !== 'Scroll' ? <div className='DashBoardMain'> */}
        {/* <Timer changeTimer={changeTimer} timer={timer} />  */}
       {/* {testType === 'Click' ? <ChoseClickType changeClickType={changeClickType} clickType={clickType}/> : null}  */}
    {/* </div>: null} */}
    </>
  )
})
