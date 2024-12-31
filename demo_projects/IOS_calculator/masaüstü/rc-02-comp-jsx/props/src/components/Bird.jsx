const Bird = ({name,img, isBlueEyed})=>{
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" width="300px" />
            <p>Blue eyed?:{isBlueEyed ? "Yes" : "No"}</p>
        </div>
    )
}

export default Bird;