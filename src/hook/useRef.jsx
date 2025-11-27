//useRef

// 컴포넌트에서 변경 간으한 값을 저장하고 관리할 수 있게함

import {useState, useRef, useEffect} from "react";

function Ref(){

    //1. useState 와 useRef 차이점
    // const [count, setCount] = useState(0);


    // const countRef = useRef(0);
    // const counter = ()=> {
    //     setCount(count + 1)
    // }

    // const counterRef = ()=> {
    //     countRef.current = countRef.current + 1;
    // }

    // //ref 객체는 쳑ㄱㄷ
    
    // console.log(countRef);
    // console.log('카운트되는중 ...')

    // return (
    //     <>
    //     <div>
    //         <h2>useRef</h2>
    //         <p>count: {count}</p>
    //         <p>Ref: {countRef.current}</p>
    //         <button onClick={counter}>state</button>
    //         <button onClick={counterRef}>Ref</button>
    //     </div>

    //     </>
    // )



    // 2. useRef와 변수 차이점 

    // Ref 는 랜더링 ㅗ디 ㄹ때마다 랜더링 된 이후에도 값이 유지됨
    //변수는 랜더링될 때마다 초기화됨
    //이유는 useRef는 리액트에서 관리하는 객체임, 때문에 값이 변경되어도 컴포넌트가 다시 랜더링이 되지 않음
    // const countRef = useRef(0);
    // let countVar = 0;

    // const [render, setRender] = useState(0);

    // const handleRef = ()=> {
    //     countRef.current = countRef.current + 1;
    //     console.log('Ref:', countRef.current);
    // }
    // const handleVar = ()=> {
    //     countVar = countVar + 1;
    //     console.log('var:', countVar)
    // }

    // return (
    //     <>
    //         <div>
    //             <p>
    //                 Ref: {countRef.current}
    //             </p>
    //             <p>
    //                 Var: {countVar}
    //             </p>
    //             <p>render: {render}</p>
    //             <button onClick={()=> {setRender(render + 1)}}>렌더링</button>
    //             <button onClick={handleRef}>Ref 카운트</button>
    //             <button onClick={handleVar}>Var 카운트</button>
    //         </div>
    //     </>
    // )



    // 3. input focus되게
    const inputRef = useRef();

    useEffect(()=>{
        // console.log(inputRef.current.focus)
        inputRef.current.focus(); //인풋창 포커스 주기
    }, [])

    const login = ()=> {
        // alert('안뇽,' + inputRef.current.value)
        alert(`안뇽, ${inputRef.current.value}`);
        inputRef.current.value = ""; //입력값 초기화
        inputRef.current.focus(); //포커스 다시 주기
    }
    return (
        <>
            <div>
                <input ref={inputRef} type="text" placeholder="usename" />
                <button onClick={login}>
                    로그인
                </button>
            </div>
        
        </>
    )
}

export default Ref;