const {
    readFileSync,
    writeFileSync,
} = require('fs')

const {
    join, 
} = require('path')

const copyFileBlocking = (source, dest) =>{
    console.log('Lendo blocking conteudo')
    const content = readFileSync(source)
    console.log('Escrevendo blocking conteudo')
    writeFileSync(content)

}

const sourcePath = join (__dirname, 'files', 'example.txt')
const destPath = join (__dirname, 'files', 'example.copy.blocking.txt')

copyFileBlocking(sourcePath, destPath)










/*   const{
    readFileSync,
    writeFileSync,
    readFile, 
    writeFile,
} = require('fs')

const{
    join,
} = require('path')

const logDuration = (label, startTime) => {
    console.log(`${label} levou ${Date.now() - startTime}ms`)
}

const copyFileBlocking = (source, dest) => {
    const startTime = Date.now()
    console.log('Lendo blocking conteudo')
    const content = readFileSync(source)
    console.log('Escrevendo blocking conteudo')
    writeFileSync(dest, content)
    logDuration('copyFileBlocking', startTime)
}

const sourcePath = join(__dirname,'files', 'example.txt' )
const destPath = join(__dirname, 'files', 'example.copy.blocking.txt' )

copyFileBlocking(sourcePath, destPath)
console.log('Copia blocking com sucesso')

console.log('*'.repeat(50))

const copyFileNonBlocking = (sourcePath, destPath) => {
    const startTime = Date.now()
    
    console.log('Começou a copiar non-blocking')
    readFile(sourcePath, (_err, data) =>{
        console.log('terminou de ler non-blocking')

        writeFile(destPath, data, (_err)=>{
        console.log('terminou de escrever non-blocking')

        logDuration('copyFileNonBlocking', startTime)
        })
    })
}


const destPathNonBlocking = join(__dirname,'files', 'example.copy.non-blocking.txt' )

copyFileNonBlocking(sourcePath,destPathNonBlocking)

console.log('Terminou mesmo?')*/
