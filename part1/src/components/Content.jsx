import Part  from "./Part"

const Content = ( props ) => {

    
    console.log( props )


return (      

    <div>

    {/* { props.part1.part } */}

    <Part part={ props.part1.part } exercises={ props.part1.exercises } />
    <Part part={ props.part2.part } exercises={ props.part2.exercises } />
    <Part part={ props.part3.part } exercises={ props.part3.exercises } />

    </div>

)
}

export default Content