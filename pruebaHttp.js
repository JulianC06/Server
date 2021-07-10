const express = require('express')
const app = express()
const port = 4000
let ejList=['William', 'Julian', 'Castaneda', 'Ruiz']
app.get('/:pos', (req, res)=>{
    const pos = req.params.pos
    if (Number(pos)<0 || Number(pos)>(ejList.length-1))
        res.send('Error, el número solicitado no se encuentra en la lista o es un número negativo.')
    else
        res.send(`El elemento en la posición ${pos} es ${ejList[pos]}`)

})

app.listen(port, (req, res)=>{
    console.log('Example app listening on port 4000')
})