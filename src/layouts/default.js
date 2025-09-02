import { componentScripts, componentStyles, html, when } from "cuirk";
import * as components from "../components/index.js";
import navLinks from "../data/nav.js";

const { bookBanner, footer, pageMeta, nav } = components;

export default ({ meta, children }) => {
	return html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<!-- component styles -->
				${componentStyles(components)}
				<!-- page meta -->
				${pageMeta(meta)}
			</head>
			<body>
				${nav({ links: navLinks })}
				<!-- home page banner -->
				${when(!meta?.title, bookBanner())}
				<div class="layout">
					<main>${children}</main>
				</div>
				${footer({ links: navLinks })}
				<!-- component scripts -->
				${componentScripts(components)}
				<!-- Google tag (gtag.js) -->
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-F6EVZDJ4BP"
				></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag("js", new Date());

					gtag("config", "G-F6EVZDJ4BP");
				</script>
			</body>
		</html>
	`;
};
