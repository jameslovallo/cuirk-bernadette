import { loop, md } from 'cuirk'
import {
	button,
	grid,
	homeHeader,
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
${homeHeader({ meta })}

## About Professor Atuahene

Bernadette Atuahene is a property law scholar focusing on land stolen from people in the African Diaspora. She is the daughter of Ghanaian immigrants who grew up in Los Angeles and attended UCLA for college. She then earned her JD from Yale and her MPA from Harvard. After completing her graduate studies, she served as a judicial clerk at the Constitutional Court of South Africa and then practiced as an associate at Cleary, Gottlieb, Steen & Hamilton in New York. She is now a Professor at the USC Gould School of Law.

Prof. Atuahene has worked as a consultant for the World Bank and the South African Land Claims Commission, and she has also directed and produced an award winning short documentary film about one South African family’s struggle to regain their land. She has been honored with the Fulbright Fellowship, Council on Foreign Relation’s International Affairs Fellowship, and Princeton’s Law and Public Affairs Fellowship. Her first book — We Want What’s Ours: Learning from South Africa’s Land Restitution Program (Oxford University Press, 2014) — is based on 150 interviews she conducted with South Africans dispossessed of their land by the colonial and apartheid governments and who received some form of compensation post apartheid.

Prof. Atuahene won a National Science Foundation award for her current project about racialized property tax administration in Detroit, which has received several accolades, including the Law and Society Association’s John Hope Franklin Award for best paper on race in 2020. In addition to publishing two New York Times op-eds and appearing on national news shows such as Democracy Now! and the Tavis Smiley Show to discuss her Detroit work, she has also published academic articles in journals such as California Law Review, Northwestern Law Review, and Southern California Law Review.

## We Want What's Ours

<div style="align-items: center; display: flex; flex-flow: row wrap; gap: 1.5rem;">
	<img src="/src/images/south-africa/wwwo-cover.webp" width="150">
	<div style="flex-basis: 60%; flex-grow: 1">
		<p style="margin-top: 0">We Want What’s Ours is a detailed study of the South African Land Claims Commission’s attempts to compensate millions of South Africans displaced by the colonial and apartheid regimes.</p>
		${button({
			href: '/south-africa/we-want-whats-ours',
			children: 'Learn More',
			shape: 'rounded',
		})}
	</div>
</div>

## The Work

Bernadette Atuahene is a property law scholar whose work focuses on land stolen from people in the African Diaspora. Her last two projects dealt with land taken by state entities in South Africa and Detroit.

${grid({
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

<script type="module">
	import "//unpkg.com/@snappywc/carousel";
</script>

<style>
	snappy-carousel::part(indicators),
	snappy-carousel::part(prev),
	snappy-carousel::part(next) {
		color: var(--c-primary);
	}
</style>
`
