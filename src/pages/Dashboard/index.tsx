import React from "react";
import { FiChevronRight } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => (
  <>
    <img src={LogoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://findicons.com/files/icons/178/popo_emotions/128/haha.png"
          alt="Lorem"
        />
        <div>
          <strong>Lorem ipsum dolor sit.</strong>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://findicons.com/files/icons/178/popo_emotions/128/haha.png"
          alt="Lorem"
        />
        <div>
          <strong>Lorem ipsum dolor sit.</strong>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
