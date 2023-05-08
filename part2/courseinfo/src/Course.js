import Header from "./Header";
import Content from "./Content";

const Course = ({course}) =>
{
    const {id, name, parts} = course
    console.log('id', id, 'name', name);
    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
        </div>
    )
}

export default Course