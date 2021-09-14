import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://findicons.com/files/icons/178/popo_emotions/128/haha.png"
            alt="Teste"
          />
          <div>
            <strong>Lorem.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`teste`}>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
