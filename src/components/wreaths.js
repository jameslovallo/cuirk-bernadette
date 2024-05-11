import { html, loop, scss } from 'cuirk'

const awards = [
	{
		award: 'Official Selection',
		festival: 'Chicago International Film Festival',
	},
	{ award: 'Official Selection', festival: 'Pan African Film Festival' },
	{
		award: 'Audience Choice Award Winner for Best Short Documentary',
		festival: 'Africa World Documentary Film Festival',
	},
	{
		award: 'Official Selection',
		festival: 'Montreal International Black Film Festival',
	},
	{ award: 'Official Selection', festival: 'African Film Festival New York' },
]

const wreath = ({ award, festival }) =>
	html`<div class="wreath"><b>${award}</b><br />${festival}</div>`

export const wreaths = () =>
	html`<div class="wreaths">${loop(awards, wreath)}</div>`

wreaths.style = scss`
	.wreaths {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
		justify-content: center;
		margin-top: 2rem;

		.wreath {
			align-items: center;
			aspect-ratio: 4/3;
			background: url('/src/images/south-africa/wreath.svg') no-repeat center center / contain;
			display: flex;
			flex-direction: column;
			font-size: 10px;
			justify-content: center;
			padding: 0 15%;
			text-align: center;
			width: 11rem;
		}
	}
`
