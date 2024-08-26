import { html, loop, md } from 'cuirk'
import { aboutHeader, button, icon } from '../src/components/index.js'
import social from '../src/data/social.js'

export const meta = {
	title: 'About Bernadette Atuahene',
}

export const body = md`
${aboutHeader({
	children: html`
		<h1>${meta.title}</h1>
		<div style="margin-top: 1rem;">
			${loop(
				social,
				({ icon: name, href, title }) =>
					`${button({
						children: icon({ name }) + title,
						href,
						shape: 'rounded',
					})}` + '&nbsp;'
			)}
		</div>
	`,
})}

Bernadette Atuahene is a property law scholar focusing on land stolen from people in the African Diaspora. She is the daughter of Ghanaian immigrants who grew up in Los Angeles and attended UCLA for college. She then earned her JD from Yale and her MPA from Harvard. After completing her graduate studies, she served as a judicial clerk at the Constitutional Court of South Africa and then practiced as an associate at Cleary, Gottlieb, Steen & Hamilton in New York. She is now a Professor at the USC Gould School of Law.

Prof. Atuahene has worked as a consultant for the World Bank and the South African Land Claims Commission, and she has also directed and produced an award winning short documentary film about one South African family’s struggle to regain their land. She has been honored with the Fulbright Fellowship, Council on Foreign Relation’s International Affairs Fellowship, and Princeton’s Law and Public Affairs Fellowship. Her first book — We Want What’s Ours: Learning from South Africa’s Land Restitution Program (Oxford University Press, 2014) — is based on 150 interviews she conducted with South Africans dispossessed of their land by the colonial and apartheid governments and who received some form of compensation post apartheid.

Prof. Atuahene won a National Science Foundation award for her current project about racialized property tax administration in Detroit, which has received several accolades, including the Law and Society Association’s John Hope Franklin Award for best article on race in 2020, and the prize for the best overall article in 2024. In addition to publishing two New York Times op-eds and appearing on national news shows such as Democracy Now! and the Tavis Smiley Show to discuss her Detroit work, she has also published academic articles in journals such as California Law Review, Northwestern Law Review, and Southern California Law Review.
`
