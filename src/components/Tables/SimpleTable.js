import React, { PureComponent } from 'react';
import TableWrapper from './table.style';

type Props = {
  className: string
};

export default class SimpleTable extends PureComponent<Props> {
  render() {
    const { className, ...others } = this.props;

    return (
      <TableWrapper {...others} className={`isoSimpleTable ${className}`} />
    );
  }
}
