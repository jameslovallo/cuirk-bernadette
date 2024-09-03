import { md } from 'cuirk'
import {
	button,
	icon,
	wreaths,
	youtube,
} from '../../../src/components/index.js'

export const meta = {
	title: 'Sifuna Okwethu',
	subtitle: "(We Want What's Ours) - Documentary Film",
}

export const body = md`
# ${meta.title}

**${meta.subtitle}**

${youtube({ id: 'RGVQCetxr8E' })}

${wreaths()}

## About the Film

Sifuna Okwethu (We Want What’s Ours) is an evocative and visually captivating documentary film about loss, resistance, identity, and the elusiveness of justice as experienced by the Ndolila family in their quest to get back their family land. Standing in their way are working class black homeowners who purchased portions of the Ndolila’s land during Apartheid. For the homeowners, the land and houses they have legally purchased are a reward for their hard work. It is the fulfillment of their hopes and dreams for a better life in the new democracy. For the Ndolilas, the land is part of their family legacy and hence deeply intertwined with their identity. Both sides have a legitimate right to the land, but whose rights will prevail?

In the past, stories that explored land dispossession and restitution often pitted dispossessed black communities against the apartheid government or rich white farmers and landowners. Sifuna Okwethu charts a different path, which leads viewers towards a more complex understanding of the dynamics involved in dealing with the present day consequences of past land theft.

## Why This Film Is Important

During Colonialism and Apartheid the white minority brutally stole thousands of acres of land from the African majority in South Africa. Consequently, upon independence, whites owned over 87% of the land although they constituted less than 10% of the population. At independence, the African liberation parties struck a deal with the Apartheid government.  Whites would be able to maintain their jobs and property despite how it was acquired. In exchange, the African majority was promised land reform.  Although multiple decades have passed since independence, the majority of Africans remain landless and impoverished while the affluent white minority still owns the majority of the land. This is one of the most outrageous injustices of the 21st century, yet few people even know about it.

The only redemptive aspect of this heart wrenching story is that, through the Land Restitution Program, the African majority has received some compensation for past land dispossession.  With funding from the Council on Foreign Relations, in 2008, I was in South Africa for nine months working under the Director General of Land Affairs to evaluate the Land Restitution Program.  I conducted a study where I interviewed over 150 people from families whose land was stolen by the Apartheid government and who received compensation.  The stories I gathered are the basis of the book [We Want What's Ours](/south-africa/we-want-whats-ours/).  The problem is that books only reach a miniscule portion of the population, and these are stories the world needs to hear.  This is what inspired us to produce this film.

## Curriculum

Using the documentary as the backdrop, Documentaries to Inspire Social Change (DISC) has created a curriculum that explores how land injustice in South Africa relates to the many injustices youth have witnessed in their own communities. The primary goal of the curriculum is to create awareness of the interconnectedness of struggles for social justice around the world. Students will leave the course with an increased global awareness, understanding of the structural foundations of injustice, and an introduction to property rights.

${button({
	children: 'Download Curriculum' + icon({ name: 'FileDownload' }),
	href: '/src/downloads/final-curriculum.pdf',
	shape: 'rounded',
})}

## An Aerial View of the Ndolila’s Ancestral Land

<iframe class="Map_embed" frameborder="0" style="display: block; width: 100%; aspect-ratio: 4/3;" src="https://maps.google.com/maps?q=Totalsports%20Evaton%20plaza&amp;t=k&amp;z=18&amp;ie=UTF8&amp;output=embed"></iframe>
`
