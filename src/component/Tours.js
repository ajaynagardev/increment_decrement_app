import '../style/tours.css';
import Card from './Card';
function Tours(tours){
    return(
        <div>
            <h2>Plan with love babbar</h2>
            <div>
                {
                    tours.map( (tour)=>{
                        return <Card {...tour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;