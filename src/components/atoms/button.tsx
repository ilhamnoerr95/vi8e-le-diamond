export const Button = (props: {
    title: string, color: string, backgroundColor:string
})=> {

    return (
        <button 
            style={{
            color: props.color,
            padding: "8.5px 25px",
            backgroundColor: props.backgroundColor,
             maxWidth: "256px"}}>
                {props.title}
             </button>
    )
}