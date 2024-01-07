
import React, { Component } from 'react';
import TextItem from "./Component/TextItem"
import './App.css';

class TextEditor extends Component {

    state = {
      text: '',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontColor: '#000000',
      textList:[],
      history: [],
      historyIndex: -1,
    };

  handleChange = (property, value) => {
    this.setState((prevState) => ({
      [property]: value,
      history: [...prevState.history, { ...prevState }],
      historyIndex: prevState.history.length,
    }));
  };

  handleTextChange = (event) => {
    const { value } = event.target;
    this.handleChange('text', value);
  };

  handleFontFamilyChange = (event) => {
    const { value } = event.target;
    this.handleChange('fontFamily', value);
  };

  handleFontSizeChange = (event) => {
    const { value } = event.target;
    this.handleChange('fontSize', value + 'px');
  };

  handleFontColorChange = (event) => {
    const { value } = event.target;
    this.handleChange('fontColor', value);
  };

  handleCustomFontChange = (event) => {
    const { value } = event.target;
    this.setState({ customFont: value });
  };

  handleUndo = () => {
    const { historyIndex, history } = this.state;

    if (historyIndex > 0) {
      this.setState({
        ...history[historyIndex - 1],
        historyIndex: historyIndex - 1,
      });
    }
  };

  handleRedo = () => {
    const { historyIndex, history } = this.state;

    if (historyIndex < history.length - 1) {
      this.setState({
        ...history[historyIndex + 1],
        historyIndex: historyIndex + 1,
      });
    }
  };

  handleAddText=()=>{
    const {text,textList,fontFamily,fontSize,fontColor}=this.state
    const textItem={text,fontFamily,fontColor,fontSize}
    this.setState({textList:[...textList,textItem],text:"", history: [], historyIndex: -1})
  }

  render() {
    const { text, fontFamily, fontSize, fontColor,textList, historyIndex, history } = this.state;
    return (
      <div className='main-bg-container'>
        <div className='canvas-container'>
        <div>
          <button className='custom-btn' onClick={this.handleUndo} disabled={historyIndex === 0}>
            Undo
          </button>
          <button className='custom-btn' onClick={this.handleRedo} disabled={historyIndex === history.length - 1}>
            Redo
          </button>
        </div>
          <div className='text-main-container'>
            <h1 className='=screen-heading'>Screen</h1>
          <div className='text-container'
            style={{
              fontFamily,
              fontSize,
              color: fontColor,
              border: '1px solid #000',
              padding: '10px',
              margin: '20px',
            }}
          >
            {text}
          </div>
          </div>
          <div className='text-list-container'>
            <div className='unodered-text-list'>
            {textList.map(each=>(<TextItem key={each.text} data={each}/>))}
            </div>
          </div>
        </div>
        <div>
        <div>
          <label htmlFor="text">Text:</label>
          <input placeholder='Enter The Text'  type="text" id="text" value={text} onChange={this.handleTextChange} />
        </div>
        <div>
          <label htmlFor="fontFamily">Font Family:</label>
          <select id="fontFamily" value={fontFamily} onChange={this.handleFontFamilyChange}>
          <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Palatino">Palatino</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Courier">Courier</option>
            <option value="Book Antiqua">Book Antiqua</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Garamond">Garamond</option>
            <option value="Copperplate">Copperplate</option>
            <option value="Century Gothic">Century Gothic</option>
            <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
            <option value="Custom Font">Custom Font</option>
          </select>
        </div>
        <div>
          <label htmlFor="fontSize">Font Size:</label>
          <input
            type="number"
            id="fontSize"
            value={parseInt(fontSize)}
            onChange={this.handleFontSizeChange}
          />
        </div>
        <div>
          <label htmlFor="fontColor">Font Color:</label>
          <input type="color" id="fontColor" value={fontColor} onChange={this.handleFontColorChange} />
        </div>
        <div>
          <button className='custom-btn' onClick={this.handleAddText} >Add Text</button>
        </div>
        
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Text Editor</h1>
        <TextEditor />
      </div>
    );
  }
}

export default App;
