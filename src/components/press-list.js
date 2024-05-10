import { html, loop, scss } from 'cuirk'

const pressListItem = ({ href, title, description, img }) =>
	!img
		? html`
				<li>
					<a href="${href}">${title}</a>
					<small>${description}</small>
				</li>
		  `
		: html`
				<li class="with-img">
					<img src="${img}" />
					<div>
						<a href="${href}">${title}</a>
						<small>${description}</small>
					</div>
				</li>
		  `

export const pressList = (items) => html`
	<ul class="press-items">
		${loop(items, pressListItem)}
	</ul>
`

pressList.style = scss`
	.press-items {
		list-style: none;
		margin: 0;
		padding: 0;

		> li {
			display: grid;
			margin-bottom: 1rem;

			&.with-img {
				align-items: center;
				gap: 1rem;
				grid-template-columns: auto 1fr;

				> img {
					border-radius: 50%;
				}

				> div {
					display: grid;
				}
			}
		}
	}
`
