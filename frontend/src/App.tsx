import { useState, useEffect } from 'react';
import { dummyFixture, dummyStandings } from "./data/dummy";
import LeagueSchedule from "./components/LeagueSchedule";
import LeagueStandings from "./components/LeagueStandings";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <main className={darkMode ? "dark " : ""}>
      <div className="py-10 h-screen bg-gray-50 dark:bg-zinc-900">
        <LeagueSchedule schedule={{ league: { name: "Premier Division", logo: "https://media.api-sports.io/football/leagues/115.png" }, fixtures: dummyFixture }} />
        <LeagueStandings standings={dummyStandings} />
      </div>
    </main>
  )
}

export default App
