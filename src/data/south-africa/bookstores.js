import { icon } from '../../components/index.js'
import amazonIcon from '../../images/south-africa/amazon-icon.js'
import spainIcon from '../../images/south-africa/spain-icon.js'

export default [
	{
		children: amazonIcon + 'Amazon',
		href: 'https://amazon.com/We-Want-Whats-Ours-Restitution/dp/0198783353?sa-no-redirect=1',
	},
	{
		children: icon({ name: 'GooglePlay' }) + 'Google Play',
		href: 'https://play.google.com/store/books/details/Bernadette_Atuahene_We_Want_What_s_Ours?id=TWX0AwAAQBAJ',
	},
	{
		children: icon({ name: 'Apple' }) + 'Apple',
		href: 'https://books.apple.com/us/book/we-want-whats-ours/id902965747',
	},
	{
		children: spainIcon + 'Español',
		href: 'https://publicaciones.uexternado.edu.co/gpd-queremos-lo-nuestro-lecciones-del-programa-de-restitucion-de-tierras-de-sudafrica-9789587905908.html',
	},
]
