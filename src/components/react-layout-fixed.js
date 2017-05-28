import './style.scss';

import React,{Children, PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    layout:PropTypes.array,
  };

  static defaultProps = {
    layout:[]
  };
  /*===properties end===*/

  get children(){
    let {layout,children} = this.props;
    layout.length === 3 ? layout : layout.push('0');

    return Children.map(children,(child,index)=>{
      const height = layout[index];
      const padding =  layout.join(' ').replace('*','0');
      const style = height ==='*' ? {padding}: {height};
      return cloneElement(child,{
        style,
        ...child.props
      });
    });
  }

  render(){
    const {className,children,layout,...props} = this.props;
    return (
      <div {...props} className={classNames('react-layout-fixed',className)} children={this.children} />
    );
  }
}
