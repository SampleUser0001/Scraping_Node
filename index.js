'use strict'

const axios = require('axios')
const URL = 'https://sampleuser0001.github.io/Practice_Hands_on_JavaScript/server/html/12/02_css.html'

axios.get(URL).then((response) => {
    console.info(response.data)
})
