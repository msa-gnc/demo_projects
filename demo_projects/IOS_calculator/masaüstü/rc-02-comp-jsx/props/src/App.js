import Bird from "./components/Bird";
import Cat from "./components/Cat";
import Dog from "./components/Dog"
import Fish from "./components/Fish";
import Renk from "./components/Renk";


function App() {
  return (
    
    <div className="App">
      <Dog name = "Avustralya Çoban Köpeği" 
      img = "https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_640.jpg" 
      color= "black"/>

      <Dog name = "Dalmaçyalı" 
      img = "https://cdn.pixabay.com/photo/2016/10/26/22/02/dog-1772759_1280.jpg" 
      color= "black"/>
      <Dog name = "Rotweiler" 
      img = "https://cdn.pixabay.com/photo/2014/12/26/21/06/rotweiler-580733_640.jpg" 
      color= "Brown"/>

      <Cat name="British" 
      img="https://media.istockphoto.com/id/468382096/tr/foto%C4%9Fraf/scottish-fold-shorthair-cat-resting-on-chair.jpg?s=1024x1024&w=is&k=20&c=fUAsBx1G-BOSg51gWEAwsYqwfFcM3lD75C61N9D17ro="
      color="gray"/>

      <Cat name="Van kedisi" 
      img="https://cdn.pixabay.com/photo/2020/03/06/10/55/cat-4906764_1280.jpg"
      /*color="white" */
      />

      <Cat name="tekir" 
      img="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
      color="brown"/>

      <Bird name ="Baykuş" img ="https://cdn.pixabay.com/photo/2014/06/25/15/05/owl-377192_960_720.jpg"/>

      <Bird name = "Kaz" 
      img="https://cdn.pixabay.com/photo/2014/05/19/13/24/goose-348076_1280.jpg"
      /* isBlueEyed={true} */
      isBlueEyed
      />
      
      <Fish isim="japon"/>
     
    
    </div>
    
    
  );
}

export default App;
