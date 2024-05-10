import { md } from 'cuirk'
import { pressList } from '../src/components/index.js'
import detroit from '../src/data/press/detroit.js'
import highlights from '../src/data/press/highlights.js'
import southAfrica from '../src/data/press/south-africa.js'

export const meta = {
	title: 'Press',
}

export const body = md`
# ${meta.title}

## Selected Highlights

${pressList(highlights)}

## Detroit

${pressList(detroit)}

## South Africa

${pressList(southAfrica)}
`
