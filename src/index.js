if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  document.getElementById('addButton').addEventListener('click', function (event) {
    addListElement()
  })

  document.getElementById('textBox').addEventListener('keyup', function (event) {
    event.preventDefault()
    if (event.keyCode === 13) {
      addListElement()
    }
  })

  const addListElement = () => {
    let newText = document.getElementById('textBox').value
    let liAdd = document.createElement('li')
    liAdd.textContent = newText
    document.getElementById('list').appendChild(liAdd)
    let dblClickEvent = false
    liAdd.addEventListener('click', function (event) {
      setTimeout(() => {
        if (!dblClickEvent) {
          if (liAdd.className === 'completed') {
            liAdd.className = null
          } else {
            liAdd.className = 'completed'
          }
        }
      }, 300)
    })
    liAdd.addEventListener('dblclick', function (event) {
      liAdd.parentNode.removeChild(liAdd)
      dblClickEvent = true
    })
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
