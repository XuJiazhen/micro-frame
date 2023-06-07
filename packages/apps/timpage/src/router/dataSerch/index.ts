import DataSerch from '@/views/dataSerch/index.vue'
import PhysicalPark from '@/views/dataSerch/page/PhysicalPark.vue'
import Building from '@/views/dataSerch/page/Building.vue'
import Floor from '@/views/dataSerch/page/Floor.vue'
import Room from '@/views/dataSerch/page/Room.vue'

const data_serch_routes = [
  {
    path: '/data-serch',
    component: DataSerch,
    children: [
      {
        path: '/data-serch/physicalPark',
        component: PhysicalPark
      },
      {
        path: '/data-serch/building',
        component: Building
      },
      {
        path: '/data-serch/floor',
        component: Floor
      },
      {
        path: '/data-serch/room',
        component: Room
      }
    ]
  }
]

export default data_serch_routes
