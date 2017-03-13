export const generateMailtoLink = ( {
  mail = "DE.o2.Frontend@syzygy.de",
  subject = "Review today",
  pairs = []
}) => {

  const outputSubject = "?subject=" + subject;
  const outputBody = "&body=" + pairsToString(pairs);

  return "mailto:" + mail + outputSubject + outputBody;
}

const pairsToString = (pairs) => {
  return pairs.map(x => `${x.reviewer.name} => ${x.reviewee.name}`).join('%0A');
}

export const createName = ({
  name = '',
  notAvailable = false
}) => ({
  name,
  notAvailable
})
