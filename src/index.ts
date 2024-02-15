function init() {
  [...document.querySelectorAll('code.script')].map(element => {
    const htmlElement = element as HTMLElement
    const source = htmlElement.dataset.source
    if (!source) {
      console.error('Invalid source on code.script element')
      return
    }
    if (!htmlElement.parentElement) {
      console.error('Invalid parent for code.script element')
      return
    }
    const sourceLink = document.createElement('a')
    sourceLink.innerText = 'View the Source'
    sourceLink.setAttribute('href', source)
    sourceLink.classList.add('source-link')
    htmlElement.parentElement.insertBefore(sourceLink, element)
    fetch(source).then(response => {
      return response.text()
    }).then(text => {
      htmlElement.innerText = text
    })
  })
}

export { init }
