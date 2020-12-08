import styled from "styled-components/macro";
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
	// margin-top: 20px;
	flex-wrap: wrap;
	@media (max-width: 600px) {
		flex-direction: row;
		align-items: center;
	}
`;
export const Frame = styled.div`
	display: flex;
	flex-direction: center;
	align-items: center;
	width: 600px;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 30px;
	// width: 55%;
	@media (max-width: 1000px) {
		justify-content: normal;
		width: auto;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
	}
`;
export const Input = styled.input`
	max-width: 1100px;
	width: 100%;
	border: 0;
	padding: 10px;
	// margin-left: 10px;
	max-width: 100%;
	width: 400px;
	height: 55px;
	box-sizing: border-box;
	@media (max-width: 600px) {
		height: autopx;
		width: 100%;
		// max-width: 1100px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const Button = styled(ReactRouterLink)`
	width: auto;
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: space-around;
	height: 39px;
	background: #e50914;
	max-width: 100%;
	color: white;
	text-transform: uppercase;
	padding: 0.5rem 0.5rem 0.5rem 0.5rem;
	font-size: 1rem;
	letter-spacing: .2px;
	border: none;
	fit-content: contain;
	font-weight: bold;
	overflow: hidden;
	cursor: pointer;
	text-decoration: none;
	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 14px;
		@media (max-width: 1000px) {
		width: 16px;
		}
	}
	&:hover {
		background: #f40612;
	}
	@media (max-width: 1000px) {
		height: 39px;
		font-size: 1rem;
		font-weight: mormal;
	}
	@media (max-width: 600px) {
		margin-top: 20px;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
		height: 39px;
		max-width: autopx;
	}
`;

export const Text = styled.span`
	font-size: 18px;
	color: white;
	text-align: center;
	padding-bottom: 20px;
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
