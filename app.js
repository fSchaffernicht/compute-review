import { computeReview } from './src/compute'
import prompt from 'prompt'

const names = ['Stephan', 'Dominik', 'Florian', 'Felix']

var schema = {
    properties: {
      isMissing: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'who is missing today?',
      }
    }
  };

prompt.start();
prompt.get(schema, (err, result) => {

  if (err) {
    console.log('there is a error in your application');
  }

  console.log('  person: ' + result.isMissing);

  const filteredNames = names.filter(x => x.toLowerCase() !== result.isMissing.toLowerCase())



  const pairs = computeReview(filteredNames).map(x => `${x.reviewer} => ${x.reviewee}`)
  console.log(pairs);
});
