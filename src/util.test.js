import { generateMailtoLink } from './util'

it('Link with EMail test@abc.de has to output mailto:test.abc.de', () => {
  const expected = "mailto:test@abc.de?subject=Review today&body=";
  const actual = generateMailtoLink({
    mail: "test@abc.de",
  });
  expect(actual).toEqual(expected);
})
it('Link with 2 EMails, subjectand text hast to return the right string', () => {

  const expected = "mailto:test@abc.de?subject=Review Today&body=felix => flo%0Aflo => felix";
  const actual = generateMailtoLink({
    mail: "test@abc.de",
    subject: "Review Today",
    pairs: [{ reviewer: "felix", reviewee: "flo"}, {reviewer: "flo", reviewee: "felix"}],
  })
  expect(actual).toEqual(expected);
})
