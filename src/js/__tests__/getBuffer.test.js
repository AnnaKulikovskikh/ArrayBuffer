import ArrayBufferConverter from '../class';
import getBuffer from '../getBuffer';

test('buffer', () => {
  const a = new ArrayBufferConverter();
  a.load();
  expect(a.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
