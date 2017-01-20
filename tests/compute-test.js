import test from 'tape'
import { uniq } from 'lodash'
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

test('reviewer are unique', t => {
  const reviewer = computeReview(['Stephan', 'Dominik', 'Florian', 'Felix']).map(x => x.reviewer)
  const reviewee = computeReview(['Stephan', 'Dominik', 'Florian', 'Felix']).map(x => x.reviewee)

  t.deepEqual(uniq(reviewer), reviewer, 'reviewer should be unique')
  t.deepEqual(uniq(reviewee), reviewee, 'reviewee should be unique')
  t.end()
})
