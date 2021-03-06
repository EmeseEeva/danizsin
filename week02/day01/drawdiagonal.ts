export { };
'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
	let currLine: string = '';
	if (i === 0 || i === lineCount - 1) {
		for (let j: number = 0; j < lineCount - 1; j++) {
			currLine = currLine + '%';
		}
	} else {
		for (let k: number = 0; k < lineCount - 1; k++) {
			if (k === 0 || k === lineCount - 2) {
				currLine = currLine + '%';
			} else if (i == k) {
				currLine = currLine + '%';
			} else {
				currLine = currLine + ' ';
			}
		}
	}
	console.log(currLine);
}