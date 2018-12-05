/**
 * @author yangchunboy
 * @date 2018.07.04
 * 
 */

import { test } from './config.js';

class Fun {
	constructor() {

	};

	async a() {
		const promise = Promise.resolve({
			then(resolve, reject) {
				setTimeout(resolve, 1000, 'success');
			}
		});
		const result = await promise;
		return result;

	}

}

export default Fun;
