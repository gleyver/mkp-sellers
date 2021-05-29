import autoprefixer from 'autoprefixer';
import React from 'react';
import { Chart } from "react-google-charts";

function DashBoard() {
    return (
        <>
            <div className="header-publicar">
                <a href="/" className="logo">LOGO</a>
                <div className="meu-dashboard">Meu Dashboard</div>
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
                <hr />
                <div className="my-sale">
                    <div>
                        <input type="search" placeholder="busca pelo sku"/>
                    </div>
                    <div className="quantidade-vendas-periodo">
                        <div className="card-vendas-por-periodo">
                            <h2 className="title-dashboard"> Quantidade de vendas por produto</h2>
                            <div style={{ padding: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
                                <Chart
                                    width={'100%'}
                                    height={'450px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Total de vendas por produto', '7 dias', '30 dias', '60 dias'],
                                        ['Valor das vendas', 8175000, 5500000, 10000000],
                                    ]}
                                    options={{
                                        title: 'Quantidade de vendas por produto',
                                        chartArea: { width: '50%' },
                                        hAxis: {
                                            title: 'Quantidade de vendas por produto',
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
                            <h2 className="title-dashboard"> Variação do preço do produto </h2>

                            <Chart
                                width={'100%'}
                                height={'450px'}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    [
                                        { type: 'number', label: 'x' },
                                        { type: 'number', label: 'values' },
                                    ],
                                    [1, 100,],
                                    [2, 120,],
                                    [3, 130,],
                                    [4, 90,],
                                    [5, 70,],
                                ]}
                                options={{
                                    title: 'Line intervals, default',
                                    curveType: 'function',
                                    lineWidth: 4,
                                    intervals: { style: 'line' },
                                    legend: 'none',
                                    // Difference here only with line intervals
                                    interval: {
                                        i0: { style: 'line', color: '#D3362D', lineWidth: 0.5 },
                                        i1: { style: 'line', color: '#F1CA3A', lineWidth: 1 },
                                    },
                                }}
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;