import {ShipmentDataType} from '../../components/ui/card/shipment-card/shipmentCard';

export type statusType =
  | 'cancel'
  | 'received'
  | 'error'
  | 'success'
  | 'warning';

export const shipmentStatusData: statusType[] = [
  'cancel',
  'received',
  'error',
  'success',
  'warning',
];

const baseShipment: ShipmentDataType = {
  status: 'cancel',
  id: '23434',
  number: '41785691423',
  type: 'AWB',
  fromLocation: 'Cairo',
  toLocation: 'Alexandria',
  origin: {
    title: 'Origin',
    address: 'Dokki, 22 Nile St.',
    location: 'Cairo',
  },
  destination: {
    title: 'Destination',
    address: 'Smoha, 22 max St.',
    location: 'Alexandria',
  },
};

export const shipmentData: ShipmentDataType[] = Array.from(
  {length: 30},
  (_, index) => ({
    ...baseShipment,
    id: `${baseShipment.id}-${index + 1}`,
    status:
      shipmentStatusData[Math.floor(Math.random() * shipmentStatusData.length)],
    number: `${Math.floor(Math.random() * 1e10) + 1e10}`,
  }),
);
