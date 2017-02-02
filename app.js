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
    isMissing: {
      description: colors.magenta('is someone missing?'),
      pattern: /y[es]*|n[o]?/,
      required: true,
    },
    name: {
      description: colors.magenta('who?'),
      ask: function() {
        const input = prompt.history('isMissing').value
        return input == 'no' || input == 'n'
      },
      pattern: /^[a-zA-Z\s\-]+$/,
      required: true,
    }
  }
}

prompt.start();

prompt.get(schema, (err, result) => {
  if (!err) {

    if (result.isMissing === 'no') {
      console.log('ok')
    } else {
      const filteredNames = names.filter(x => x.toLowerCase() !== result.name.toLowerCase())
      const pairs = '\n\n' + computeReview(filteredNames).map(x => `${x.reviewer} => ${x.reviewee}`).join('\n\n')

      console.log(colors.grey('pairs today are: ') + colors.bgGreen(pairs))
    }
  }
})
