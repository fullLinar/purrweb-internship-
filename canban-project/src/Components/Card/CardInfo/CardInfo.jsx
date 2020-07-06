import React from "react"


const CardInfo = (props) => {
    return (
       <>
        <div className="card-info" >
        <div className="test" onClick = {props.showCardInfo}/>
            <div className="card-info__wrap" id = "card-info__wrap" >
                <span className="card-info__close" onClick = {props.showCardInfo}>&times;</span>
                <h2 className="card-info__title">{props.cardTitle}</h2>
                
                <div className="card-info__descr">
                    <h3 className="card-info__descr-title">Description:</h3>
                    <p className="card-info__descr-text">
                    {props.cardDescr}
                    </p>
                    <textarea 
                    ref = {props.descrInputRef}
                    name="description"
                    rows = "3"
                    className ="card-ifo__dsecr-text"></textarea>
                    <button className ="card-info__descr-btn"
                            onClick = {props.addNewDescription}
                    >
                        Add description
                    </button>
                </div>
                <div className="card-info__comments">
                    <h3 className="card-info__comments-title">
                        Comments:
                    </h3>
                    <div className="card-info__comments-items"></div>
                </div>
            </div>
        </div>
       </>
    )
}

export default CardInfo