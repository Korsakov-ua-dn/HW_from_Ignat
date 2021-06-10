import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (!e.currentTarget.value) {
            setError(true)
        }
        setName(e.currentTarget.value) // need to fix
        console.log(name);
        
    }
    const addUser = (name: string) => {
        alert(`Hello ${name} !`) // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
