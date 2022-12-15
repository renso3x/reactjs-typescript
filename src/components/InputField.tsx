import './styles.css'

import { useRef } from 'react';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ 
    todo, 
    setTodo,
    handleAdd
}: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form 
            className="input" 
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
        >
            <input 
                ref={inputRef}
                type="input" 
                value={todo} 
                placeholder="Enter a task" className="input__box" 
                onChange={e => setTodo(e.target.value)}
            />
            <button 
                className="input_submit">Go</button>
        </form>
    )
}

export default InputField