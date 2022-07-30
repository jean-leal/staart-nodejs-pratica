const {
    promises:{
        readFile,
        writeFile,
    }, write
} = require('fs')

const {join} = require('path')

//Promise : Rejected / Fulfilled

const packageJsonPath = join (__dirname, '..', 'package.json')
const destPath = join (__dirname, 'package.copy.promise.json')

//const promiseRead = readFile('path')

readFile(packageJsonPath) //Promise de leitura
    .then((data) => {
        console.log('Terminei de ler')
        return writeFile(destPath,data) // Promise de escrita
    })
    // Resultado da promise de escrita
    .then(() => {
        console.log('Terminei de escrever')
    })


    /*const readPromise = readFile(packageJsonPath)
const copyPromise = readPromise.then((data) =>{
    console.log('Terminei de ler')
    return writeFile(destPath, data)
})
const endPromise = copyPromise.then(()=>{
    console.log('Terminei de escrever')
})*/
