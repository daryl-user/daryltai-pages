import {useRef, useEffect} from "react";
import "./hero-animation.css";
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");

const WIDTH = 1200;
const HEIGHT = 1000;

export default function Animation() {
	
    return (
        <div className="animation-container">
            <Canvas></Canvas>
        </div>
    )
}



function draw(context, agents) {

	const width = context.canvas.width;
	const height = context.canvas.height;

	context.fillStyle = "rgb(34 51 59 / 100%)";
	context.fillRect(0, 0, width, height);

	context.fillStyle = 'black';

	for (let agent of agents) {agent.draw(context); agent.update()}

	for (let i=0; i<agents.length; i++) {
		for (let j=i+1; j<agents.length; j++) {
			
			let agent_1 = agents[i].pos;
			let agent_2 = agents[j].pos;
			let distance = Math.sqrt((agent_1.x - agent_2.x)**2 + (agent_1.y - agent_2.y)**2);
			if ( distance < 200) {
				context.lineWidth = 1;
				let opacity = (100-distance)/100;
				context.strokeStyle = `rgba(230, 177, 126, ${opacity})`;
				context.beginPath();
				context.moveTo(agent_1.x, agent_1.y);
				context.lineTo(agent_2.x, agent_2.y);
				context.stroke();
			}
			
		}
	}

	return agents;
	
  }

  function generateAgents() {
	const num = 60;
	let temp_list = []
	for (let i=0; i<num; i++) {
		temp_list.push(new Agent(random.range(0, WIDTH), random.range(0, HEIGHT)));
	}
	return temp_list;
  }

  function Canvas() {
  
	const canvasRef = useRef(null)
	
	const agents = useRef(generateAgents());

	useEffect(() => {
	  
	  const canvas = canvasRef.current
	  const context = canvas.getContext('2d')
	  let frameCount = 0
	  let animationFrameId
	  
	  const render = () => {
		frameCount++
		agents.current = draw(context, agents.current);
		animationFrameId = window.requestAnimationFrame(render)
	  }
	  render()
	  
	  return () => {
		window.cancelAnimationFrame(animationFrameId)
	  }
	}, [draw])
	
	return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT}/>
  }

  
  class Vector {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

  }

  class Agent {
	
	constructor(x, y) {
		this.radius = random.range(2, 6);
		this.pos = new Vector(x, y);
		this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
	}

	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		if (this.pos.x + this.radius > WIDTH || this.pos.x - this.radius < 0) {this.vel.x = -this.vel.x}
		if (this.pos.y + this.radius > HEIGHT || this.pos.y - this.radius < 0) {this.vel.y = -this.vel.y}
	}

	draw(ctx) {
		let opacity = (HEIGHT - this.pos.y)/ HEIGHT;
		ctx.lineWidth = 4;
		ctx.fillStyle = `rgba(230, 177, 126, ${opacity})`
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
		ctx.fill();
	}
  }