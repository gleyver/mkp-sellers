import React from "react";

function handleCardClick(e) {
    let indexVagaClass = `.vaga-${e.currentTarget.dataset.id}`;
    let indexDescriptionClass = `.description-${e.currentTarget.dataset.id}`;

    const isActive = document.querySelector(indexVagaClass).classList.contains('active');

    if (isActive) {
        document.querySelector(indexVagaClass).classList.remove("active");
        document.querySelector(indexDescriptionClass).classList.remove("show");
    } else {
        let elements = document.querySelectorAll(".card");
        [].forEach.call(elements, (el) => {
            el.classList.remove("active");
        });

        let elem = document.querySelectorAll(".description-opportunity");
        [].forEach.call(elem, (el) => {
            el.classList.remove("show");
        });

        document.querySelector(indexVagaClass).classList.add("active");
        document.querySelector(indexDescriptionClass).classList.add("show");

    }
}

function Card(props) {
    return (
        <>
            <div
                data-id={props.opportunities.id}
                onClick={handleCardClick.bind(this)}
                className={`card vaga-${props.opportunities.id}`}>
                
                <div className="suporte-image">
                    <div className="image">
                        <img src={props.opportunities.image} alt={props.opportunities.image} />
                    </div>
                    <div className="sup-description">
                        <p className="company">{props.opportunities.company}</p>
                        <p className="opportunity"><strong>{props.opportunities.jobOpportunity}</strong></p>
                    </div>
                </div>
                <div className="sup-tags-skills">
                    <div className="tag">PHP</div>
                    <div className="tag">Python</div>
                    <div className="tag">Java</div>
                    <div className="tag">PHP</div>
                    <div className="tag">Web Full Stack</div>
                </div>
                <div className="sup-button">
                    <a className="button-apply" target="blank" href={props.opportunities.linkOpportunity}> apply </a>
                </div>
            </div>
            <div className={`description-opportunity description-${props.opportunities.id}`}>
                {props.opportunities.description}

                <div class="apply-opportunity">
                    <a className="button-apply" target="blank" href={props.opportunities.linkOpportunity}> apply </a>
                </div>
            </div>
        </>
    )
}

export default Card;