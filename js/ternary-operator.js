let timeToLive=72;
let packetJumps=40;
let timedOut="";

// returning string
timedOut = packetJumps < timeToLive ? "Yes" : "No" ;
console.log(timedOut);

// returning jsx element for component
const apnaComponent = () => {
return packetJumps < timeToLive ? <div> Yes </div> :
	<div> Yes </div>;
}
