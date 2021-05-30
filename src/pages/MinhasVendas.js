import React from 'react';
import { Chart } from "react-google-charts";

function MinhasVendas() {
    return (
        <>
            <div className="header-publicar">
                <a href="/" className="logo">LOGO</a>
                <a href="/minhas-vendas" className="menu">minhas vendas</a>
                <a href="/comparativo" className="menu">comparativo</a>
            </div>
            <div className="sup-graph">
                <div className="my-sale">
                    <div className="quantidade-vendas-periodo">
                        <div className="card-vendas-por-periodo">
                            <h2 className="title-dashboard"> Total de vendas por periodo</h2>
                            <div style={{ padding: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
                                <Chart
                                    width={'100%'}
                                    height={'450px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Total de vendas por período', '7 dias', '30 dias', '60 dias'],
                                        ['Valor das vendas', 8175000, 5500000, 10000000],
                                    ]}
                                    options={{
                                        title: 'Quantidade total de vendas por período',
                                        chartArea: { width: '50%' },
                                        hAxis: {
                                            title: 'Total de vendas por período',
                                            minValue: 0,
                                        },
                                        vAxis: {
                                            title: 'City',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="quantidade-vendas-departamento">
                        <div className="card-vendas-por-periodo">
                            <h2 className="title-dashboard"> Quantidade de vendas por departamento </h2>

                            <Chart
                                width={'100%'}
                                height={'450px'}
                                chartType="Table"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Department', 'Revenues Change'],
                                    ['Shoes', 10700],
                                    ['Sports', -15400],
                                    ['Toys', 12500],
                                    ['Electronics', -2100],
                                    ['Food', 22600],
                                    ['Art', 1100],
                                ]}
                                formatters={[
                                    {
                                        type: 'ColorFormat',
                                        column: 1,
                                        options: {
                                            width: 120,
                                        },
                                        ranges: [
                                            [-20000, 0, 'white', 'orange'],
                                            [20000, null, 'red', '#33ff33'],
                                        ],
                                    },
                                ]}
                                options={{
                                    allowHtml: true,
                                    showRowNumber: true,
                                    width: '100%',
                                    height: '100%',
                                }}
                                rootProps={{ 'data-testid': '3' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MinhasVendas;