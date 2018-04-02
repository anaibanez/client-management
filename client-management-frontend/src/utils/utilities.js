import React from 'react';
import { FormattedMessage } from 'react-intl';

export const removeKeys = (objectData, regularExpresion) => {
  let newObj = {};
  Object.keys(objectData).forEach((objKey) => {
    if (!regularExpresion.test(objKey)) {
      newObj = { ...newObj, [objKey]: objectData[objKey] };
    }
  });
  return newObj;
};

export const getLiteral = (id, values = {}) => <FormattedMessage id={id} values={values} />;
