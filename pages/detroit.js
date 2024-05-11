import { md } from 'cuirk'
import { button, grid, youtube } from '../src/components/index.js'

export const meta = {
	title: 'Illegally Inflated Property Taxes in Detroit',
	description: 'Bernadette create the Coalition for Property Tax Justice',
}

export const body = md`
# ${meta.title}

Between 2009 and 2015, the Detroit Assessment Division was assessing between 55 percent and 85 percent of homes at rates that violated the Michigan Constitution, which clearly states that a property cannot be assessed at more than 50 percent of its market value. To put a stop to the injustice, Prof. Atuahene worked alongside several grassroots groups to create the [Coalition for Property Tax Justice](https://illegalforeclosures.org).

## Watch Our Videos

${grid({
	children: [youtube({ id: 'bD3vZYDYZsM' }), youtube({ id: 'Zpfvs-VAMJc' })],
})}

## Learn More and Get Involved

Founded in 2017, the [Coalition for Property Tax Justice](https://illegalforeclosures.org) is a collective of several long-standing Detroit grassroots organizations formed to accomplish three goals:

1. Stop unconstitutional property tax assessments
2. Compensate Detroit residents who overpaid or have already lost their homes because of illegally inflated property taxes
3. Suspend pending property tax foreclosures until it is confirmed that the delinquent taxpayers were not unconstitutionally assessed

Since the Coalition’s inception, we’ve accomplished an impressive amount. From starting an unprecedented Dignity Restoration Housing Program to shaping the settlement of a groundbreaking lawsuit and solidifying the wins in a City ordinance, Coalition member organizations haven’t stopped fighting for the rights of Detroit’s working families.

${button({
	children: 'Learn More',
	href: 'https://illegalforeclosures.org',
	shape: 'rounded',
})}
${button({
	children: 'Donate',
	href: 'https://actionnetwork.org/fundraising/coalition-for-property-tax-justice',
	variant: 'ghost',
	shape: 'rounded',
})}
`
