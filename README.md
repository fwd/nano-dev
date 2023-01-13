![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center">Nano.to Developer Portal</h1>
<h3 align="center">Hosted on Github</h3>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## Nano.to Packages

Accept non-custodial NANO payments on any website.

# One-time Charge

```html
<script src="https://dev.nano.to/pay.js"></script>

<script>
    nano.checkout({ 
        amount: 0.1,
        address: 'YOUR_ADDRESS', 
        success: (block) => {
        	console.log(block)
        }
    })
</script>
```

# Pay Per View

```html
<script src="https://dev.nano.to/pay.js"></script>
<script>
    nano.ppv({ 
        element: '.premium',
        amount: 0.1,
        address: 'YOUR_ADDRESS', 
        background: 'blue' 
        success: (block) => {
        	// Element(s) .premium are automatically shown.
        	console.log(block)
        }
    })
</script>
```

# Nano.to Actions

```html
<script src="https://dev.nano.to/pay.js"></script>

<script>
    nano.checkout({ 
        amount: 0.1,
        address: 'YOUR_ADDRESS', 
        api_key: 'YOUR_PUBLIC_API_KEY',
        success: (block) => {
        	console.log(block)
        }
    })
</script>
```


![line](https://github.com/fwd/n2/raw/master/.github/line.png)