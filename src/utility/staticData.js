import moment from "moment"
export const topThreeAttacksData = {
  customer:[
    {
      id: 1,
      category: 'customer',
      count: 20,
      percentage: 540,
      date: new Date(1639017344395),
      name: 'Port 675',
      full: 100,
      fill: '#004E81'
    },
    {
      id: 2,
      category: 'peer',
      count: 818,
      percentage: 966,
      date: new Date(1642971310392),
      name: 'Port 939',
      full: 100,
      fill: '#1CA3FC'
    },
    {
      id: 3,
      category: 'peer',
      count: 687,
      percentage: 318,
      date: new Date(1642240804103),
      name: 'Port 193',
      full: 100,
      fill: '#058FE9'
    },
    {
      id: 4,
      category: 'peer',
      count: 681,
      percentage: 305,
      date: new Date(1641026840048),
      name: 'Port 576',
      full: 100,
      fill: '#0178C6'
    },
    {
      id: 5,
      category: 'peer',
      count: 251,
      percentage: 816,
      date: new Date(1638679635154),
      name: 'Port 932',
      full: 100,
      fill: '#2A83BE'
    },
    {
      id: 6,
      category: 'peer',
      count: 436,
      percentage: 10,
      date: new Date(1644035458706),
      name: 'Port 213',
      full: 100,
      fill: '#0D66A1'
    }
  ],
peer:[
  {
    id: 1,
    category: 'peer',
    count: 903,
    percentage: 615,
    date: new Date(1638185459562),
    name: 'Port 712',
    full: 100,
    fill: '#004E81'
  },
  {
    id: 2,
    category: 'hive',
    count: 87,
    percentage: 355,
    date: new Date(1642509477070),
    name: 'Port 476',
    full: 100,
    fill: '#1CA3FC'
  },
  {
    id: 3,
    category: 'peer',
    count: 879,
    percentage: 294,
    date: new Date(1638227589542),
    name: 'Port 41',
    full: 100,
    fill: '#058FE9'
  },
  {
    id: 4,
    category: 'peer',
    count: 869,
    percentage: 596,
    date: new Date(1642478153587),
    name: 'Port 30',
    full: 100,
    fill: '#0178C6'
  },
  {
    id: 5,
    category: 'peer',
    count: 266,
    percentage: 900,
    date: new Date(1645611754780),
    name: 'Port 268',
    full: 100,
    fill: '#2A83BE'
  },
  {
    id: 6,
    category: 'peer',
    count: 412,
    percentage: 974,
    date: new Date(1640548471856),
    name: 'Port 538',
    full: 100,
    fill: '#0D66A1'
  },
  {
    id: 7,
    category: 'peer',
    count: 835,
    percentage: 342,
    date: new Date(1640979935540),
    name: 'Port 555',
    full: 100,
    fill: '#0E5A8C'
  },
  {
    id: 8,
    category: 'hive',
    count: 470,
    percentage: 647,
    date: new Date(1640354799740),
    name: 'Port 855',
    full: 100,
    fill: '#156FAB'
  },
  {
    id: 9,
    category: 'peer',
    count: 644,
    percentage: 931,
    date: new Date(1641900302036),
    name: 'Port 312',
    full: 100,
    fill: '#53A2D7'
  },
  {
    id: 10,
    category: 'hive',
    count: 268,
    percentage: 349,
    date: new Date(1644756789668),
    name: 'Port 551',
    full: 100,
    fill: '#3FB2FF'
  },
  {
    id: 11,
    category: 'customer',
    count: 61,
    percentage: 554,
    date: new Date(1643333754260),
    name: 'Port 298',
    full: 100,
    fill: '#8AD0FF'
  },
  {
    id: 12,
    category: 'customer',
    count: 645,
    percentage: 147,
    date: new Date(1647429731093),
    name: 'Port 870',
    full: 100,
    fill: '#A6C5DA'
  },
  {
    id: 13,
    category: 'peer',
    count: 394,
    percentage: 610,
    date: new Date(1644987416286),
    name: 'Port 947',
    full: 100,
    fill: '#BFC7CD'
  },
  {
    id: 14,
    category: 'customer',
    count: 7,
    percentage: 374,
    date: new Date(1638877242775),
    name: 'Port 973',
    full: 100,
    fill: '#CFC7D4'
  }
],
hive:[
  {
    id: 1,
    category: 'peer',
    count: 1000,
    percentage: 94,
    date: new Date(1645664630306),
    name: 'Port 216',
    full: 100,
    fill: '#004E81'
  },
  {
    id: 2,
    category: 'peer',
    count: 351,
    percentage: 556,
    date: new Date(1641402433724),
    name: 'Port 627',
    full: 100,
    fill: '#1CA3FC'
  },
  {
    id: 3,
    category: 'customer',
    count: 31,
    percentage: 256,
    date: new Date(1638890355213),
    name: 'Port 847',
    full: 100,
    fill: '#058FE9'
  },
  {
    id: 4,
    category: 'customer',
    count: 117,
    percentage: 462,
    date: new Date(1645404443490),
    name: 'Port 954',
    full: 100,
    fill: '#0178C6'
  },
  {
    id: 5,
    category: 'peer',
    count: 515,
    percentage: 112,
    date: new Date(1646155668996),
    name: 'Port 280',
    full: 100,
    fill: '#2A83BE'
  },
  {
    id: 6,
    category: 'customer',
    count: 813,
    percentage: 915,
    date: new Date(1639414366641),
    name: 'Port 687',
    full: 100,
    fill: '#0D66A1'
  },
  {
    id: 7,
    category: 'customer',
    count: 195,
    percentage: 279,
    date: new Date(1638792232874),
    name: 'Port 17',
    full: 100,
    fill: '#0E5A8C'
  },
  {
    id: 8,
    category: 'customer',
    count: 412,
    percentage: 788,
    date: new Date(1643620810895),
    name: 'Port 832',
    full: 100,
    fill: '#156FAB'
  },
  {
    id: 9,
    category: 'peer',
    count: 890,
    percentage: 439,
    date: new Date(1640485701489),
    name: 'Port 974',
    full: 100,
    fill: '#53A2D7'
  },
  {
    id: 10,
    category: 'hive',
    count: 229,
    percentage: 312,
    date: new Date(1646522617079),
    name: 'Port 369',
    full: 100,
    fill: '#3FB2FF'
  },
  {
    id: 11,
    category: 'hive',
    count: 513,
    percentage: 152,
    date: new Date(1638137350987),
    name: 'Port 676',
    full: 100,
    fill: '#8AD0FF'
  },
  {
    id: 12,
    category: 'peer',
    count: 87,
    percentage: 829,
    date: new Date(1642393067858),
    name: 'Port 529',
    full: 100,
    fill: '#A6C5DA'
  },
  {
    id: 13,
    category: 'customer',
    count: 602,
    percentage: 216,
    date: new Date(1643487810328),
    name: 'Port 361',
    full: 100,
    fill: '#BFC7CD'
  }
]}

