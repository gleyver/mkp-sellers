import React from "react";
import Card from './Card';

let skus =
[
    {
        id: "1",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "2",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "3",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "4",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "5",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "6",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "7",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "8",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "9",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "10",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
    {
        id: "11",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        brand: "Refrigeração",
        jobProduct: "Geladeira Brastemp",
        languages: ["Refrigerador", "Geladeira"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkProduct: "https://viavarejo.gupy.io/",
    },
];

class ListCard extends React.Component {
    render() {
        return (
            skus.map((i) => (
                <Card
                    key={i.id}
                    products={i}
                />
            ))
        )
    }
}

export default ListCard;