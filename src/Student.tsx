export default function Student(props: { name: string; age: number }) {
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
        </div>
    )
}