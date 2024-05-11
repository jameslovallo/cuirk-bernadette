import { loop, md } from 'cuirk'
import { grid, imageCard } from '../src/components/index.js'
import cards from '../src/data/south-africa/cards.js'

export const meta = {
	title: 'South Africa',
	description:
		"Bernadette Atuahene's work in South Africa examines the country's land restitution program.",
}

export const body = md`
# ${meta.title}

${
	meta.description
} Her [documentary](/south-africa/we-want-whats-ours/documentary) follows one South African family in their journey to reclaim their land. Her [book](/south-africa/we-want-whats-ours/) uses the South African case to develop two socio-legal concepts: dignity takings and dignity restoration, which over 30 different scholars have used to more deeply understand the material and immaterial consequences of property loss in a variety of case studies, spanning time and place. The three [symposia](/south-africa/symposia) dedicated to dignity takings and dignity restoration provide a glimpse into this robust scholarly conversation.

## Learn More

${grid({
	children: [loop(cards, imageCard)],
})}
`
