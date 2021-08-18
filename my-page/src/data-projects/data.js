import trybeWallet from "../images/trybe-wallet.png";
import movei from '../images/movie.png'
import customers from '../images/customers.png';
import trybeer from '../images/trybeer.png';

const projects = [
    {
        linkGit: "https://github.com/Guilherme-Almeidaa/Challenge-Customers",
        description: "Uma aplicação full-stack responsiva de cadastramento de clientes com uma tela de login com validação de token.",
        skills: [
            "React",
            "Responsividade",
            "Node.js",
            "Express",
        ],
        image: customers,
    },
    {
        linkGit: "https://github.com/Guilherme-Almeidaa/Trybe-Wallet/tree/master/Trybe-wallet",
        linkProject: "https://trybe-wallet-q3aso7ig4-guilherme-almeidaa.vercel.app",
        description: "Trybe Wallet -Uma carteira de controle de gastos com conversor de moedas.",
        skills: [
            "React",
            "Redux",
            "Code Review",
            "CSS"
        ],
        image: trybeWallet,
    },
    {
        linkGit: "https://github.com/Guilherme-Almeidaa/Trybeer",
        description: "Trybeer - Um app de delivery de cerveja full-stack.",
        skills: [
            "React",
            "Node.js",
            "Express",
            "Trabalho em equipe"
        ],
        image: trybeer,
    },
    {
        linkGit: "https://github.com/Guilherme-Almeidaa/Projects",
        linkProject: "https://movie-card-crud-f39a22tm7-guilherme-almeidaa.vercel.app",
        description: "Movie Library CRUD - Um CRUD de cartões de ﬁlmes em React",
        skills: [
            "React",
            "Ciclo de vida React",
            "Code Review",
            "CSS"
        ],
        image: movei,
    },

]

export default projects;