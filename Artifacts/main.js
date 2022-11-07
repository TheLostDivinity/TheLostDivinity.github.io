/* CANVAS  */

function CardCanvas(color, width, Captype) {
  const canvas = [].slice.call(document.getElementsByClassName("decocanv"))

  canvas.forEach((element) => {
    let ctx = element.getContext("2d")

    ctx.strokeStyle = `${color}`
    ctx.lineWidth = `${width}`
    ctx.lineCap = `${Captype}`

    ctx.strokeStyle = "Goldenrod"
    ctx.lineWidth = "2"
    ctx.lineCap = "Round"

    ctx.beginPath()
    ctx.arc(350, 490 + 50, 50, 3.1, 2 * Math.PI)
    ctx.moveTo(300, 491 + 50)
    ctx.lineTo(15, 491 + 50)
    ctx.moveTo(350, 490 + 50)
    ctx.arc(350, 300, 35, 1, 1 * Math.PI)
    ctx.moveTo(340, 330)
    ctx.arc(325, 330, 15, 0, 2 * Math.PI)
    ctx.stroke()
  })
}

CardCanvas()
