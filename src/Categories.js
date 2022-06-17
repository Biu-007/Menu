
const categories = ({ categories,diffMenu })=>{
    return(
        categories.map((category,index)=>{
            return (
            <button 
                className="filter-btn"
                    onClick={() => diffMenu(category)}
                key={index}>
                    {category}
                </button>
            )
        })

    )
}
export default categories