import './dev.scss';

import {ReactLayoutFixed, ReactLayoutFixedItem} from './main';

/*===example start===*/

// install: npm install afeiship/react-layout-fixed --save
// import : import {ReactLayoutFixed, ReactLayoutFixedItem} from 'react-layout-fixed'

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
