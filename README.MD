# react-layout-fixed
> Fixed layout for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    layout:PropTypes.array,
  };

  static defaultProps = {
    layout:[]
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-layout-fixed --save
// import : import ReactLayoutFixed from 'react-layout-fixed'

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-fixed">
        <ReactLayoutFixed layout={['50px','*','60px']}>
          <ReactLayoutFixedItem className="top" position="top">
          Top bar
          </ReactLayoutFixedItem>

          <section className="body">
            <p>test...</p>
            <p>test...</p>
            <p>test...</p>
            <p>test...</p>
            <p>test...</p>
            <p>test...</p>
          </section>

          <ReactLayoutFixedItem className="bottom" position="bottom">
          Bottom bar
          </ReactLayoutFixedItem>
        </ReactLayoutFixed>
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

