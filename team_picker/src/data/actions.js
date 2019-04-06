
export const submitPlayers = ({ players }) => {
	
	return {
		type: 'submitPlayers',
		players,
	}
}

export const shuffle = () => {
	
	return {
		type: 'shuffle',

	}
}

export const submitSettings = ({ numberOfTeams, teamSize, homeAway }) => {
	
	return {
		type: 'settings',
		numberOfTeams: +numberOfTeams,
		teamSize: +teamSize,
		homeAway,
	}
}

export const createLeague = () => ({ type: 'createLeague', });

export const reset = () =>  ({ type: 'reset', });