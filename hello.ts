const user = {}

console.log('### define 1')
Object.defineProperty(user, 'name', {
  get() {
    return 'typescript1'
  },
  configurable: true,
})

console.log('### define 2')
Object.defineProperty(user, 'name', {
  get() {
    return 'typescript2'
  },
  configurable: false,
})

console.log('### define 3')
Object.defineProperty(user, 'name', {
  get() {
    return 'typescript3'
  }
})

console.log(user);
