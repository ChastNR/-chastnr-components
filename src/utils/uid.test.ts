import uid from './uid';

describe('uid', () => {
  it('should return unique id', () => {
    const ids: string[] = [];

    for (let i = 0; i < 100; i++) {
      ids.push(uid());
    }

    const hasSameValues = ids.some((i, index, arr) => arr[index] !== i && arr.includes(i));

    expect(hasSameValues).toBeFalsy();
  });
});
