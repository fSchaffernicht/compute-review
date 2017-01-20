import { computeReview } from './src/compute'

const names = ['Stephan', 'Dominik', 'Florian', 'Felix']

const pairs = computeReview(names).map(x => `${x.reviewer} => ${x.reviewee}`)

console.log(pairs);
