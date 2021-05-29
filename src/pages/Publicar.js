import React from 'react';
import MDEditor from '@uiw/react-md-editor';

function Publicar() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [value2, setValue2] = React.useState("**Hello world2!!!**");
    return (
        <>
            <div className="header-publicar">
                <a href="/" class="logo">LOGO</a>
                <div class="contratar-remotamente">Contratar Remotamente</div>
                <div class=""></div>
            </div>

            <div className="card-lets-start">
                

                <div className="group-heading">
                    BORA LÁ
                </div>

                <span className="name-input">NOME DA EMPRESA*</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                    Marca / nome comercial da sua empresa: sem Inc., Ltd., B.V., Pte., Etc.
                </span>

                <br/>
                <br/>

                <span className="name-input">POSIÇÃO*</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                    Especifique como cargo único, como "Gerente de Marketing" ou "Desenvolvedor NODEJS", não uma frase como "Procurando PM / Biz Dev / Manager". Sabemos que seu trabalho é importante, mas NÃO ESCREVA EM MAIÚSCULAS COMPLETAS. Se postar várias funções, crie vários anúncios de emprego. Um posto de trabalho é limitado a um único trabalho. Nós permitimos apenas empregos reais, absolutamente nenhum curso do tipo MLM "aprenda a trabalhar online", por favor.
                </span>

                <br/>
                <br/>

                <span className="name-input">TAG PRIMARIA</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                Esta tag primária é exibida primeiro e aumenta a visibilidade nas seções principais. Seu trabalho é mostrado em todas as páginas marcadas com embora. Por exemplo. se você marcá-lo como PHP, será exibido para trabalhos de PHP remotos etc.
                </span>

                <br/>
                <br/>
                <span className="name-input">EXTRA TAGS (SEPARADO POR VÍRGULA)*</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                Use tags como indústria e pilha de tecnologia e separe várias tags por vírgula. Palavras curtas são preferidas. As primeiras 3 tags são mostradas no site, as outras tags não, mas o trabalho será mostrado em cada página específica de tag (como / remote-react-jobs). Também geramos tags automaticamente depois de postar / editar.
                </span>

                <br/>
                <br/>
                <span className="name-input">O TRABALHO ESTÁ RESTRITO AO LOCAL?</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                    Se você deseja apenas contratar pessoas de um local ou fuso horário específico, este trabalho remoto é restrito (por exemplo, Europa, Estados Unidos ou CET Timezone). Se não estiver restrito, deixe como "Mundial". Quanto menos restrito for, mais candidatos você receberá. Mantê-lo "mundialmente" é altamente recomendado, pois você terá acesso a um pool mundial de talentos.
                </span>

            </div>

            <div className="card-lets-start">
                

                <div className="group-heading">
                    DETALHES DO TRABALHO
                </div>

                <span className="name-input">LOGO DA EMPRESA (.JPG OR .PNG)</span><br/>
                <div className="sup-file-logo">
                    <p>💾 Upload</p>
                    <input type="file" name="company_logo" class="input_company_logo" accept=".jpg,.png"></input>
                </div>
                <br/>
                <br/>

                <span className="name-input">SALÁRIO OU REMUNERAÇÃO ANUAL EM USD (OU ANUALIZADO, EM USD EQUIVALENTE)*</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">Legalmente obrigatório. Desde 2021, as ofertas de emprego remotas são legalmente obrigadas a mostrar uma faixa de remuneração salarial em muitos países. Além disso, o Google não indexa mais empregos sem dados de salários. Se for um show de curto prazo, use o equivalente anual. Por exemplo, se for um projeto de 2 semanas por $ 2.000, o equivalente anual seria $ 2.000 / 2 semanas * 52 semanas = $ 48.000. Use o equivalente em dólares americanos. Ainda não temos a moeda incorporada e gostaríamos de usar esses dados salariais para mostrar as tendências salariais no trabalho remoto. O OK remoto iniciou o push para #OpenSalaries.</span>

                <br/>
                <br/>

                <span className="name-input">DESCRIÇÃO DO TRABALHO*</span><br/>
                <div className="container">
                    <MDEditor
                        value={value}
                        onChange={setValue}
                    />
                </div>
                
                <br/>
                <br/>
                <span className="name-input">COMO APLICAR*</span><br/>
                <div className="container">
                    <MDEditor
                        value={value2}
                        onChange={setValue2}
                    />
                </div>

                <br/>
                <br/>
                <span className="name-input">URL DE APLICAÇÃO*</span><br/>
                <input data-required="required" autoComplete="off" type="text" className="input_company"/><br/>
                <span className="description-name-input">
                    Os URLs de inscrição com um formulário que um candidato pode preencher geralmente recebe muito mais candidatos do que as pessoas que se inscrevem por e-mail (abaixo). Uma boa plataforma para os candidatos se inscreverem é Lever.co (não afiliado).
                </span>

            </div>

        </>
    )
}

export default Publicar;