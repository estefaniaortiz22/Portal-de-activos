// User data with their credentials and assigned assets
export interface User {
  username: string;
  password: string;
}

export interface Asset {
  id: number;
  serial: string;
  name: string;
  category: string;
  plate: string;
  workStation: string;
  brand: string;
  model: string;
  status: string;
}

// List of users
export const users: User[] = [
  { username: 'juan.martinez', password: '123456' },
  { username: 'estefania.cruzo', password: '123456' },
  { username: 'laura.cardenas', password: '123456' },
  { username: 'gustavo.montalvo', password: '123456' },
  { username: 'jonatan.garcia', password: '123456' },
  { username: 'edwin.mejia', password: '123456' },
  { username: 'daniela.lopez', password: '123456' },
  { username: 'manuela.cruzo', password: '123456' }
];

// Asset assignments per user
export const userAssets: Record<string, Asset[]> = {
  'juan.martinez': [
    {
      id: 1,
      serial: "JM12345",
      name: "MacBook Pro",
      category: "Laptop",
      plate: "JM-0001",
      workStation: "Gerencia",
      brand: "Apple",
      model: "MacBook Pro 2023",
      status: "Activo"
    },
    {
      id: 2,
      serial: "JM67890",
      name: "iPhone 14",
      category: "Móvil",
      plate: "JM-0002",
      workStation: "Gerencia",
      brand: "Apple",
      model: "iPhone 14 Pro",
      status: "Activo"
    }
  ],
  'estefania.cruzo': [
    {
      id: 1,
      serial: "EC54321",
      name: "Portátil Dell",
      category: "Laptop",
      plate: "EC-0001",
      workStation: "Ventas",
      brand: "Dell",
      model: "Latitude 7420",
      status: "Activo"
    },
    {
      id: 2,
      serial: "EC98765",
      name: "Monitor Samsung",
      category: "Monitor",
      plate: "EC-0002",
      workStation: "Ventas",
      brand: "Samsung",
      model: "S32A600",
      status: "Activo"
    }
  ],
  'laura.cardenas': [
    {
      id: 1,
      serial: "LC11223",
      name: "Lenovo ThinkPad",
      category: "Laptop",
      plate: "LC-0001",
      workStation: "Administración",
      brand: "Lenovo",
      model: "ThinkPad X1",
      status: "Activo"
    },
    {
      id: 2,
      serial: "LC44556",
      name: "Diadema Logitech",
      category: "Accesorios",
      plate: "LC-0002",
      workStation: "Administración",
      brand: "Logitech",
      model: "G733",
      status: "Activo"
    }
  ],
  'gustavo.montalvo': [
    {
      id: 1,
      serial: "GM13579",
      name: "HP Spectre",
      category: "Laptop",
      plate: "GM-0001",
      workStation: "Diseño",
      brand: "HP",
      model: "Spectre x360",
      status: "Activo"
    },
    {
      id: 2,
      serial: "GM24680",
      name: "Monitor LG Ultrawide",
      category: "Monitor",
      plate: "GM-0002",
      workStation: "Diseño",
      brand: "LG",
      model: "34WN80C-B",
      status: "Activo"
    },
    {
      id: 3,
      serial: "GM97531",
      name: "Tableta Wacom",
      category: "Accesorios",
      plate: "GM-0003",
      workStation: "Diseño",
      brand: "Wacom",
      model: "Intuos Pro",
      status: "Activo"
    }
  ],
  'jonatan.garcia': [
    {
      id: 1,
      serial: "JG22334",
      name: "Portátil ASUS",
      category: "Laptop",
      plate: "JG-0001",
      workStation: "Desarrollo",
      brand: "ASUS",
      model: "ZenBook Pro",
      status: "Activo"
    },
    {
      id: 2,
      serial: "JG55667",
      name: "Monitor ASUS",
      category: "Monitor",
      plate: "JG-0002",
      workStation: "Desarrollo",
      brand: "ASUS",
      model: "ProArt PA278CV",
      status: "Activo"
    },
    {
      id: 3,
      serial: "JG88990",
      name: "Teclado Mecánico",
      category: "Accesorios",
      plate: "JG-0003",
      workStation: "Desarrollo",
      brand: "Keychron",
      model: "K2",
      status: "Activo"
    }
  ],
  'edwin.mejia': [
    {
      id: 1,
      serial: "EM78901",
      name: "Surface Pro",
      category: "Laptop",
      plate: "EM-0001",
      workStation: "Soporte",
      brand: "Microsoft",
      model: "Surface Pro 8",
      status: "Activo"
    },
    {
      id: 2,
      serial: "EM23456",
      name: "Samsung Galaxy S22",
      category: "Móvil",
      plate: "EM-0002",
      workStation: "Soporte",
      brand: "Samsung",
      model: "Galaxy S22",
      status: "Activo"
    }
  ],
  'daniela.lopez': [
    {
      id: 1,
      serial: "DL65432",
      name: "MacBook Air",
      category: "Laptop",
      plate: "DL-0001",
      workStation: "Marketing",
      brand: "Apple",
      model: "MacBook Air M2",
      status: "Activo"
    },
    {
      id: 2,
      serial: "DL09876",
      name: "iPad Pro",
      category: "Tablet",
      plate: "DL-0002",
      workStation: "Marketing",
      brand: "Apple",
      model: "iPad Pro 12.9",
      status: "Activo"
    }
  ],
  'manuela.cruzo': [
    {
      id: 1,
      serial: "MC45678",
      name: "Portátil HP",
      category: "Laptop",
      plate: "MC-0001",
      workStation: "Recursos Humanos",
      brand: "HP",
      model: "Elitebook 840",
      status: "Activo"
    },
    {
      id: 2,
      serial: "MC78901",
      name: "Monitor Dell",
      category: "Monitor",
      plate: "MC-0002",
      workStation: "Recursos Humanos",
      brand: "Dell",
      model: "U2722D",
      status: "Activo"
    },
    {
      id: 3,
      serial: "MC12345",
      name: "Teléfono IP",
      category: "Comunicaciones",
      plate: "MC-0003",
      workStation: "Recursos Humanos",
      brand: "Cisco",
      model: "IP Phone 8841",
      status: "Activo"
    }
  ]
};

// Default assets for users not in the list
export const defaultAssets: Asset[] = [
  {
    id: 1,
    serial: "DEFAULT-001",
    name: "Portátil Estándar",
    category: "Laptop",
    plate: "STD-0001",
    workStation: "General",
    brand: "Dell",
    model: "Inspiron 14",
    status: "Activo"
  },
  {
    id: 2,
    serial: "DEFAULT-002",
    name: "Monitor Básico",
    category: "Monitor",
    plate: "STD-0002",
    workStation: "General",
    brand: "HP",
    model: "24fw",
    status: "Activo"
  }
];