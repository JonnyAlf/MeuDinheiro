import React from "react";
import "./style.css";
import avatar from "../../imagem/images.jpg";

const Sobre = () => {
    return (
        <div className="sobre-container">
            <img
                src={avatar}  // Corrigido aqui
                alt="Avatar do criador"
                style={{ borderRadius: "50%", marginBottom: "1rem" }}
            />
            <h2>Sobre o Criador</h2>
            <p>
                Este projeto foi idealizado e desenvolvido por <strong>Jonathan Alfredo Leite</strong>, um estudante de Engenharia de Software apaixonado por tecnologia e desenvolvimento de soluções que facilitem a vida das pessoas. Atualmente no 6º período, Jonathan está focando em desenvolvimento backend e busca sempre melhorar suas habilidades em criação de sistemas eficientes e fáceis de usar.
            </p>
            <h3>Missão</h3>
            <p>
                Criar ferramentas que tornem a gestão financeira acessível para todos, permitindo uma vida financeira mais organizada e saudável.
            </p>
            <h3>Contato</h3>
            <p>
                Para saber mais sobre o projeto ou entrar em contato, envie um e-mail para <strong>jaleite@minha.fag.edu.br</strong>.
            </p>
        </div>
    );
};

export default Sobre;