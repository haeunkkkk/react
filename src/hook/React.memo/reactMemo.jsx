// React.memo 
// 자식  컴넘포넌트가 변화가 없으면 움직이지마! 기존 데이터 그대로 반환해줌
//컴포넌트를 메모이제이션해서 불필요한 리랜더링을 방지하는 고차 컴포넌트 
//고차 컴포넌트 : 
//React.memo 를 언제 사용하냐면 랜더링이 필요없는 애한테 사용 props 가 자주 안바뀌는 컴포넌트, 랜더링이 오래걸리는 컴포넌트 (로직이 복잡한 컴포넌트가 오래걸림),  같은 props로 자주 랜더링이 되는 컴포넌트

// 언제 사용 가능한지: props check를 통해서만 랜더링 여부를 결정함
//만약 컴포넌트 내부에서 useState,  useContext, useReducer 같은 훅을 사용하여 상태를 관리할때는 상태가 변경되면 props와 상관없이 컴포넌트는 리랜더링이 됨


import { useState, useMemo } from "react"
import Child from "./Child"

function ReactMemo(){

    const [parentAge, setParenAge] = useState(30);
    // const [childAge, setChildAge] = useState(5);

    console.log('부모 컴포넌트 작동...')

    const name = useMemo(()=> {
        return {
            firstName: '이',
            lastName: '철수'
        }
    }, []);
    //빈 배열: 처음 랜더링할 때만 객체 생성


    return (
        <>
        <div style={
            {
                backgroundColor: 'green',
                padding: '50px',
            }
        }>
            <h2>부모 컴포넌트</h2>

            <p>
                부모 나이 : {parentAge}
            </p>
            <button onClick={()=>{setParenAge(parentAge + 1)}}>
                부모 나이  카운트
            </button>
            {/* <button onClick={()=>{setChildAge(childAge + 1)}}>
                자식나이 카운트
            </button> */}
            {/* 자식 컴포넌트 */}
            <Child name={name} />

        </div>
        </>
    )
}

export default ReactMemo