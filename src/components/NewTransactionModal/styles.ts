import styled from 'styled-components';

export const Form = styled.form`
	h2 {
		color: var(--text-title);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		background: #e7e9ee;
		border: 1px solid #d7d7d7;
		border-radius: 0.25rem;

		font-size: 1 rem;
		font-weight: 400;

		height: 4rem;
		width: 90%;

		padding: 0 1.5rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		background: var(--green);
		border: 0;
		border-radius: 0.25rem;

		color: #fff;

		font-size: 1rem;
		font-weight: 600;

		height: 4rem;
		width: 99%;

		margin-top: 1.5rem;
		padding: 0 1.5rem;

		transition: filter 0.2s;
		&:hover {
			filter: brightness(0.9);
		}
	}
`;
export const TransactionTypeContainer = styled.div``;
