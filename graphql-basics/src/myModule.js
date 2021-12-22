const message = 'Some message from myModule.js'

const name = 'mt2h'

const localtion = 'Chile'

const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export { message, name, getGreeting, localtion as default }
