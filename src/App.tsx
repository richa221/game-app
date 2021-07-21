import React, { Component, Fragment } from 'react';
import Canvas from './components/canvas';
import NewGame from "./components/newGame";
import EndGame from "./components/endGame";
import CurrentCount from "./components/currentCount";

interface AppProps {
   //code related to your props goes here
   createBoard(): void;
   endBoard(): void;
   gameState: any;
   squareClicked: any;
}

class App extends Component<AppProps> {
  componentDidMount() {   

    const canvas:any = document.getElementById("color-game-app");
    canvas.style.width = `${ canvas.style.height }px`;

    this.props.createBoard();
    this.props.endBoard();
  }

  render() {
    return (
      <Fragment>
        <div id={ "content" }>
          <div className={ "gridContainer" }>
            <div className={ "title" }>
              React Game App
            </div>
            <div className={ "informationContainer" }>
              <div className={ "informationLeft" }>
                <NewGame createBoard={ this.props.createBoard }/>
              </div>
             
              <div className={ "informationRight" }>
                <CurrentCount gameState={ this.props.gameState }/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
               <div className={ "informationRight" }>
                <EndGame endBoard={ this.props.endBoard }/>
              </div>
            </div>
            <div className={ "game" }>
              <Canvas
                gameState={ this.props.gameState }
                squareClicked={ this.props.squareClicked }
                createBoard={ this.props.createBoard }
                endBoard={ this.props.endBoard }
              />
            </div>
            <div className={ "settings" }></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
