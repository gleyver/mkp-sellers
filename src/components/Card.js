import React from "react";

function handleCardClick(e) {
    let indexProductClass = `.product-${e.currentTarget.dataset.id}`;
    let indexDescriptionClass = `.description-${e.currentTarget.dataset.id}`;

    const isActive = document.querySelector(indexProductClass).classList.contains('active');

    if (isActive) {
        document.querySelector(indexProductClass).classList.remove("active");
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

        document.querySelector(indexProductClass).classList.add("active");
        document.querySelector(indexDescriptionClass).classList.add("show");

    }
}

function hiddenPrecoAjustado(e) {
    let indexProductClass = `.product-${e.currentTarget.dataset.id}`;
    let indexDescriptionClass = `.description-${e.currentTarget.dataset.id}`;
    
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Deseja realmente ajustar o preço, após ajustar seu produto sumirá da lista de Ánalise de preços")) {
        document.querySelector(indexProductClass).style.display = "none";
        document.querySelector(indexDescriptionClass).style.display = "none";
    } else {

        let elem = document.querySelector(indexDescriptionClass);
        elem.classList.remove("show");
    }
}

function hidden(e) {
    let indexProductClass = `.product-${e.currentTarget.dataset.id}`;
    let indexDescriptionClass = `.description-${e.currentTarget.dataset.id}`;
    
    document.querySelector(indexProductClass).style.display = "none";
    document.querySelector(indexDescriptionClass).style.display = "none";
    
}

function Card(props) {
    return (
        <>
            <div
                data-id={props.products.idskureferencia}
                onClick={handleCardClick.bind(this)}
                className={`card product-${props.products.idskureferencia}`}>

                <div className="suporte-image">

                    <div className="image">
                        <img src="https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg" alt="imagem-via" />
                    </div>
                    <div className="sup-description">
                        <p className="brand">sku</p>
                        <p className="product"><strong>{props.products.idskureferencia}</strong></p>
                    </div>
                </div>
                <div className="sup-precos">
                    <div className="alerta-preco">
                        <h4>ALERTA PREÇO</h4>
                    </div>

                    <div className="suporte-precos">
                        <div className="preco-atual">
                            <label><b>Preço atual</b></label><br />
                            <span className="dark">R$ {props.products.valorAtual}</span>
                        </div>
                        <div className="preco">
                            <label><b>Preço mínimo</b></label><br />
                            <span className="blue">R$ {props.products.minVrVenda}</span>
                        </div>
                        <div className="preco">
                            <label><b>Preço médio</b></label><br />
                            <span className="yellow">R$ {parseFloat(props.products.mediaVrVenda).toFixed(2)}</span>
                        </div>
                        <div className="preco">
                            <label><b>Preço máximo</b></label><br />
                            <span className="red">R$ {props.products.maxVrVenda}</span>
                        </div>
                    </div>
                </div>
                <div className="sup-sugestao"> 
                    <h4><strong>SUGESTÃO</strong></h4>
                    <br/>
                    <p>
                        Recomendamos que ajuste o preço, 
                        para conseguir aumentar suas vendas em até 200%,
                        <span> clique aqui para fazer o ajuste </span>
                    </p>
                </div>
                <div className="btn-ignorar">
                    <button onClick={hidden.bind(this)}
                        data-id={props.products.idskureferencia}> ignorar </button>
                </div>
            </div>
            <div className={`description-product description-${props.products.idskureferencia}`}>
                <div className="alinha-descricao">
                    <label className="label-preco">PREÇO NOVO</label>
                    <input className="input-ajusta-preco" type="number" placeholder={props.products.minVrVenda} />
                    <button className="btn-ajusta-preco" onClick={hiddenPrecoAjustado.bind(this)}
                        data-id={props.products.idskureferencia}>AJUSTAR PREÇO</button>
                </div>
            </div>
        </>
    )
}

export default Card;