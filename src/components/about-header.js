import { html, renderChildren, scss } from 'cuirk'

export const aboutHeader = ({ children }) =>
	html`
		<div class="about-header">
			<img src="/src/images/home/bernadette.webp" height="200" width="200" />
			<div>${renderChildren(children)}</div>
		</div>
	`

aboutHeader.style = scss`
	.about-header {
		align-items: center;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 200px 1fr;
		margin: 3rem 0;

		@media (max-width: 660px) {
			grid-template-columns: 1fr;
			text-align: center;
		}

		> img {
			border-radius: 50%;
			margin: auto;
			object-fit: cover;
		}

		> div > h1 {
			line-height: 1.25;
			margin: 0;
		}
	}
`
