import { generateMailtoLink, createName } from './util'

it('Link with EMail test@abc.de has to output mailto:test.abc.de', () => {
  const expected = "mailto:test@abc.de?subject=Review today&body=";
  const actual = generateMailtoLink({
    mail: "test@abc.de",
  });
  expect(actual).toEqual(expected);
})

it('Link with 2 pairs, subject and text has to return the right string', () => {
  const expected = "mailto:test@abc.de?subject=Review Today&body=felix => flo%0Aflo => felix";
  const actual = generateMailtoLink({
    mail: "test@abc.de",
    subject: "Review Today",
    pairs: [
      {
        reviewer: createName({ name:'felix' }),
        reviewee: createName({ name:'flo' }),
      },
      {
        reviewer: createName({ name:'flo' }),
        reviewee: createName({ name:'felix' }),
      }],
  })
  expect(actual).toEqual(expected);
})
