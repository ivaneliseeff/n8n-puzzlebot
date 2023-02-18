/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class PuzzleBot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PuzzleBot',
		name: 'PuzzleBot',
		icon: 'file:puzzlebot.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with PuzzleBot API',
		defaults: {
			name: 'PuzzleBot',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
