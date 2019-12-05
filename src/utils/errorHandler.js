// @flow
import React from 'react';
import { notification } from 'antd';

const errorHandler = (error: Object, config?: Object) => {
  if (typeof error === 'object' && error.errors instanceof Array) {
    notification.error({
      message: 'Error',
      description: (
        <div>
          {error.errors.map(message => (
            <span key={`error_${Math.random()}`}>
              {JSON.stringify(message)}
              <br />
            </span>
          ))}
        </div>
      ),
      ...config
    });
  } else if (typeof error === 'object' && error.message) {
    notification.error({
      message: 'Error',
      description: error.message,
      ...config
    });
  } else {
    notification.error({
      message: 'Error',
      description: 'Invalid format of error',
      ...config
    });
  }
};

export default errorHandler;
