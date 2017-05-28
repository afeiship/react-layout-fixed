import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  static isFixedItem = true;
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    position:PropTypes.oneOf([
      'top','bottom'
    ]),
  };

  static defaultProps = {
    position:'top'
  };
  /*===properties end===*/

  render(){
    const {className,position,...props} = this.props;
    return (
      <div  {...props} data-position={position} className={classNames('react-layout-fixed-item',className)} />
    );
  }
}
