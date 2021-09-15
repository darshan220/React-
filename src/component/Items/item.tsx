type props = {
    data: {
        id: number;
        ArtistName: string;
        SongName:string;
        ArtistUrl:string;
        Price:number;
    }[],
    updateCartItem(id:number): void
    
}

const Music = ({data,updateCartItem}: props) => {

    return(
        <section>
            {data.map((item) => {
                const {id,ArtistName,SongName,ArtistUrl,Price} = item;

                return <div className="item">
                        <img src={ArtistUrl} alt=""></img>
                        <h4>{ArtistName}</h4>
                        <h2>{SongName}</h2>
                        <h4>INR: {Price}</h4>

                        <div className="btnctn">
                            <button className="cart" onClick={()=> updateCartItem(id)}>Add to cart</button>
                        </div>
                    </div>
            })
        }
        </section>
    )
}

export default Music

