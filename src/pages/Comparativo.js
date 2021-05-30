import React from 'react';
import { Chart } from "react-google-charts";

function Comparativo() {
    return (
        <>
            <div className="header-publicar">
                <a href="/" className="logo">LOGO</a>
                <a href="/minhas-vendas" className="menu">minhas vendas</a>
                <a href="/comparativo" className="menu">comparativo</a>
            </div>
            <div className="sup-graph">
                <div className="my-sale">
                    <div>
                        <input type="search" placeholder="busca pelo sku" />
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

export default Comparativo;