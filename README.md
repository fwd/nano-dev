![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center">Offline Nano Wallet</h1>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

**LOCAL:**
```html
<script src="/nano.js"></script>
```

**CDN:**
```html
<script src="https://unpkg.com/@nano/wallet"></script>
```

**NPM:**
```js
// npm install @nano/wallet
const nano = require('@nano/wallet')
```

**BASIC:**
```js
nano.app({ 
    filename: 'aes_encrypted_string.txt', 
    password: process.env.PASSWORD 
})

console.log( nano.accounts() )

// nano.convert('1', 'NANO', 'RAW')

await nano.receive()

await nano.send({ 
    to: [ 'nano_1faucet7b6xjyha7m13objpn5ubkquzd6ska8kwopzf1ecbfmn35d1zey3ys' ], 
    amount: nano.convert(0.0001, 'NANO', 'RAW')
})
```

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

### License

MIT

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

### Stargazers

[![Stargazers over time](https://starchart.cc/fwd/nano-offline.svg)](https://github.com/fwd/nano-offline)
