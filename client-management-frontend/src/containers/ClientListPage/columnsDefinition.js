import React from 'react';
import { Button } from 'react-bootstrap';

import { getLiteral } from '../../utils/utilities';

export default ({ ...actions }) => [
  {
    Header: getLiteral('client.name'),
    accessor: 'name',
  },
  {
    Header: getLiteral('client.username'),
    accessor: 'username',
  },
  {
    Header: getLiteral('client.phone'),
    accessor: 'phone',
  },
  {
    Header: getLiteral('client.email'),
    accessor: 'email',
  },
  {
    Header: getLiteral('client.website'),
    accessor: 'website',
  },
  {
    Header: getLiteral('client.address.city'),
    accessor: 'address.city',
  },
  {
    Header: getLiteral('client.company.name'),
    accessor: 'company.name',
  },
  {
    Header: '',
    accessor: '',
    Cell: (row) => (<span>
      <Button onClick={() => actions.goDetail(row.original.id)} bsStyle="info"><i className="fa fa-address-card-o"></i></Button>
      <Button onClick={() => actions.goEdit(row.original.id)} bsStyle="default"><i className="fa fa-edit"></i></Button>
      <Button onClick={() => actions.delete(row.original.id)} bsStyle="danger"><i className="fa fa-trash-o"></i></Button>
    </span>),
  },
];
