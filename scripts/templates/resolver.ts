import {ResolverParameters, ResolverReturned} from '../../src/class';
import {Ok, Result} from 'ts-results';

export default async function (p: ResolverParameters): Promise<Result<ResolverReturned, string>> {

	//YOUR CODE HERE

	return new Ok({
		directLink: 'http://localhost/file.exe',
	});
}