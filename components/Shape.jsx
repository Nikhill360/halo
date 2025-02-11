import React from 'react'

const Shape = () => {
  return (
    <div>
      <div className="absolute  h-[36vw] w-[46vw] right-0">
        <div className="absolute w-full h-full bg-[#2b94f5] rounded-l-[50%] blur-[20px]"></div>
        <div className="absolute w-[30vw] h-[30vw] bg-[#2b94f5] rounded-[50%] blur-[35px] animate-[anime2_4s_linear_alternate_infinite]"></div>
        <div className="absolute w-[30vw] h-[30vw] bg-[#2b94f5] rounded-[50%] blur-[25px] animate-[anime1_4s_linear_alternate_infinite]"></div>
      </div>
    </div>
  )
}

export default Shape
// #fe380e