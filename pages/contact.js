import { md } from 'cuirk'
import { contactForm, linkList } from '../src/components/index.js'
import social from '../src/data/social.js'

export const meta = {
	title: 'Contact',
}

export const body = md`
# Contact

## Newsletter

${linkList([
	{
		icon: 'EmailNewsletter',
		title: 'Sign up',
		href: 'https://actionnetwork.org/forms/subscribe-to-our-newsletter-13?source=direct_link&',
	},
])}

## Social Media

${linkList(social)}

## Contact Form

${contactForm()}
`
