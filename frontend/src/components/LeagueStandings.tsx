import type { Standings } from "../types/standings";

interface LeagueStandingsProps {
  standings: Standings;
}

export default function LeagueStandings({ standings }: LeagueStandingsProps) {
  return (
    <div className="mx-auto w-full px-5 sm:w-[500px]">
        <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <div className="bg-gray-100 dark:bg-gray-700 px-8 py-4 rounded-t-3xl flex items-center gap-2">
                <img src={standings.logo} alt="league logo" className="w-8 h-8 object-contain" />
                <h4 className="text-center text-xs-md font-bold text-gray-900 dark:text-white flex-1">
                    {standings.name} {standings.season}
                </h4>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse bg-white dark:bg-gray-800">
                    <thead className="text-xs-md font-bold text-gray-900 uppercase dark:text-white">
                        <tr>
                            <th className="py-3.5 ps-8 pe-1 text-start">#</th>
                            <th className="px-2.5 py-3.5 text-start">Team</th>
                            <th className="px-2.5 py-3.5 text-center">PTS</th>
                            <th className="px-2.5 py-3.5 text-center">W</th>
                            <th className="px-2.5 py-3.5 text-center">L</th>
                            <th className="px-2.5 py-3.5 text-center">D</th>
                            <th className="py-3.5 ps-1 pe-8 text-end">GD</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm font-bold text-gray-900 dark:text-white">
                        {standings.standings.map((standing) => (
                            <tr key={standing.rank} className="border-b border-gray-200 dark:border-gray-600">
                                
                                <td className="py-4 ps-8 pe-1 text-start">{standing.rank}</td>
                                <td className="px-2.5 py-4 text-start flex items-center">
                                    <img src={standing.team.logo} alt="league logo" className="w-8 h-8 object-contain mr-2.5" />
                                    {standing.team.name}
                                </td>
                                <td className="px-2.5 py-4 text-center">{standing.points}</td>
                                <td className="px-2.5 py-4 text-center">{standing.all.win}</td>
                                <td className="px-2.5 py-4 text-center">{standing.all.draw}</td>
                                <td className="px-2.5 py-4 text-center">{standing.all.lose}</td>
                                <td className="py-4 ps-1 pe-8 text-end">{standing.goalsDiff}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
