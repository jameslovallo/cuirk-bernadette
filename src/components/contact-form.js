import { html, scss } from 'cuirk'
import { grid } from './grid.js'

export const contactForm = () => html`
	<form method="POST" netlify netlify-honeypot="bot-field">
		<p hidden>
			<label>
				Don’t fill this out if you’re human: <input name="bot-field" />
			</label>
		</p>
		${grid(
			html`
				<label>
					<span>Name<sup></sup></span>
					<input type="text" name="name" required />
				</label>
				<label>
					<span>Phone Number<sup></sup></span>
					<input type="tel" name="phone" required />
				</label>
			`
		)}
		<label>
			<span>Email Address<sup></sup></span>
			<input type="email" name="email" required />
		</label>
		<label>
			<span>Your Message<sup></sup></span>
			<textarea name="message" required></textarea>
		</label>
		<button type="submit">Send</button>
	</form>
`

contactForm.style = scss`
	form {
		display: grid;
		gap: 1rem;

		label {
			display: grid;
			gap: 0.5rem;

			sup {
				color: red;
				&:before {
					content: '*';
				}
			}

			&:has(:valid) sup {
				display: none;
			}

			input,
			textarea {
				border: none;
				border-bottom: 2px solid transparent;
				font-size: 1rem;
				padding: 0.5rem;

				&:focus {
					border-bottom: 2px solid var(--c-primary);
					outline: none;
				}
			}

			textarea {
				height: 8rem;
				resize: none;
			}
		}
	}
`
