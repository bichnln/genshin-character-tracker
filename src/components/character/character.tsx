import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "../../actions/teamActions";
import { addCharacter, removeCharacter } from '../../actions/teamActions';
import "./character.scss";

interface ICharacterProps {
	name: string;
	avatar: string;
}

interface ICharacterState {
	available: boolean;
	constellation: number;
}

const Character: React.FC<ICharacterProps> = props => {

	const [constellation, setConstellation] = useState<number>(-1);

	const dispatch = useDispatch();
	const addConstellation = () => {

		if (constellation < 6) {
			if (constellation === -1) {
				dispatch(addCharacter());
			}
			setConstellation(constellation + 1)
		}
	}

	const minusConstellation = (e: React.MouseEvent) => { 
		
		e.preventDefault();
		if (constellation > -1) {
			if (constellation  === 0) {
				dispatch(removeCharacter());
			}
			setConstellation(constellation - 1);
		}
	}

	const resetConstellation = () => {
		setConstellation(-1);
		dispatch(removeCharacter());
	}

	const handleClick = () => {
		if (constellation < 6) 
			addConstellation();
		else if (constellation === 6) 
			resetConstellation(); 
	}

	return (
		<div className={constellation >= 0 ? "char-container active" : "inactive char-container"}>
			
			<img src={props.avatar} alt={props.name} onClick={()=> handleClick()}/>
			{/* <i className="fas fa-sync-alt" onClick={()=> resetConstellation()}></i> */}

			<p className="constellation-text">C{constellation}</p>
		</div>
	)
}

export default Character;

