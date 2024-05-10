import { html, loop, md } from 'cuirk'
import { button, grid, youtube } from '../../src/components/index.js'
import bookstores from '../../src/data/south-africa/bookstores.js'

export const meta = {
	title: "We Want What's Ours",
	description:
		'We Want What’s Ours is a detailed study of the South African Land Claims Commission’s attempts to compensate millions of South Africans displaced by the colonial and apartheid regimes.',
}

export const body = md`
# ${meta.title}

${
	meta.description
} It teaches a critical lesson about transitional justice: remedying past wrongs entails more than distributing money or even returning property because the dispossessed did not just lose their possessions, they also experienced assaults to their dignity. A comprehensive remedy for these ‘dignity takings’ involves confronting the underlying dehumanization, infantilization, and political exclusion that enabled the dispossession. That is, it requires ‘dignity restoration’ – a remedy based on principles of restorative justice that seeks to embrace the agency and humanity of the dispossessed by placing them in the driver’s seat and allowing them to determine how they are made whole.

## Get Your Copy

<div
	style="align-items: center; display: flex; flex-flow: row wrap; gap: 1rem;"
>
	<img src="/src/images/south-africa/wwwo-cover.webp" style="width: 200px" />
	<ul
		style="display: grid; list-style: none; margin: 0; padding: 0; text-align: left"
	>
		${loop(
			bookstores,
			({ href, children }) => html`
				<li>
					${button({
						href,
						children,
						variant: 'ghost',
						shape: 'rounded',
					})}
				</li>
			`
		)}
	</ul>
</div>

${grid({
	children: [
		html`
			<div>
				<h2>Book Trailer</h2>
				${youtube({ id: 'PIsrHY6Tzt8' })}
			</div>
		`,
		html`
			<div>
				<h2>Johannesburg Launch</h2>
				${youtube({ id: 'fjGBhQkhTVw' })}
			</div>
		`,
	],
})}
`