export const BenchMarkingData = {
  src_pass: [
    {
      title: "Hive",
      value: 4.446378232602943,
      full: 100,
      colors: "#004E81"
    },
    {
      title: "You",
      value: 83.41970652860809,
      full: 100,
      colors: "#1CA3FC"
    },
    {
      title: "Peer",
      value: 87.10395909735918,
      full: 100,
      colors: "#058FE9"
    }
  ],
  dst_pass: [
    {
      title: "Hive",
      value: 16.8667664207365,
      full: 100,
      colors: "#004E81"
    },
    {
      title: "You",
      value: 38.25034512753922,
      full: 100,
      colors: "#1CA3FC"
    },
    {
      title: "Peer",
      value: 37.86231538875777,
      full: 100,
      colors: "#058FE9"
    }
  ],
  src_deny: [
    {
      title: "Hive",
      value: 98.63348648931003,
      full: 100,
      colors: "#004E81"
    },
    {
      title: "You",
      value: 81.2137238514185,
      full: 100,
      colors: "#1CA3FC"
    },
    {
      title: "Peer",
      value: 97.35024335411843,
      full: 100,
      colors: "#058FE9"
    }
  ],
  dst_deny: [
    {
      title: "Hive",
      value: 79.13932351609012,
      full: 100,
      colors: "#004E81"
    },
    {
      title: "You",
      value: 21.3087179831575,
      full: 100,
      colors: "#1CA3FC"
    },
    {
      title: "Peer",
      value: 53.777147152848606,
      full: 100,
      colors: "#058FE9"
    }
  ]
}
const StaticData = [
  {
    CustomerID: "xyz",
    AssetID: "a9sf3",
    Source: "EDR",
    AssetName: "desktop-4532",
    AssetType: "non-network",
    AssetSubType: "workstation",
    Lifecycle: "850",
    Endpoint: "720",
    Patching: "350",
    Realtime: "850",
    RiskScore: "720",
    id:"workstation",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "b9a42",
    Source: "SCAN",
    AssetName: "unknown",
    AssetType: "unknown",
    AssetSubType: "unknown",
    Lifecycle: "350",
    Endpoint: "350",
    Patching: "350",
    Backup: "350",
    Realtime: "350",
    RiskScore: "350",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "g2f92",
    Source: "SCAN",
    AssetName: "cw-lobby-2",
    AssetType: "network",
    AssetSubType: "router",
    Lifecycle: "720",
    Realtime: "850",
    RiskScore: "650",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "j5l93",
    Source: "Patching",
    AssetName: "sql-app2",
    id:"server",
    AssetType: "non-network",
    AssetSubType: "server",
    Lifecycle: "350",
    Endpoint: "350",
    Patching: "350",
    Backup: "350",
    Realtime: "350",
    RiskScore: "350",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "w3ih5",
    Source: "EDR",
    AssetName: "web-app4",
    AssetType: "non-network",
    AssetSubType: "server",
    Lifecycle: "720",
    Endpoint: "850",
    Patching: "850",
    Backup: "720",
    Realtime: "850",
    RiskScore: "850",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "l6gh8",
    Source: "SCAN",
    AssetName: "fortinet-main",
    AssetType: "network",
    AssetSubType: "firewall",
    Lifecycle: "850",
    Realtime: "850",
    RiskScore: "500",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "s7qh6",
    Source: "SCAN",
    AssetName: "pe-2nd-floor",
    AssetType: "network",
    AssetSubType: "router",
    Lifecycle: "650",
    Realtime: "350",
    RiskScore: "350",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "h7ej2",
    Source: "EDR",
    AssetName: "desktop-9823",
    AssetType: "non-network",
    AssetSubType: "workstation",
    Lifecycle: "350",
    Endpoint: "350",
    Patching: "350",
    Realtime: "350",
    RiskScore: "720",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "f5oa9",
    Source: "Patching",
    AssetName: "desktop-8734",
    AssetType: "non-network",
    AssetSubType: "workstation",
    Lifecycle: "720",
    Endpoint: "720",
    Patching: "650",
    Realtime: "850",
    RiskScore: "850",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "w4aa8",
    Source: "EDR",
    AssetName: "desktop-0123",
    AssetType: "non-network",
    AssetSubType: "workstation",
    Lifecycle: "850",
    Endpoint: "850",
    Patching: "850",
    Realtime: "850",
    RiskScore: "720",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "l8dj3",
    Source: "Patching",
    AssetName: "desktop-6291",
    AssetType: "non-network",
    AssetSubType: "workstation",
    Lifecycle: "650",
    Endpoint: "720",
    Patching: "650",
    Realtime: "720",
    RiskScore: "600",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "d3kw6",
    Source: "SCAN",
    AssetName: "unknown",
    AssetType: "unknown",
    AssetSubType: "unknown",
    Lifecycle: "350",
    Endpoint: "350",
    Patching: "350",
    Backup: "350",
    Realtime: "350",
    RiskScore: "350",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  },
  {
    CustomerID: "xyz",
    AssetID: "s0uv4",
    Source: "SCAN",
    AssetName: "unknown",
    AssetType: "unknown",
    AssetSubType: "unknown",
    Lifecycle: "350",
    Endpoint: "350",
    Patching: "350",
    Backup: "350",
    Realtime: "350",
    RiskScore: "500",
    TimeDetected: moment()
      .subtract(parseInt(Math.random() * 24 * 3600), "seconds")
      .format("hh:mm:ss"),
    ScoreImpact: parseInt((Math.random() * 20) + 10)
  }
]
export default StaticData
