import { computeReview } from './src/compute'
import prompt from 'prompt'
import colors from 'colors/safe'

const names = [
  'Stephan',
  'Dominik',
  'Florian',
  'Felix'
]

const schema = {
  properties: {
    name: {
      description: colors.magenta('is someone missing? (if not just hit enter)')
    }
  }
}

prompt.start();

prompt.get(schema, (err, result) => {
  if (!err) {
    const filteredNames = names.filter(x => x.toLowerCase() !== result.name.toLowerCase())
    const pairs = '\n\n' + computeReview(filteredNames).map(x => `${x.reviewer} => ${x.reviewee}`).join('\n\n')

    console.log(colors.grey('pairs today are: ') + colors.bgGreen(pairs))
  }
})
