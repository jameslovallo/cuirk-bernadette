import { md } from 'cuirk'
import {
	button,
	card,
	cardActions,
	icon,
	pressList,
} from '../../../src/components/index.js'
import symposia1 from '../../../src/data/south-africa/symposia1.js'
import symposia2 from '../../../src/data/south-africa/symposia2.js'
import symposia3 from '../../../src/data/south-africa/symposia3.js'

export const meta = {
	title: 'The Symposia',
}

export const body = md`
# ${meta.title}

In We Want What's Ours: Learning from South Africa's Land Restitution Program (Oxford University Press, 2014), Professor Atuahene conducted 150 interviews with South Africans whom the colonial and apartheid authorities forcibly removed from their homes and lands as a result of racially discriminatory laws and policies. Using the South African case, the book develops two socio-legal concepts: dignity takings and dignity restoration.

## Dignity Takings

There are some instances when property is taken from an individual or a group and the appropriate remedy is to give the thing (or something approximating its value) back. In other instances, property is taken as part of a larger strategy of dehumanization or infantilization. In these instances, compensating people for things taken is not enough because they lost more than their property. The takings was also an assault on their dignity. This dual harm is called a dignity taking.

## Dignity Restoration

The appropriate remedy for a dignity taking is something more than mere reparations (i.e. compensation for things taken). Instead, dignity restoration, which addresses deprivations of both property and dignity, is required. Dignity restoration compensates individuals and communities for things taken through processes that affirm their humanity and embrace their agency.

In three different symposia, more than 30 scholars have taken the concepts of dignity takings and dignity restoration beyond the South African situation and applied them to case studies in diverse temporal and geographic contexts.

## Dignity Takings and Dignity Restoration

Creating a New Theoretical Framework for Understanding Involuntary Property Loss and the Remedies Required

<img src="/src/images/south-africa/symposia/lsi.webp" alt="Law & Social Inquiry - Journal of the American Bar Foundation" width="250" style="margin-bottom: 2rem" />

${card([
	pressList(symposia1),
	cardActions([
		button({
			children: 'Go to Publication' + icon({ name: 'ArrowRight' }),
			href: 'https://onlinelibrary.wiley.com/toc/17474469/2016/41/4',
			shape: 'rounded',
		}),
	]),
])}

## Dignity Takings and Dignity Restoration

<img src="/src/images/south-africa/symposia/cklr.webp" alt="Chicago Kent Law Review" width="250" style="margin-bottom: 2rem" />

${card([
	pressList(symposia2),
	cardActions([
		button({
			children: 'Go to Publication' + icon({ name: 'ArrowRight' }),
			href: 'https://studentorgs.kentlaw.iit.edu/cklawreview/issues/past-issues/vol-92-issue-3/',
			shape: 'rounded',
		}),
	]),
])}

## Special Focus: Dignity Takings and Dignity Restorations

<img src="/src/images/south-africa/symposia/ahrlj.webp" alt="African Human Rights Law Journal" width="250" style="margin-bottom: 2rem" />

${card([
	pressList(symposia3),
	cardActions([
		button({
			children: 'Go to Publication' + icon({ name: 'ArrowRight' }),
			href: 'https://www.ahrlj.up.ac.za/table-of-contents-volume-18-no-2-2018#:~:text=special%20focus%3A%20dignity%20takings%20and%20dignity%20restorations',
			shape: 'rounded',
		}),
	]),
])}

<style>
	.card > ul {padding: 1rem;}
</style>
`
