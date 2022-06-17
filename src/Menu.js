
const Menu=({menu})=>{
    
    return(
        menu.map(item=>{
            const {id,desc,img,price,title}=item
            
            return(
                <div className="menu-item" key={id}>
                    <img src={img} alt={img} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <p className="price">${price}</p>
                        </header>
                        <p className="item-text">{desc}</p>
                    </div>
                </div>
            )
        })

        
    )
}
export default Menu