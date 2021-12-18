import '../App.css';



function Designs() {
const designs = [
    {url:"https://i.ibb.co/0YtCFYF/logo4-1.png",
  info:"Logo for a coffee shop 'crossroad'"},
          {url:"https://i.ibb.co/yhBdqq6/key-image-Missing-Children-Europe-2.png",
          info:"key image for an app 'missing children'"},
         { url:"https://i.ibb.co/hFY2D7m/board2finalv1.png",
         info:"menu design for a coffee shop 'coffee cup'"},
          {url:"https://i.ibb.co/QMp99LR/4.png",
          info:"logo design for 'Fa babe Beauty'"},
          {url:"https://i.ibb.co/8KypTMS/wxnish.png",
          info:"Vector self-portrait"},
          {url:"https://i.ibb.co/rsWsWq3/lomami-River-Logo2.png",
          info:"logo design for 'lomami'"},
          {url:"https://i.ibb.co/5R5NR7P/yellow.png",
          info:"1/3 clothing design for 'pirate urban wear'"},
        {url:"https://i.ibb.co/KVSQWCS/phannybag.png",
        info:"2/3 clothing design for 'pirate urban wear'"},
          {url:"https://i.ibb.co/9qtPpgj/2.png",
          info:"3/3 clothing design for 'pirate urban wear'"}
     
    
    ];

  return (
    <div id="designs"
    style={{overflow: "auto"}}> 
      <h2
      style={{marginLeft: "20%"}}>
        Illustrator designs
      </h2>
      <ul class="projectList"
      >
      {designs.map((design, index) => {
        return <li key={index} 
      id="designlist"
      style={{ width: "35%", height:"20%"}}  
        class="projectItem">
          <img src={design.url}
          style={{width: "100%", backgroundSize: "contain"}}   alt="" />
          <p style={{float: "right"}}>{design.info}</p></li>
      })}
      </ul>
    </div>
  );
}

export default Designs;
