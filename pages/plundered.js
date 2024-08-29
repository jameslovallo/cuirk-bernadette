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
		<p>January 28, 2025</p>
		<p>Pre-order now at these locations:</p>
		<div class="links">
			${loop(
				links.sort((a, b) => a.title.localeCompare(b.title)),
				({ title, href }) =>
					button({ children: title, href, shape: 'pill', variant: 'subtle' })
			)}
		</div>
	</div>
</div>

_${description}_

When Professor Bernadette Atuahene moved to Detroit, she planned to study the city’s squatting phenomenon. What she accidentally found was too urgent to ignore. Her neighbors, many of whom had owned their homes for decades, were losing them to property tax foreclosure, leaving once bustling Black neighborhoods blighted with vacant homes.

Through years of dogged investigation and research, Atuahene uncovered a system of predatory governance, where public officials raise public dollars through laws and processes that produce or sustain racial inequity — a nationwide practice in no way limited to Detroit.

In this powerful work of scholarship and storytelling, Atuahene shows how predatory governance invites complicity from well-meaning people, eviscerates communities, and widens the racial wealth gap. By following the lives of two Detroit grandfathers, one Black and the other white, and their grandchildren, Atuahene tells a riveting tale about racist policies, how they take root, why they flourish, and who profits.

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

	.book-header h1, .book-header p {
		margin: 0;
	}

	.book-header h1,
	.book-header p:first-of-type {
		font-family: Archivo Narrow, sans-serif;
	}

	.book-header h1 {
		font-size: 2.5rem;
		line-height: 1;
		text-transform: uppercase;
	}

	.book-header p:first-of-type {
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
