import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) =>
{
    const {id, name, parts} = course
    console.log('id', id, 'name', name);
    return (
        <div>
            <Header name={name} key={id} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default Course