import styled from 'styled-components';

export const Container = styled.header`
	background: var(--blue);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto; //to be always centralized

	padding: 2rem 1rem 12rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		background: var(--blue-light);
		border: 0;
		border-radius: 0.25rem;
		color: #fff;
		font-size: 1rem;
		padding: 0.75rem 2rem;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
