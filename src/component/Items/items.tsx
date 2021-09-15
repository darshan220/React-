import Item from './item'

type props = {
    data: {
        id: number;
        ArtistName: string;
        SongName:string;
        ArtistUrl:string;
        Price:number;
    }[],
    updateCartItem: (id:number)=> void
    
}

const Musics = ({data,updateCartItem}: props) => {
    return(
        <section>
            <div className="items">
                <Item data={data} updateCartItem={updateCartItem}/>
            </div>
        </section>
        
    )
}

export default Musics