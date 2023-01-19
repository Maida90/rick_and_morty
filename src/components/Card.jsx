import { Link } from "react-router-dom";
import styled from 'styled-components';
const BotonX = styled.button`
background-color: #f44336; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;



function Card({ name, gender, onClose, species, image, id }) {
   //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
   return (
      <div className="container">
         <BotonX onClick={onClose}>X</BotonX>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}


export default Card;
