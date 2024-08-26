import { html, loop, md } from 'cuirk'
import {
	aboutHeader,
	button,
	grid,
	imageCard,
	youtube,
} from '../src/components/index.js'
import meta from '../src/data/meta.js'
import nav from '../src/data/nav.js'

const videoGallery = [
	{ id: 'QOaBmU_3PdI' },
	{ id: 'FF69IlomFVQ' },
	{ id: 'RYamNC4gTrQ' },
	{ id: 'tuIjsQFX_-o' },
	{ id: 'HgelDL8rNDU' },
	{ id: 'EgngNbF4k-E' },
]

export const body = md`
${aboutHeader({
	children: html`
		<h1>${meta.title}</h1>
		<p>
			${meta.description} Bernadette Atuahene is a property law scholar focusing
			on land stolen from people in the African Diaspora.
		</p>
		${button({
			children: 'Read More',
			href: '/about',
			shape: 'rounded',
		})}
	`,
})}
${youtube({ id: 'j1PxT_uUxG8' })}

## The Work

Bernadette Atuahene is a property law scholar whose work focuses on land stolen from people in the African Diaspora. Her last two projects dealt with land taken by state entities in South Africa and Detroit.

${grid({
	size: '33ch',
	children: [
		loop(
			nav.filter((link) => link.img),
			imageCard
		),
	],
})}

## Video Gallery

<snappy-carousel>
	${loop(videoGallery, youtube)}
</snappy-carousel>

<style>
	main {
		max-width: 100ch;
	}

	main > .youtube {
		margin: 4rem 1rem 4rem 0;
		position: relative;
	}

	main > .youtube:before {
		background: var(--c-secondary);
		content: '';
		display: block;
		height: 100%;
		left: 1rem;
		position: absolute;
		top: 1rem;
		width: 100%;
		z-index: -1;
	}

	snappy-carousel {
		--desktop: 50%;
		--gap: .5rem;
	}

	snappy-carousel .youtube button {
		border-radius: .5rem;
	}

	snappy-carousel::part(indicators),
	snappy-carousel::part(prev),
	snappy-carousel::part(next) {
		color: var(--c-primary);
	}
</style>

<script type="module" defer>
	import "//unpkg.com/@snappywc/carousel";
</script>
`
