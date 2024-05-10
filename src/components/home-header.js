import { html, loop, scss } from 'cuirk'
import social from '../data/social.js'
import { button, icon } from './index.js'

export const homeHeader = ({ meta }) =>
	html`
		<div class="home-header">
			<img src="/src/images/home/bernadette.webp" height="150" width="150" />
			<div>
				<h1>${meta.title}</h1>
				<p>${meta.description}</p>
				${loop(
					social,
					(link) =>
						`${button({
							children: icon({ name: link.icon }) + link.title,
							href: link.href,
							variant: 'subtle',
							shape: 'rounded',
						})}` + '&nbsp;'
				)}
			</div>
		</div>
	`

homeHeader.style = scss`
	.home-header {
		align-items: center;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 150px 1fr;
		margin-top: 3rem;

		@media (max-width: 660px) {
			grid-template-columns: 1fr;
		}

		> img {
			border-radius: 50%;
			object-fit: cover;
		}

		> div > h1 {
			line-height: 1;
			margin: 0;
		}
	}
`
