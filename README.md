**ReactJS-Ajax-Request**

The componentDidMount component shows you how to update the local component state by making an AJAX request.

[https://randomuser.me/api/](https://randomuser.me/api/)

**componentDidMount**

```javascript
    componentDidMount() {
        fetch("https://randomuser.me/api/")
          .then(res => res.json())
          .then(
            (e) => {
              this.setState({
                loading: false,
                data: e.results[0]
              })
            }
          )
      }
```