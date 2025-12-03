//useCallback 
//메모이제이션 역할
//특정 함수가 의존성 배열에 명시된 값이 변경될때만 새로 생성되도록 함 그래서 불필요한 함수 재생성을 방지함

import { useCallback, useEffect, useState } from "react";
import Box from "./Box";

function UseCallback(){
    const [size, setSize] = useState(100);

    // 모드 전환
    const [isDark, setIsDark] = useState(false);

    const boxStyle = useCallback (
        ()=>{
            return{
                 width: `${size}px`,
                height: `${size}px`,
                backgroundColor: "green",
            }
        },[size]
    );
    

    // const boxStyle = ()=> {
    //     return{
    //         width: `${size}px`,
    //         height: `${size}px`,
    //         backgroundColor: "green",
    //     }
    // }

    return (
        <>
        <div style={
            {
                backgroundColor: isDark ? '#333' : '#f0f0f0',
                padding: '20px',
            }
            }
        >
            {/* 모드 전환버튼 */}
        <button onClick={()=> {setIsDark(!isDark)}}>모드전환</button>

        <button onClick={()=>setSize(size + 10)}>
            박스 커짐
        </button>

        <button onClick={()=>setSize(size - 10)}>
            박스 작아짐
        </button>

            
        <Box boxStyle = {boxStyle}/>
        </div>
        </>
    )
}

export default UseCallback


//useMemo와 useCallback 차이점 : 외관상 결과값 똑같지만 작동원리가 다름
//useMemo는 값을 메모하는 것: 싹다 가져가서 결과값만 가지고오는 것
//useCallback 함수를 메모함: 이 객체 자체를 담아두는 것 안에서 계산하진않음 함수 자체를 저장하는 것 그 안에서 다시 작동하지 않음
//작업을 할 때 나 혼자만 하는 것 아님 다른 사람들과 협업 이 소스를 보게 될것 내가 결과 값을 가지고 올 거다 useMemo 함수 자체를 저장할 거다 할 때 useCallback 쓰는 것

// React.memo 
// props