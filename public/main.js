const request = new XMLHttpRequest()

getCSS.onclick = () => {
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('response: ')
                console.log(request.response)
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                console.log('Failure when loading!')
            }
        }
    }
    request.send()
}

getJS.onclick = () => {
    request.open('GET', '/new.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('response: ')
                console.log(request.response)
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                console.log('Failure when loading!')
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    request.open('GET', '/new.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('response: ')
                console.log(request.response)
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                console.log('Failure when loading!')
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    request.open('GET', '/new.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('response: ')
                console.log(request.response)
                const xml = request.responseXML
                const text = xml.querySelector('warning').textContent
                console.log(text.trim())
            } else {
                console.log('Failure when loading!')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    request.open('GET', '/new.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('response: ')
                console.log(request.response)
                let object
                try {
                    object = JSON.parse(request.response)
                } catch (error) {
                    console.log('JSON error!')
                    console.log(error)
                    object = {nothing: null}
                }
                console.log(object)
            } else {
                console.log('Failure when loading!')
            }
        }
    }
    request.send()
}

let n = 2
nextPage.onclick = () => {
    request.open('GET', `/page${n++}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const arr = JSON.parse(request.response)
                arr.forEach(item => {
                    let li = document.createElement('li')
                    li.textContent = item.id
                    list.appendChild(li)
                })
            }
        }
    }
    request.send()
}