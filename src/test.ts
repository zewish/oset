import { expect, should } from 'chai';
import oset from './oset';
should();

describe('oset.js', () => {
  let obj: { [key: string]: any };

  beforeEach(() => {
    obj = {};
  });

  it('returns the modified object', () => {
    const val = 'so, wow!';

    obj = {
      a: { b: 'yay' }
    };

    const expected = {
      a: {
        b: 'yay',
        c: val
      }
    };

    const o = oset(obj, 'a.c', val);

    o.should.eql(expected);
    obj.should.eql(expected);
  });

  it('returns undefined', () => {
    expect(
      oset(undefined, 'a.c', 'whatever')
    ).to.be.undefined;
  });

  it('sets property when using dot notation selector', () => {
    const val = 'abracadabra';

    oset(obj, 'a.b.c.10', val).should.eql({
      a: {
        b: { c: { '10': val } }
      }
    });
  });

  it('sets property when using array notation selector', () => {
    const val = 'wow! such property!';

    oset(obj, 'a[b[c[10]]]', val).should.eql({
      a: {
        b: { c: { '10': val } }
      }
    });
  });

  it('sets property when using mixed notation selector', () => {
    const val = 'wow - mixed';

    oset(obj, 'a.b[c.10]', val).should.eql({
      a: {
        b: { c: { '10': val } }
      }
    });
  });

  it('sets property in an array when available', () => {
    const val1 = 'cool 8-)';
    const val2 = 'even cooler 888-)';

    obj = {
      a: {
        arr: [ val1 ]
      }
    };

    oset(obj, 'a.arr[1]', val2).should.eql({
      a: {
        arr: [ val1, val2 ]
      }
    });
  });

  it('replaces non-object values', () => {
    obj = {
      a: 'lala',
      b: {
        no: false,
        nope: 'a string'
      }
    };

    oset(obj, 'b.no.yay.super', 'wow').should.eql({
      a: 'lala',
      b: {
        no: { yay: { super: 'wow' } },
        nope: 'a string'
      }
    });

    oset(obj, 'b.nope.metoo', 'replace all the things!').should.eql({
      a: 'lala',
      b: {
        no: { yay: { super: 'wow' } },
        nope: { metoo: 'replace all the things!' }
      }
    });
  });
});
