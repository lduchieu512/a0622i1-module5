import {Facility} from "../model/facility";

export class FacilityDao {
  static facility: Facility []=[
    {
      id: 'DV-0001',
      name: 'Villa Beach Front',
      area: 2500,
      cost: 10000000,
      maxPeople: 10,
      rentType: 'Room',
      serviceType: 'Year',
      standardRoom: 'Vip',
      description: "Có hồ bơi",
      poolArea: 500,
      numberOfFloor: 4,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 'DV-0002',
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Vip',
      description: 'Có thêm bếp nướng',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      id: 'DV-0003',
      name: 'Room Twin 01',
      area: 5000,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg'
    },
    {
      id: 'DV-0004',
      name: 'Villa No Beach Front',
      area: 22000,
      cost: 9000000,
      maxPeople: 8,
      rentType: 'Villa',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có hồ bơi',
      poolArea: 300,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
    },
    {
      id: 'DV-0005',
      name: 'House Princess 02',
      area: 10000,
      cost: 4000000,
      maxPeople: 5,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Normal',
      description: 'Có thêm bếp nướng',
      poolArea: 300,
      numberOfFloor: 2,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg'
    },
    {
      id: 'DV-0006',
      name: 'Room Twin 02',
      area: 3000,
      cost: 900000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 300,
      numberOfFloor: 2,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg'
    },
    {
      id: 'DV-0007',
      name: 'Villa Beach Front 02',
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      rentType: 'Room',
      serviceType: 'Year',
      standardRoom: 'Vip',
      description: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg'
    },
    {
      id: 'DV-0008',
      name: 'House Princess 03',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Vip',
      description: 'Có thêm bếp nướng',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg'
    },
    {
      id: 'DV-0009',
      name: 'Room Twin 03',
      area: 5000,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    }
  ];

}
