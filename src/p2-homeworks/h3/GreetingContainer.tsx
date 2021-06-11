import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
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
    const [error, setError] = useState<boolean>(true) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.trim() === '') {
            setName('')
            setError(true)
        } else {
            setError(false)
            setName(e.currentTarget.value) // need to fix
        }
    }
    
    const addUser = () => {
        if (!error) {
            addUserCallback(name.trim())
            alert(`Hello ${name} !`) // need to fix
            setName('')
            setError(true)
        }
    }

    const totalUsers = users.length // need to fix

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
