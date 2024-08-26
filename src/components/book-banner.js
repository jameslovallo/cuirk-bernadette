import { html, scss } from 'cuirk'
import plundered from '../data/plundered.js'
import { button } from './index.js'

const { title, subtitle, description, cover } = plundered

export const bookBanner = () => html`
	<div class="book-banner">
		<div class="container">
			<img src="${cover}" alt="${title}: ${subtitle}" />
			<div class="content">
				<p>${description}</p>
				<div class="links">
					${button({
						children: 'Learn More and Pre-Order Now',
						href: '/plundered',
						shape: 'rounded',
						variant: 'subtle',
					})}
				</div>
			</div>
		</div>
	</div>
`

bookBanner.style = scss`
	.book-banner {
		--c-primary: #fce605;
		--c-primary-1: #fce60511;
		--c-primary-2: #fce60522;
		--c-primary-3: #fce60533;
		--c-primary-color: black;
		background: linear-gradient(to right, #3e3b39, #1e1b19);
		color: #fff;

		> .container {
			align-items: center;
			display: grid;
			gap: 1rem;
			margin: 0 auto;
			max-width: 100ch;
			padding: 3rem 1rem;

			@media (min-width: 768px) {
				gap: 2rem;
				grid-template-columns: 2fr 3fr;
			}

			> img {
				border: 4px solid black;
				margin: auto;
				max-width: 360px;
				width: 100%;

				@media (min-width: 768px) {
					margin: 0;
				}
			}

			> .content {
				display: grid;
				gap: 1rem;
				text-align: center;

				@media (min-width: 768px) {
					gap: 2rem;
					text-align: left;
				}

				> p {
					font-family: Archivo Narrow, sans-serif;
					font-size: 1.25rem;
					letter-spacing: 1px;
					margin: 0;

					@media (min-width: 768px) {
						font-size: 1.33rem;
					}
				}
			}
		}
	}
`
