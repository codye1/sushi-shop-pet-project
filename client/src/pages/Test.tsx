import React, { useState } from 'react';
import { useGetUsersQuery, useLoginMutation, useLogoutMutation, useRefreshSMSCodeMutation, useSendMutation } from '../API';

const Test = () => {
    const [number,setNumber] = useState<string>("")
    const [code,setCode]=useState<number>(1322)
    const [login] = useLoginMutation()
    const [send] = useSendMutation()
    const [user,setUser]=useState("")
    const {data:users,refetch}=useGetUsersQuery()
    const [logout] = useLogoutMutation()
    const [refreshSMSCode]=useRefreshSMSCodeMutation()
    async function handleLogin(number:string,code:number) {

        const result  = await login({number,code})

        console.log(result) ;
        setUser(result.data.number)

        result && localStorage.setItem("token",result.data.accessToken)
    }

    return (
        <div>

            <p>Залогиненый юзер: {user}</p>
            <p>Юзеры:</p>
            {users && users.map((user)=> <p>{user.number}</p> )}
            <input style={{margin:"30px"}} value={number} onChange={(event)=>setNumber(event.target.value)} type="text" />
                <button onClick={()=>{
                    send(number)
                }} className='button'>
                    Отправить
                </button>
            <input style={{margin:"30px"}} value={code} onChange={(event)=>setCode(parseInt(event.target.value))} type="text" />
            <button onClick={()=>{
                    handleLogin(number,code)
                }} className='button'>
                    Залогинится
            </button>
            <button style={{marginTop:"15px"}} onClick={()=>{
                    refetch()
                }} className='button'>
                   Обновить юзеров
            </button>
            <button  style={{marginTop:"15px"}} onClick={()=>{
                    logout()
                }} className='button'>
                   Logout
            </button>
            <button  style={{marginTop:"15px"}} onClick={()=>{
                    refreshSMSCode(number)
                }} className='button'>
                   RefreshSMSCode
            </button>
        </div>
    );
};

export default Test;