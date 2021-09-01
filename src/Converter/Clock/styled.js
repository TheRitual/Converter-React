import styled from "styled-components";

export const ClockInformation = styled.div`
	font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`;

export const ClockBar = styled.progress`
	height: 4px;
    border: 0px;
	&[value]::-webkit-progress-value {
		background-color: teal;
		background-image:
		-webkit-linear-gradient(-45deg, 
								transparent 33%, rgba(0, 0, 0, .1) 33%, 
								rgba(0,0, 0, .1) 66%, transparent 66%),
		-webkit-linear-gradient(top, 
								rgba(255, 255, 255, .25), 
								rgba(0, 0, 0, .25)),
		-webkit-linear-gradient(left, #09c, #005857);
	}
	&[value]::-webkit-progress-bar {
		background-color: transparent;
		border-radius: 2px;
  	}
`;