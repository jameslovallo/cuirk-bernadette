import { html } from "cuirk";

export const events = () => html`<div id="events"></div>`;

events.style = `
	#events {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}
`;

events.init = () => {
	const events = document.getElementById("events");

	const cal =
		"c_2b7c1bdb729b8df5f9d785b8ab84cdd395c955092aea6f59213695f3192afe9b@group.calendar.google.com";

	const key = "AIzaSyC-wbQGNzMWBi6ouRFahaHF_lXzB0IZ7Ow";

	const calApi = [
		"https://www.googleapis.com",
		"/calendar/v3/calendars/",
		cal,
		"/events?key=",
		key,
		"&singleEvents=true",
		"&orderBy=startTime",
	].join("");

	fetch(calApi)
		.then((res) => res.json())
		.then(({ items }) => {
			events.innerHTML += items
				.map(
					({ end, location, start, summary }) => `
						<add-to-calendar-button
							name="${summary}"
							startDate="${start.dateTime.split("T")[0]}"
							startTime="${start.dateTime.split("T")[1]}"
							endTime="${end.dateTime.split("T")[1]}"
							timeZone="America/New_York"
							location="${location}"
							icsFile="https://calendar.google.com/calendar/ical/c_2b7c1bdb729b8df5f9d785b8ab84cdd395c955092aea6f59213695f3192afe9b%40group.calendar.google.com/public/basic.ics"
							subscribe
							iCalFileName="Plundered"
							options="'Apple','Google','iCal','Outlook.com','Yahoo'"
							buttonStyle="date"
						></add-to-calendar-button>
					`
				)
				.join("");
		});
};
