import React from 'react';
import { Card } from 'react-bootstrap';
import { cardProps } from '../../../DataTypes';

function StoreItem({ id, name, price }: cardProps) {
	return (
		<Card>
			<div>{id}</div>
			<div>{name}</div>
			<div>{price}</div>
		</Card>
	);
}

export default StoreItem;
