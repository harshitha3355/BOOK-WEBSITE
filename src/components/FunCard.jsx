import './FunCard.css';

function FunCard({fun}){
    return(
        <>
        <div className='fun-container'>
            <div className='wrapper'>
                <img src={fun.image} alt={fun.title} className="fun-img" />
                <h2 className="fun-title">{fun.title}</h2>
            </div>
            <h2 className='fun-button'> {fun.buttonText}</h2>
        </div>
        </>
    )
}

export default FunCard;