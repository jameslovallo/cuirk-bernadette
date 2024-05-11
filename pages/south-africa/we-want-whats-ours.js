import { html, md } from 'cuirk'
import { card, grid, linkList, youtube } from '../../src/components/index.js'
import bookstores from '../../src/data/south-africa/bookstores.js'

const es = bookstores.pop()

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

${grid({
	children: [
		card({
			children: [
				html`
					<img
						src="/src/images/south-africa/wwwo-cover.webp"
						style="width: 100%"
					/>
					${linkList(bookstores)}
				`,
			],
		}),
		card({
			children: [
				html`
					<img
						src="/src/images/south-africa/wwwo-cover-es.webp"
						style="width: 100%"
					/>
					${linkList([es])}
				`,
			],
		}),
	],
	size: '23ch',
})}


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

<style>
	.card > img {
		aspect-ratio: 3 / 4.5;
		object-fit: cover;
		object-position: center;
	}
	.card > .link-list {
		padding: 1rem;
	}
</style>
`
