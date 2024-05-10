import { html, scss } from 'cuirk'
import links from '../data/social.js'

const date = new Date().getFullYear()

export const footer = () => html`
	<footer>
		<a href="${links.newsletter}">Subscribe to Our Newsletter</a>
		<small>© ${date} The Villages of Detroit. All Rights Reserved.</small>
	</footer>
`

footer.style = scss`
	footer {
		background: var(--c-footer, black);
		color: var(--c-footer-color, white);
		display: grid;
		gap: 1rem;
		justify-content: center;
		padding: 2rem 1rem;
		position: sticky;
		text-align: center;
		top: 100vh;

		a {
			color: inherit;
		}

		p {
			margin: 0;
		}
	}
`
