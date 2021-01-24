import './App.css';
import COLORS from "./colors.js"

var arr = [
  COLORS["afe5ea"],
  COLORS["b6b6b6"],
  COLORS["e8d1ff"]
]

function setDownloadLinkForPalette(){
  var blob = new Blob(arr, {type: 'application/octet-binary'});
  var url = URL.createObjectURL(blob);
  document.getElementById("link").href = url
  document.getElementById("link").click()
}
console.log(COLORS)
function App() {
  return (
    <div className="App">
      
      <a id="link" download={"pal.bin"} style={{visibility: "hidden"}}/>
      <button onClick={setDownloadLinkForPalette}>Download pal.bin</button>
      <br/>
      <div style={{display:"inline"}}>
        {
          Object.keys(COLORS).map((colorValue)=>{
            return (<div style={{
              width:75, 
              height:75, 
              backgroundColor:("#"+colorValue), 
              display: "inline-block",
              border:"solid",
              margin:5,
              
            }}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;
