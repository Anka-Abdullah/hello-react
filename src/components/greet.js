import react from "react";

const Greet = props => <div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
</div>


export default Greet