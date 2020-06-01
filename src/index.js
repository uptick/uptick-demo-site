function init() {
  [...document.querySelectorAll('code.script')].map(element => {
    const source = element.dataset.source
    const sourceLink = document.createElement('a')
    sourceLink.innerText = 'View the Source'
    sourceLink.setAttribute('href', source)
    sourceLink.classList.add('source-link')
    element.parentElement.insertBefore(sourceLink, element)
    fetch(source).then(response => {
      return response.text()
    }).then(text => {
      element.innerText = text
    })
  })
}

export { init }
