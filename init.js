import app from './app'

const PORT = 4000;

const handleListening = ()=>{
    console.log(`we listening your site https://localhost:${PORT}`)
}

app.listen(PORT, handleListening)