import { getRobots } from './array';

describe('Array tests', () => {
  it('Should return at least three robots', () => {
    const res = getRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3);
  });

  it('Should contain Megaman and Ultron', () => {
    const res = getRobots();
    expect( res ).toContain('Megaman');
    expect( res ).toContain('Ultron');
  });
});
