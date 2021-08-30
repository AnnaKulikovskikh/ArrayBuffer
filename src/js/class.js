// TODO: write your code here
import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load() {
    this.buffer = getBuffer();
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
  }
}
