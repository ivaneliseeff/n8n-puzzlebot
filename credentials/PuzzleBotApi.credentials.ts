import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PuzzleBotApi implements ICredentialType {
	name = 'puzzleBotApi';
	displayName = 'PuzzleBot API';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: 'https://cp.puzzlebot.top/api?token={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://cp.puzzlebot.top/',
			url: 'api?token={{$credentials.apiKey}}&method=test',
		},
	};
}
