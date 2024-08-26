import { loop, md } from 'cuirk'
import { button } from '../src/components/index.js'
import plundered from '../src/data/plundered.js'

const { description, print, subtitle, title, links } = plundered

export const meta = {
	title,
	description: subtitle,
}

export const body = md`
<div class="book-header">
	<img src="${print}" />
	<div class="content">
		<h1>${title}</h1>
		<p>${subtitle}</p>
		<div class="links">
			${loop(links, ({ title, href }) =>
				button({ children: title, href, shape: 'pill', variant: 'subtle' })
			)}
		</div>
	</div>
</div>

_${description}_

When Harvard and Yale trained property law scholar Bernadette Atuahene moved to Detroit, she planned to study the city’s squatting phenomenon, in which thousands occupied vacant homes without the permission of the record owner. After a long sojourn in South Africa, where she researched the theft of land and homes from Black citizens, she wanted to immerse herself in a project that showcased Black agency. And yet what she found in Detroit was too urgent to ignore. Her neighbors, many of whom had owned their homes for decades, were losing them to property tax foreclosure. Even though the reasons why this was happening were shrouded, the results were clear: once bustling Black neighborhoods blighted with vacant homes and trash-strewn lots, social networks eroded, family legacies lost. It was a puzzle that would take five years of dogged investigation, including hundreds of interviews with homeowners, landlords, real estate investors, and city officials to solve, but data point by data point, loss by loss, a story emerged, one very different from the dominant narratives that blamed irresponsible homeowners or a few corrupt politicians.

As Atuahene demonstrates, the problem is a system of predatory governance, where public officials raise public dollars through racist policies–a nationwide practice in no way limited to Detroit. In this powerful work of scholarship and storytelling, Atuahene expands our nation’s racial justice conversation from the physical violence that state agents exert to the less conspicuous, but intensely damaging bureaucratic violence that they routinely inflict. Unlike brutal police murders captured on video, predatory governance hides in plain sight, inviting complicity from well-meaning people, eviscerating communities, and widening the racial wealth gap. By following the lives of two grandfathers who migrated to Detroit at the turn of the twentieth century to work at Ford Motor Company—one Black the other white—and their grandchildren, Atuahene tells a riveting, braided tale about racist policies, how they take root, why they advance and flourish, who profits, and perhaps most crucially, explains what it takes to dismantle them.

<style>
	.book-header {
		align-items: center;
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	@media (min-width: 720px) {
		.book-header {
			gap: 2rem;
			grid-template-columns: 2fr 3fr;
		}
	}

	.book-header img {
		max-width: 260px;
		width: 100%;
	}

	.book-header .content {
		display: grid;
		gap: 1rem;
	}

	.book-header h1,
	.book-header p {
		font-family: Archivo Narrow, sans-serif;
		margin: 0;
	}

	.book-header h1 {
		font-size: 2.5rem;
		line-height: 1;
		text-transform: uppercase;
	}

	.book-header p {
		font-size: 1.5rem;
		line-height: 1.25;
	}

	.book-header .links {
		display: flex;
		flex-wrap: wrap;
		gap: .5rem;
	}
</style>
`
