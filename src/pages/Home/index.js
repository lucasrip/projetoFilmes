import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import api from '../../services/api.js';
import './Home.css';

function Home() {
const [filmes,setFilmes] = useState([]);

useEffect(()=>{
 async function loadFilmes()
 {
  const response = await api.get('r-api/?api=filmes/');
  setFilmes(response.data);
 }
loadFilmes();
},[]);

  return (
    <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome} />              
                <Link className="" to={`/filme/${filme.id}`}>ver</Link>
              </article>
            )
          })}
        </div>
    </div>
  );
}

export default Home;
