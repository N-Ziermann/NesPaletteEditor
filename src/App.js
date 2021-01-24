import React from "react"
import './App.css';
import COLORS from "./colors.js"

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      selected:[
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000"
      ],
      selectedIndex:0
    }
    this.setDownloadLinkForPalette = this.setDownloadLinkForPalette.bind(this)
  }

  setDownloadLinkForPalette(){
    var binary = this.state.selected.map(item=>COLORS[item])
    var blob = new Blob(binary, {type: 'application/octet-binary'});
    var url = URL.createObjectURL(blob);
    document.getElementById("link").href = url
    document.getElementById("link").click()
  }
  
  selectColor(color){
    const newSelected = this.state.selected.slice() //copy the array
    newSelected[this.state.selectedIndex] = color //execute the manipulations
    this.setState((state)=>{
      return {
        selected:newSelected,
        selectedIndex: this.state.selectedIndex + 1
      }
    })
  }

  setSelectedIndex(index){
    this.setState({
      selectedIndex:index
    })
  }

  render(){
    return (
      <div className="App">
        <h1>NES Color Palette Creator</h1>
        <h2>Selectable Colors:</h2>
        <div style={{display:"inline"}}>
          {
            Object.keys(COLORS).map((colorValue)=>{
              return (<div style={{
                width:65, 
                height:65, 
                backgroundColor:("#"+colorValue), 
                display: "inline-block",
                border:"solid",
                margin:5,
                cursor:"pointer",
                borderRadius:5
              }} onClick={()=>{this.selectColor(colorValue)}}></div>)
            })
          }
        </div>
        <br/><br/><br/>
        <h2>Current Color Palette:</h2>
        <div>
          {
            this.state.selected.map((value, index)=>{
              return <div style={
                {
                  display: "inline-block",
                  width:75, 
                  height:75, 
                  border:"solid", 
                  margin:5, 
                  backgroundColor:("#"+value),
                  cursor:"pointer",
                  borderRadius:5,
                  transform: (this.state.selectedIndex == index ? "scale(1.1)" : "scale(1)")
                }
              } 
              id={index} 
              key={index}
              onClick={()=>{this.setSelectedIndex(index)}}
              />
            })
          }
        </div>
        <br/>
        <a id="link" download={"pal.bin"} style={{visibility: "hidden"}}/>
        <button onClick={this.setDownloadLinkForPalette} style={{padding:10}}><h3 style={{margin:5}}>Download Current Palette</h3></button>
      </div>
    );
  }
}

export default App;
