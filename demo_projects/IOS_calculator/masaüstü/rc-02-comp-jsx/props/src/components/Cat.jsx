const Cat = (props)=>{
    // ! destr. yöntemi ile tek tek props.name vs yazmamıza gerek kalmaz
    const {name, img, color = "teal",} = props;
    return(
       <>
       <h1>{name}</h1>
       <img src={img} alt="" width="300px"/>
       <p style={{backgroundColor: color}}>{color}</p>
   
       </>

    )
}

export default Cat;