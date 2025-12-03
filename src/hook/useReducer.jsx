import { useReducer } from "react";

// useReducer 란 
// 상태 관리 하는 것 
// useState와 되게 비슷함
//그러나 useReducer은 복잡한 상태 로직을 다룰 때 더 적합함
//즉 복잡한 상태 관리를 단순화 하기 위해 사용됨
//useReducer는 비서 로봇과 같음
//현재 상태와 해야 할 일을 알려주면 비서 로봇이 알아서 상태를 업데이트 해줌

const reducer = (state, action) => {
    //state: 현재 내 지갑에 있는 현금
    //action: 액션객체, 요청사항을 실행시킴(10000원 입금, 5000원 출금) 
    console.log('할일 시작...', state, action);
    switch(action.type){
        case '입금':
        return state + action.payload;

        case '출금':
        return state - action.payload;

        case '파산':
        return 0;

        default: 
        return state;
    }
}



function UseReducer(){

    const [money, dispatch] = useReducer(reducer, 0);
    //money: 현재 내 지갑내에 있는 현금. 즉 잔액
    //dispatch: 함수 내가 얼마를 받을 건지 = 명령함수 비서에게
    //useReducer: 두가지 인자를 받음
    //reducer:실제로 작동하는 함수 
    //0: 초기값 ex) 0원


    return (
        <>
        <h2>현재 지갑 현금 : {money}원</h2>

        <button onClick={()=> 
            {dispatch(
                {
                    type:'입금', //액션객체 type속성은 필수
                    payload: 10000,//추가로 필요한 데이터를
                }

            )}
            }>10,000원 받음</button>
        <button onClick={()=> 
            {dispatch(
                {
                    type:'출금', //액션객체 type속성은 필수
                    payload: 5000,//추가로 필요한 데이터를
                }

            )}
            }>5,000원 지출</button>
        <button onClick={()=> 
            {dispatch(
                {
                    type:'파산', //액션객체 type속성은 필수
                }

            )}
            }>리셋(0원)</button>

        </>
    )
}

export default UseReducer;