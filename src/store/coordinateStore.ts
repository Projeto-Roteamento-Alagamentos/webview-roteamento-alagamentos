import { defineStore } from 'pinia';
import { LatLngTuple, LeafletEvent, marker, LatLngExpression } from 'leaflet';

export const useCoordinateStore = defineStore({
  id: 'coordinate',
  
  state: () => ({
    sourceLocation: [0, 0] as LatLngTuple,
    destinyLocation: [0, 0] as LatLngTuple,
    shouldInsertToMap: false
  }),

  actions: {
    setCoordinate(location: 'sourceLocation' | 'destinyLocation', coordinate: LatLngTuple) {
      this[location] = coordinate;
    },
    toggleInsertState() {
      this.shouldInsertToMap = !this.shouldInsertToMap;
    }
  }
});