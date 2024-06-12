import { useCallback, useEffect, useState } from 'react'
import { DateTime, Duration, Interval } from 'luxon'
import './App.css'

function App() {
  const [timeRemaining, setTimeRemaining] = useState<Duration>(Duration.fromMillis(0))

  const updateTimer = useCallback(() => {
		const finalDate = DateTime.fromISO('2034-07-02T09:00:00+02:00')
		const now = DateTime.now()
		const dateInterval = Interval.fromDateTimes(now, finalDate)
		setTimeRemaining(dateInterval.toDuration([ 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds' ]))
	}, [])

  useEffect(() => {
	updateTimer()
	window.setInterval(updateTimer, 500)
  }, [updateTimer])

  return <>
    <header className="hero">La&nbsp;Capsula&nbsp;del&nbsp;Tempo di&nbsp;Vercelli</header>
	<main>
		{timeRemaining.isValid
		? <div id="timer-countdown">
			<div className="date">
				<div className="labeled-display years">{timeRemaining?.get('years')}</div>
				<div className="labeled-display months">{timeRemaining?.get('months')}</div>
				<div className="labeled-display days">{timeRemaining?.get('days')}</div>
			</div>
			<div className="time">
				<div className="labeled-display hours">{timeRemaining?.get('hours')}</div>
				<div className="labeled-display minutes">{timeRemaining?.get('minutes')}</div>
				<div className="labeled-display seconds">{timeRemaining?.get('seconds')}</div>
			</div>
		</div>
		: <div id="end-opening">La&nbsp;capsula del&nbsp;tempo<br />è pronta per&nbsp;essere&nbsp;aperta!</div>
		}
	</main>
	<footer>
		<section className="credits-card-list">
			<section className="credits-card">
				<img className="credits-card__image" src="images/LaRete.jpg" />
				<div className="credits-card__title">La Rete - Vercelli</div>
				<div className="credits-card__info">
					<a href="https://grandevercelli.it">grandevercelli.it</a>
				</div>
			</section>
		</section>
	</footer>
  </>
}

export default App
