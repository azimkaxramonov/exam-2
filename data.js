const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: "1",
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: "2",
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: "3",
    }
]

let box = document.querySelector('.box')

function reload() {
    for (let item of data) {
        let elem = document.createElement('div')
        let h6 = document.createElement('h6')
        let h1 = document.createElement('h1')
        let h3 = document.createElement('h3')
        let img = document.createElement('img')
        let np = document.createElement('div')
        elem.classList.add('elem')
        np.classList.add('np')

    
        h6.innerHTML = item.preTitle
        h1.innerHTML = item.title
        h3.innerHTML = item.description
        elem.style.backgroundImage = `url(img/${item.img}.jpg)`

        box.append(elem)
        elem.append(h6, h1, h3, np)
        np.append()



    }
}
reload()