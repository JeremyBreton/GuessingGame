import { useAppSelector } from '../../../hooks/redux';
import { PlayerType } from '../../../@types';
import './PlayerToFind.scss';
import { useState } from 'react';

type PlayerToFindProps = {
  players: {
    player: string;
    playerId: number;
    team: string;
    teamId: number;
    conference: string;
    division: string;
    age: number;
    position: string;
    jersey: number;
    height: number;
    teams: string;
    isWinning: boolean;
    isGood: boolean;
  };
  selectedPlayers: PlayerType[];
};

function PlayerToFind({ players, selectedPlayers }: PlayerToFindProps) {
  const selectedPlayer = useAppSelector((state) => state.form.selectedPlayers);
  const playerToWin = useAppSelector((state) => state.form.playertoWin);
  // console.log(PlayerToFind);
  // console.log('LOG DE selectedPlayers', selectedPlayers); // undefined
  // console.log('LOG DE selectedPlayer dans PlayerToFind.tsx', selectedPlayer);
  // console.log('LOG DE PLAYERTOWIN dans PlayerToFind.tsx', playerToWin);

  function selectedPlayerHeightClass(selectedHeight, winHeight) {
    if (selectedHeight < winHeight) {
      return 'arrow-up';
    } else if (selectedHeight > winHeight) {
      return 'arrow-down';
    } else {
      return '';
    }
  }

  function selectedPlayerAgeClass(selectedAge, winAge) {
    if (selectedAge < winAge) {
      return 'arrow-up';
    } else if (selectedAge > winAge) {
      return 'arrow-down';
    } else {
      return '';
    }
  }

  function selectedPlayerNumberClass(selectedNumber, winNumber) {
    if (selectedNumber < winNumber) {
      return 'arrow-up';
    } else if (selectedNumber > winNumber) {
      return 'arrow-down';
    } else {
      return '';
    }
  }

  return (
    <div className="PlayerToFind-container">
      <p>{selectedPlayer.length}/8 TENTATIVES</p>
      <article className="PlayerToFind-container__card">
        <div className="PlayerToFind-container__card-div player">NOM</div>
        <div className="PlayerToFind-container__card-div team">TEAM</div>
        <div className="PlayerToFind-container__card-div conference">
          CONFERENCE
        </div>
        <div className="PlayerToFind-container__card-div division">
          DIVISION
        </div>
        <div className="PlayerToFind-container__card-div position">
          POSITION
        </div>
        <div className="PlayerToFind-container__card-div taille">TAILLE</div>
        <div className="PlayerToFind-container__card-div age">AGE</div>
        <div className="PlayerToFind-container__card-div numero">NUMERO</div>
      </article>

      {selectedPlayer.map((item) => (
        <article key={item.playerId} className="PlayerToFind-container__card">
          <div
            className={`PlayerToFind-container__card-div player ${
              item.isWinning ? 'win' : ''
            }`}
          >
            {item.player}
          </div>
          <div
            className={`PlayerToFind-container__card-div team 
            ${item.isGoodTeam ? 'good' : ''}
            ${item.isNearTeam ? 'near' : ''}
            ${item.isWinning ? 'win' : ''}
            `}
          >
            {item.team}
          </div>
          <div
            className={`PlayerToFind-container__card-div conference 
            ${item.isGoodConference ? 'good' : ''}
            ${item.isWinning ? 'win' : ''}
              `}
          >
            {item.conference}
          </div>
          <div
            className={`PlayerToFind-container__card-div division
            ${item.isGoodDivision ? 'good' : ''}
            ${item.isWinning ? 'win' : ''}
            `}
          >
            {item.division}
          </div>
          <div
            className={`PlayerToFind-container__card-div position
            ${item.isGoodPosition ? 'good' : ''}
            ${item.isNearPosition ? 'near' : ''}
            ${item.isWinning ? 'win' : ''}
            `}
          >
            {item.position}
          </div>
          <div
            className={`PlayerToFind-container__card-div height 
            ${item.isGoodHeight ? 'good' : ''}
            ${item.isNearHeight ? 'near' : ''}
            ${item.isWinning ? 'win' : ''}
            ${selectedPlayerHeightClass(item.height, playerToWin.height)}
            `}
          >
            {((item.height * 2.54) / 100).toFixed(2)}
            {selectedPlayerHeightClass(item.height, playerToWin.height) ===
              'arrow-up'}
            {selectedPlayerHeightClass(item.height, playerToWin.height) ===
              'arrow-down'}
          </div>
          <div
            className={`PlayerToFind-container__card-div age 
            ${item.isGoodAge ? 'good' : ''}
            ${item.isNearAge ? 'near' : ''}
            ${item.isWinning ? 'win' : ''}
            ${selectedPlayerAgeClass(item.age, playerToWin.age)}
            `}
          >
            {item.age}
            {selectedPlayerAgeClass(item.age, playerToWin.age) === 'arrow-up'}
            {selectedPlayerAgeClass(item.age, playerToWin.age) === 'arrow-down'}
          </div>
          <div
            className={`PlayerToFind-container__card-div jersey 
            ${item.isGoodJersey ? 'good' : ''}
            ${item.isNearJersey ? 'near' : ''}
            ${item.isWinning ? 'win' : ''}
            ${selectedPlayerNumberClass(item.jersey, playerToWin.jersey)}
            `}
          >
            {item.jersey}
            {selectedPlayerNumberClass(item.jersey, playerToWin.jersey) ===
              'arrow-up'}
            {selectedPlayerNumberClass(item.jersey, playerToWin.jersey) ===
              'arrow-down'}
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlayerToFind;
