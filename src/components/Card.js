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

        let elem = document.querySelectorAll(".description-product");
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
                data-id={props.products.id}
                onClick={handleCardClick.bind(this)}
                className={`card vaga-${props.products.id}`}>
                
                <div className="suporte-image">
                    <div className="image">
                        <img src={props.products.image} alt={props.products.image} />
                    </div>
                    <div className="sup-description">
                        <p className="brand">{props.products.brand}</p>
                        <p className="product"><strong>{props.products.jobProduct}</strong></p>
                    </div>
                </div>
                <div className="sup-tags-skills">
                    <div className="tag">Refrigerador</div>
                    <div className="tag">Geladeira</div>
                </div>
                <div className="sup-precos">
                    <div class="preco">
                        <label><b>Preço mínimo</b></label><br/>
                        <span class="blue">R$ 25,00</span>
                    </div>
                    <div class="preco">
                        <label><b>Preço médio</b></label><br/>
                        <span class="yellow">R$ 55,00</span>
                    </div>
                    <div class="preco">
                        <label><b>Preço máximo</b></label><br/>
                        <span class="red">R$ 70,00</span>
                    </div>
                </div>
            </div>
            <div className={`description-product description-${props.products.id}`}>
                {props.products.description}

                <div class="apply-product">
                    <a className="button-ver-mais" target="blank" href={props.products.linkProduct}> ver mais </a>
                </div>
            </div>
        </>
    )
}

export default Card;