import test from 'tape'
import { computeReview, getUniqueIndex } from '../src/compute'

test('getUniqueIndex', t => {
  const actual = [1, 2, 3]

  t.isNot(getUniqueIndex(actual, 4), 4, 'should be 4')
  t.end()
})

test('compute', t => {
  const actual = computeReview(['Stephan', 'Dominik', 'Florian', 'Felix'])

  t.is(actual.length, 4, 'four names should be 4 pairs')
  t.end()
})

// TODO: write test to check if names are unique
test('reviewer are unique', t => {
  const actual = computeReview(['Stephan', 'Dominik', 'Florian', 'Felix'])

  t.end(actual, )
})
