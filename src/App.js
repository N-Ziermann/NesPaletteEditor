import React from "react"
import './App.css';
import COLORS from "./colors.js"

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      selected:[
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff",
        "fefeff"
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
        selectedIndex: (this.state.selectedIndex<31 ? this.state.selectedIndex + 1 : 31)  // ? so it wont add any extra entries (max 32)
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
                width:60, 
                height:60, 
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
        <br/>
        <h2>Current Color Palettes:</h2>
        <h3>Foreground Palette</h3>
        <div>
          {
            this.state.selected.map((value, index)=>{
              if(index<16){
                return <div style={
                  {
                    display: "inline-block",
                    width:65, 
                    height:65, 
                    border:"solid", 
                    margin:5, 
                    backgroundColor:("#"+value),
                    cursor:"pointer",
                    borderRadius:5,
                    transform: (this.state.selectedIndex == index ? "scale(1.05)" : "scale(1)"),
                    marginLeft: index % 4 == 0 ? 25 : 5
                  }
                } 
                id={index} 
                key={index}
                onClick={()=>{this.setSelectedIndex(index)}}
                />
            }})
          }
        </div>
        <br/>
        <h3>Background Palette</h3>
        <div>
          {
            this.state.selected.map((value, index)=>{
              if(index>15){
                return <div style={
                  {
                    display: "inline-block",
                    width:65, 
                    height:65, 
                    border:"solid", 
                    margin:5, 
                    backgroundColor:("#"+value),
                    cursor:"pointer",
                    borderRadius:5,
                    transform: (this.state.selectedIndex == index ? "scale(1.05)" : "scale(1)"),
                    marginLeft: index % 4 == 0 ? 25 : 5
                  }
                } 
                id={index} 
                key={index}
                onClick={()=>{this.setSelectedIndex(index)}}
                />
            }})
          }
        </div>
        <br/>
        <a id="link" download={"pal.bin"} style={{visibility: "hidden"}}/>
        <br/>
        <button onClick={this.setDownloadLinkForPalette} style={{padding:10}}><h4 style={{margin:5}}>Download Current Palette</h4></button>
      </div>
    );
  }
}

export default App;
