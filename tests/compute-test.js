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

const everythingIsUnique = (names, times) => {
  let isTrue;

  for (var i = 0; i < times; i++) {
    const pairs = computeReview(names)
    const reviewer = pairs.map(x => x.reviewer)
    const reviewee = pairs.map(x => x.reviewee)

    isTrue = (
      uniq(reviewer).length === reviewer.length &&
      uniq(reviewee).length === reviewer.length
    )

    if (!isTrue) {
      return false
    }
  }

  return true
}

test('reviewer are unique', t => {
  t.ok(everythingIsUnique(['Stephan', 'Dominik', 'Florian', 'Felix'], 1000), 'reviewers should be unique')
  t.end()
})

test('one person is sick', t => {
  t.ok(everythingIsUnique(['Stephan', 'Dominik', 'Florian'], 1000), 'only 3 reviewers should be unique')
  t.end()
})
