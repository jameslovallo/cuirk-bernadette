import { loop, md } from "cuirk";
import { button } from "../src/components/index.js";
import plundered from "../src/data/plundered.js";

const { description, print, subtitle, title, links } = plundered;

export const meta = {
  title,
  description: subtitle,
};

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
          button({ children: title, href, shape: "pill", variant: "subtle" })
      )}
		</div>
	</div>
</div>

“Plundered combines meticulous research and a powerful multi-generational narrative to lift the veil on the ruthless consequences of racist housing policies and expose faulty victim-blaming discourses. Clear. Accessible. Compelling.” 

<small>Ibram X. Kendi, author of Stamped from the Beginning and How to Be an Antiracist</small>

_${description}_

When Professor Bernadette Atuahene moved to Detroit, she planned to study the city’s squatting phenomenon. What she accidentally found was too urgent to ignore. Her neighbors, many of whom had owned their homes for decades, were losing them to property tax foreclosure, leaving once bustling Black neighborhoods blighted with vacant homes.

Through years of dogged investigation and research, Atuahene uncovered a system of predatory governance, where public officials raise public dollars through laws and processes that produce or sustain racial inequity — a nationwide practice in no way limited to Detroit.

In this powerful work of scholarship and storytelling, Atuahene shows how predatory governance invites complicity from well-meaning people, eviscerates communities, and widens the racial wealth gap. By following the lives of two Detroit grandfathers, one Black and the other white, and their grandchildren, Atuahene tells a riveting tale about racist policies, how they take root, why they flourish, and who profits.

## EARLY PRAISE FOR PLUNDERED

“By telling two family stories—the Bucci’s and the Browns’—in one American city, Bernadette Atuahene puts a face on the pain of racist policies that have impoverished our democracy. Plundered is a compelling achievement of groundbreaking scholarship that you can imagine playing out on a movie screen.”

<small>William J. Barber, II, author of White Poverty and co-chair of the Poor People's Campaign</small>

"At a time when access to home ownership seems out of reach for so many, Plundered makes clear that this sad state of affairs is the result of a series of systemic failures—much of it aided by government policies. In clear, trenchant prose, Atuahene tells us how we got here and the remedies that are needed if we are to move forward. Plundered is a clear-eyed account of the past and a roadmap for a more equitable future."

<small>Melissa Murray, New York Times bestselling co-author of The Trump Indictments and Stokes Professor of Law at NYU Law School</small>

"In this important and timely book, one of the world’s leading experts on property rights brings to light a secret hidden in plain sight; the bureaucratic machinery that maintains and widens the racial wealth gap in our country. Bernadette Atuahene tells this story across generations, following the descendants of two sharecroppers who settled in Detroit, one white and one black, revealing how racist tax policies fill government coffers while taking bread out of the mouths of the poor. Plundered puts flesh on the statistics and calls our attention to a problem few people knew to look for, revealing the routine nature of what Atuahene aptly calls predatory governance. I won’t think of property tax policy or the functions of government in the same way again."

<small>Reuben Jonathan Miller, MacArthur Genius fellow and author of Halfway Home: Race, Punishment and the Afterlife of Mass Incarceration</small>

“Plundered is an in-depth, human-centered analysis of how the property tax regime undermined Black homeownership in Detroit. Through vivid and complex narratives of the actors in this drama, Bernadette Atuahene shows how a ‘predatory system’ of policies and processes sustained and deepened racial inequality. This is one of the best books I have read that makes concrete one of the many ‘systemic’ barriers that continue to bedevil African Americans in their pursuit of wealth and intergenerational mobility. Based on her active engagement to dismantle these barriers, Atuahene does not only analyze the problem, but she provides us the roadmap to solve it. A tour de force of social science, legal studies, and social change.”

<small>Melvin L. Oliver, co-author of Black Wealth/White Wealth: A New Perspective on Racial Inequality and Former president of Pitzer College</small>

“In this masterful interplay of ethnography, history, and truth-telling, Professor Atuahene lays bare the racist policies that rob Black families of their homes and undermine Black communities in Detroit and across the United States. Plundered offers a powerful new framework for recognizing—and dismantling—systemic racism.”

<small>Dorothy Roberts, author of Killing the Black Body and Torn Apart and Professor at University of Pennsylvania</small>

“Plundered is a startling account of the intergenerational consequences of predatory public governance in America. This study of illegal and excessive property tax assessment is a surprising page-turner, moving, suspenseful, and beautifully told. Bernadette Atuahene begins with the dramatically personal story of two families whose grandfathers migrated to Detroit in the 1920’s to escape impoverishment:  one fleeing Italy’s mezzadria system of indenture, the other running from North Carolina’s violent sharecropping culture of life-sapping labor. Both had no assets to start with. Both found jobs in the auto industry. Both arrived with equal levels of hope, persistence, and determined work ethic. But structures of violently enforced racial segregation drove them into different residential geographies and radically different intergenerational legacies of wealth: the descendants of the African American grandfather still live with the wealth transfers and layered obstructions of blocked access to union membership, federal redlining in mortgage lending, racially restrictive covenants, unavailability of homeowners’ insurance, extortive rates of car insurance, predatory lending practices, selective policing, shockingly inflated property tax assessments, and rampant illegality in foreclosure practices.  Plunder reveals a century’s worth of punitively racialized policies that turned one city from a population of homeowners into a population largely of renters, squatters, and the tragically dispossessed.  It is a tale of purposefully crafted inequality–a tale of outright government theft yet hiding in plain sight.”

<small>Patricia J. Williams, MacArthur Genius fellow and author of the Alchemy of Race and Rights</small>

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

	main small {
		font-style: italic;
		font-weight: bold;
		position: relative;
		top: -1rem;
	}
</style>
`;
