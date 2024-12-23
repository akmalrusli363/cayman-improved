const elementCode = '.language-mermaid'

function loadMermaid(theme) {
  window.mermaid.initialize({theme})
  window.mermaid.init({theme}, document.querySelectorAll(elementCode))
}

function saveOriginalData() {
  return new Promise((resolve, reject) => {
    try {
      var els = document.querySelectorAll(elementCode),
        count = els.length
      els.forEach((element) => {
        element.setAttribute('data-original-code', element.innerHTML)
        count--
        if (count == 0) {
          resolve()
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

function resetProcessed() {
  return new Promise((resolve, reject) => {
    try {
      var els = document.querySelectorAll(elementCode),
        count = els.length
      els.forEach((element) => {
        if (element.getAttribute('data-original-code') != null) {
          element.removeAttribute('data-processed')
          element.innerHTML = element.getAttribute('data-original-code')
        }
        count--
        if (count == 0) {
          resolve()
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

saveOriginalData().catch(console.error)
document.body.addEventListener('dark-theme-set', () => {
  resetProcessed().then(loadMermaid('dark')).catch(console.error)
})
document.body.addEventListener('light-theme-set', () => {
  resetProcessed().then(loadMermaid('default')).catch(console.error)
})
loadMermaid(localStorage.getItem('nightMode') == 'true' ? 'dark' : 'light')
