import React from "react";
import Card from './Card';

let vagas =
[
    {
        id: "1",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Facilities Sênior",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "2",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Coordenador(a) Inteligência Senior",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "3",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Codenador(a) de Relacionamento",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "4",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Engenheiro de Machine Learning Pleno",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "5",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Full Developer",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "6",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Vendedor",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "7",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Back-End Developer",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "8",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Front-End Developer",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "9",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Software Enginner Senior",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "10",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Full Stack Developer",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
    {
        id: "11",
        image: "https://www.meioemensagem.com.br/wp-content/uploads/2021/04/nova-marca-viavarejo-cred-divulg.jpg",
        company: "Via",
        jobOpportunity: "Software Enginner Junior",
        languages: ["PHP", "Python", "Java"],
        description: "lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit ametlorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet",
        linkOpportunity: "https://viavarejo.gupy.io/",
    },
];

class ListCard extends React.Component {
    render() {
        return (
            vagas.map((i) => (
                <Card
                    key={i.id}
                    opportunities={i}
                />
            ))
        )
    }
}

export default ListCard;