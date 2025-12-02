// useMemo 

// 메모이제이션 동일한 값을 리턴하는 함수를 반복 호출할때 이전에 계산된 값을 저장을 해두고 필요할 때 마다 또 다시 계산 하지 않고 메모리에서 꺼내서 재사용 하는 기법
// 더 쉽게 말해 맨처음에 랜더링할 때 캐싱해두고 그 값이 필요할 때 마다 캐시해서 꺼내서 사용함

import {useState, useMemo, useEffect} from 'react';

// function calculate(num) {
//     console.log('연산 진행중...')
//     for(let i = 0; i < 100000000; i++){}  //복잡한 연산을 한다고 시뮬레이션하는 것 가정하는 것
//         return num + 10000 //계산 값
// }
function calculate02(num) {
    console.log('빠른연산 진행중...')
        return num + 1 //계산 값
}

function UseMemo(){

    // const [number, setNember] = useState(1);
    const [EzNumber, setEzNember] = useState(1);

    const [isCheolsoo, setIscheolsoo] = useState(true);
    
    // const sum = calculate(number);
    // const sum = useMemo(()=>{
    //     return calculate(number)
    // },[number]); //이럴때 쓰는 것 얘만 돌아가게

    const sum02 = calculate02(EzNumber);

    const student = useMemo(()=> {
        console.log('학생정보 객체만듬')
        return {
            name: isCheolsoo ? "철수" : "영희"
        }
    },[isCheolsoo]) //->의존성 배열

    useEffect (()=> {
        console.log('학생 이름이 변경됨:', student.name);
    }, [student])


    return (
        <>
        {/* <div>
            <h2>계산기</h2>
            <input 
            type="number" 
            value={number}
            onChange={(e)=>{setNember(parseInt(e.target.value))}} //parseInt: 문자열을 숫자열로 바꿔주는 것
            />
            <span>+ 1000 = {sum}</span>
        </div> */}
        <div>
            <h2>빠른 계산기</h2>
            <input 
            type="number" 
            value={EzNumber}
            onChange={(e)=>{setEzNember(parseInt(e.target.value))}} //parseInt: 문자열을 숫자열로 바꿔주는 것
            />
            <span>+ 1 = {sum02}</span>
        </div>

        <div>
            <h2>학생이름</h2>
            <div>
                <p>이름 : {student.name}</p>
                <button onClick={()=> setIscheolsoo(!isCheolsoo)}>이름 변경</button>
            </div>
        </div>
        </>
    )
}

export default UseMemo;

//결국 두개다 렌더링 되고 있어서 느린 것임 그럴때 useMemo 사용

// 문자열 , 숫자, 불리언 이런 애들은 값이 객체 형태로 담겨져 있는게 아니라 바로 객체로 담기는게 아님 주소가 담기는 것 객체는 주소가 항상 새로 생기는 것  매번 렌더링이 새로 됨