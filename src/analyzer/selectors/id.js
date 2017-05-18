const ID_RE = /(?![^[]*])#/

module.exports = selectors => {
  const all = selectors.filter(selector => selector.match(ID_RE))
  const unique = all.unique()

  return {
    total: all.size(),
    unique: unique.toArray(),
    totalUnique: unique.size()
  }
}
