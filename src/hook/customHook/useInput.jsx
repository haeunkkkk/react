import { useState } from "react";

function UseInput(initialValue = '') {
    const [name, setName] = useState(initialValue);
    const changeName = (e)=> {
        setName(e.target.value)
    }
    const resetName = ()=> {setName('');};

    const [age, setAge] = useState(initialValue);
    const changeAge = (e)=> {
        setAge(e.target.value)
    }
    const resetAge = ()=> {setAge(initialValue);};
    return {name, changeName, resetName, age, changeAge, resetAge}
}

export default UseInput
