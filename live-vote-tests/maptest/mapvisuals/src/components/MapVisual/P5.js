import Sketch from "react-p5";

export default function P5(props){
	
	const setup = (p5, canvasParentRef) => {
		
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(200, 200).parent(canvasParentRef);
	};

	
	const draw = (p5) => {
		
		p5.ellipse(20, 20, 20, 20);
		
		
		p5.noStroke();
		p5.fill(241, 196, 15);
		p5.translate(150, 150);
		p5.noStroke();
		
        
	

		
     
		
	};

	return <Sketch setup={setup} draw={draw} />;
}