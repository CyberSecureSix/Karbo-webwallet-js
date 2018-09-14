/*
 * Copyright (c) 2018, Gnock
 * Copyright (c) 2018, The Masari Project
 * Copyright (c) 2018, The TurtleCoin Project
 * Copyright (c) 2018, The Karbo Project
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


export class MathUtil{

	static randomFloat(){
		const randomBuffer = new Uint32Array(1);
		window.crypto.getRandomValues(randomBuffer);
		return randomBuffer[0] / (0xffffffff + 1);
	}

	static randomUint32(){
		const randomBuffer = new Uint32Array(1);
		window.crypto.getRandomValues(randomBuffer);
		return randomBuffer[0];
	}

	static getRandomInt(min : number, max : number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static randomTriangularSimplified(max : number){
		let r = MathUtil.randomUint32() % (1 << 53);
		let frac = Math.sqrt(r / (1 << 53));
		let i = (frac*max)|0;
		// just in case rounding up to 1 occurs after sqrt
		if (i == max)
			--i;
		return i;
	}

}