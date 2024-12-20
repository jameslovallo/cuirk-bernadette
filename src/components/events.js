import { html } from "cuirk";

export const events = () =>
	html`<div id="events"><h2>Book Tour Events</h2></div>`;

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
				.map((item, i) => {
					const { end, location, start, summary } = item;
					const date = new Date(start.dateTime);
					const month = date.toLocaleString("default", { month: "short" });
					const day = date.getDate();
					const hour = date.getHours();
					const ap = hour >= 12 ? "PM" : "AM";
					let minutes = String(date.getMinutes());
					minutes = minutes.length === 2 ? minutes : "0" + minutes;
					console.log(hour, minutes);
					if (i === 0) console.log(item);
					return `
						<div class="event-card">
							<div class="event-card-cal">
								<span>${month}</span>
								<span>${day}</span>
							</div>
							<div class="event-card-info">
								<h3>${summary}</h3>
								<p><small>${location}</small></p>
								<p><small class=event-card-time">${hour % 12}:${minutes} ${ap}</small></p>
								<div class="event-card-info-bottom">
									<add-to-calendar-button
										name="${summary}"
										startDate="${start.dateTime.split("T")[0]}"
										startTime="${start.dateTime.split("T")[1]}"
										endTime="${end.dateTime.split("T")[1]}"
										timeZone="America/New_York"
										location="${location}"
										options="'Apple','Google','iCal','Outlook.com','Yahoo'"
										buttonStyle="round"
									></add-to-calendar-button>
								</div>
							</div>
						</div>
					`;
				})
				.join("");
		});
};

events.style = `
	#events {
		display: grid;
		gap: 1rem;
	}

	.event-card {
		background: white;
		display: grid;
		gap: 0.25rem;
		grid-template-columns: 4rem 1fr;

		&-cal {
			align-items: center;
			background: black;
			color: white;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			justify-content: center;
			text-align: center;

			span:first-of-type {
				font-weight: bold;
			}

			span:last-of-type {
				font-size: 2rem;
				font-weight: bold;
			}
		}

		&-info {
			padding: 0.5rem 0.75rem;

			h3, p {
				margin: 0;
			}

			&-bottom {
				margin-top: 1rem;
			}
		}
	}

	add-to-calendar-button::part(atcb-button) {
		background: none;
		border: none;
		border-radius: 0;
		box-shadow: none;
		margin: 0;
		padding: 0;
	}
`;
