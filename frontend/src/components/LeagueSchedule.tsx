import type { Fixture } from "../types/fixture"

interface LeagueScheduleProps {
    schedule: {
        league: {
            name: string,
            logo: string
        },
        fixtures: Fixture[]
    }
}

export default function LeagueSchedule({schedule}: LeagueScheduleProps) {
    return (
        <div className="mx-auto w-full px-5 sm:w-[500px]">
            <div className="overflow-hidden rounded-3xl">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-t-3xl">
                    <h4 className="px-8 py-4 text-center text-xs-md font-bold text-gray-900 dark:text-white">
                        {schedule.league.name}
                    </h4>
                </div>

                <div className="bg-white dark:bg-gray-800">
                    {schedule.fixtures.map((fixture) => (
                        <div
                        key={fixture.fixture.id}
                        className="relative flex items-center border-b border-gray-200 px-8 py-4 dark:border-gray-600 last:border-b-0"
                        >
                            <div className="flex items-center gap-1.5 flex-1 justify-end pr-6">
                                <div className="min-w-0 text-sm font-bold text-custom-gray-900 dark:text-white truncate sm:inline-block max-w-[120px]">
                                    {fixture.teams.home.name}
                                </div>
                                <img src={fixture.teams.home.logo} alt="home team logo" className="w-8 h-8 object-contain"/>
                            </div>            

                            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-bold text-custom-gray-900 dark:text-white">
                                {fixture.goals.home} - {fixture.goals.away}
                            </div>

                            <div className="flex items-center gap-1.5 flex-1 justify-start pl-6">
                                <img src={fixture.teams.away.logo} alt="away team logo" className="w-8 h-8 object-contain"/>
                                <div className="min-w-0 text-sm font-bold text-custom-gray-900 dark:text-white truncate sm:inline-block max-w-[120px]">
                                    {fixture.teams.away.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
