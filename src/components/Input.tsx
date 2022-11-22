import React, {ChangeEvent} from 'react';


type InputProps = {
    setTitle: (title: string) => void,
    title: string
}
export const Input = (props: InputProps) => {

    const onChangeInputHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            props.setTitle(event.currentTarget.value)

        }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

