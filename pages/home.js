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

Prof. Atuahene won a National Science Foundation award for her current project about racialized property tax administration in Detroit, which has received several accolades, including the Law and Society Association’s John Hope Franklin Award for best article on race in 2020, and the prize for the best overall article in 2024.
In addition to publishing two New York Times op-eds and appearing on national news shows such as Democracy Now! and the Tavis Smiley Show to discuss her Detroit work, she has also published academic articles in journals such as California Law Review, Northwestern Law Review, and Southern California Law Review.

${youtube({ id: 'j1PxT_uUxG8' })}

<div class="book-banner">
	<img src="/src/images/south-africa/wwwo-cover.webp" width="200">
	<div>
		<h2>We Want What’s Ours</h2>
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

<style>
	main > .youtube {
		margin: 3rem 1rem 3rem 0;
		position: relative;
	}

	main > .youtube:before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: goldenrod;
		z-index: -1;
	}

	.book-banner {
		background: var(--c-secondary);
		color: white;
		display: grid;
		gap: 2rem;
		margin: 3rem -1rem;
		padding: 3rem;
		text-align: center;
	}

	.book-banner img {
		margin: auto;
	}

	.book-banner h2 {
		margin-top: 0;
	}

	@media (min-width: 720px) {
		.book-banner {
			align-items: center;
			grid-template-columns: 200px 1fr;
			margin: 3rem 0;
			padding: 0;
			text-align: left;
		}

		.book-banner img {
			margin: -1rem;
			max-width: unset;
			width: calc(200px + 1.5rem);
		}

		.book-banner > div {
			padding-right: 1rem;
		}
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
