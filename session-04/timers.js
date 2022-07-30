const logCalled = () => {
    console.log('> Fui chamada')
}

setTimeout(() => {
    logCalled()
}, 1000)

setTimeout(logCalled, 1000)

setTimeout(() => {
    logCalled()
    setTimeout(logCalled, 1000)
}, 3000)


setInterval(() => {
    console.log('> Chamada no intervalo')
}, 1000 )