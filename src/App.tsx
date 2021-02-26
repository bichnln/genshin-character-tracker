import React from 'react';
import './App.scss';
import Character from "./components/character/character";
import * as characters from "./assets/characters";
import * as visions from "./assets/visions";


import { useSelector, useDispatch } from "react-redux";
import { RootState } from './redux/store';
import "./actions/teamActions";

function App() {

  const team = useSelector((state: RootState) => state.team);
  
  const completion = Math.round((team.owned/team.total)*100);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Vision</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={visions.pyro} alt="pyro" />
            </td>
            <td>
              <Character avatar={characters.diluc} name="diluc" />
              <Character avatar={characters.klee} name="klee" />
              <Character avatar={characters.bennett} name="bennett" />
              <Character avatar={characters.amber} name="amber" />
              <Character avatar={characters.xiangling} name="xiangling" />
              <Character avatar={characters.xinyan} name="xinyan" />

            </td>
          </tr>
          <tr>
            <td>
              <img src={visions.hydro} alt="hydro" />
            </td>
            <td>
              <Character avatar={characters.mona} name="mona" />
              <Character avatar={characters.tartaglia} name="tartaglia" />
              <Character avatar={characters.babara} name="babara" />
              <Character avatar={characters.xingqiu} name="xingqiu" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={visions.cryo} alt="cryo" />
            </td>
            <td>
              <Character avatar={characters.qiqi} name="qiqi" />
              <Character avatar={characters.ganyu} name="ganyu" />
              <Character avatar={characters.kaeya} name="kaeya" />
              <Character avatar={characters.diona} name="diona" />
              <Character avatar={characters.chongyun} name="chongyun" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={visions.electro} alt="electro" />
            </td>
            <td>
              <Character avatar={characters.kequing} name="kequing" />
              <Character avatar={characters.fischl} name="fischl" />
              <Character avatar={characters.lisa} name="lisa" />
              <Character avatar={characters.razor} name="razor" />
              <Character avatar={characters.beidou} name="beidou" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={visions.anemo} alt="anemo" />
            </td>
            <td>
              <Character avatar={characters.jean} name="jean" />
              <Character avatar={characters.venti} name="venti" />
              <Character avatar={characters.xiao} name="xiao" />
              <Character avatar={characters.sucrose} name="sucrose" />
              <Character avatar={characters.traveler} name="traveler" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={visions.geo} alt="geo" />
            </td>
            <td>
              <Character avatar={characters.zhongli} name="zhongli" />
              <Character avatar={characters.albedo} name="albedo" />
              <Character avatar={characters.noelle} name="noelle" />
              <Character avatar={characters.ningguang} name="ningguang" />
              <Character avatar={characters.traveler} name="traveler" />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="summary">
        <p>Owned: {team.owned}/{team.total} </p>
        <p>Completion: {completion}%</p>
      </div>
    </div>
  );
}

export default App;
