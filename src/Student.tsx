import "./student.css"
export default function Student(props: { name: string; age: number }) {
    return (
        <div className="student">
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
        </div>
    )
}