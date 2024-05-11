import { html, scss } from 'cuirk'
import { button, card, cardActions, icon } from './index.js'

export const imageCard = ({ img, title, href }) => html`
	<div class="image-card">
		${card([
			html`<img src="${img}" />`,
			cardActions([
				button({
					children: title + icon({ name: 'ArrowRight' }),
					href,
					variant: 'ghost',
					shape: 'rounded',
				}),
			]),
		])}
	</div>
`

imageCard.style = scss`
.image-card {
	> .card > .actions > .button {
		justify-content: space-between;
		width: 100%;
	}
}
`
