import React, { Component } from 'react';
import nameLetters from './nameLetters'; // the letters data that builds my name

function changeFontWeight(state, props){
  if ( state.fontWeight === 'thin' ) {
    return { fontWeight: 'light' }
  }

  if ( state.fontWeight === 'light' ) {
    return { fontWeight: 'medium' }
  }

  if ( state.fontWeight === 'medium' ) {
    return { fontWeight: 'bold' }
  }

  if ( state.fontWeight === 'bold' ) {
    return { fontWeight: 'black' }
  }

  if ( state.fontWeight === 'black' ) {
    return { fontWeight: 'thin' }
  }
}

class LetterItem extends Component {
  constructor(props) {
    super(props);
    this.state = { fontWeight: 'thin' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(changeFontWeight);
  }

  render() {
    return <span onClick={this.handleClick} className={this.state.fontWeight}>{this.props.value.letter}</span>;
  };
}

class LetterList extends Component {
  render() {
    const letters = this.props.letters;

    const letterItems = letters.map((letter) =>
      <div key={letter.id} className={letter.class}>
        <LetterItem value={letter} />
      </div>
    );

    return(
      <div className="home">
        {letterItems}
      </div>
    );
  }

}

const Home = () => (

    <LetterList letters={nameLetters} />

)

export default Home;
