const SmartHiveIntelData_old = [
  {
    id: 1,
    intel_type: "Hive",
    intel_source: "730.25.5.11",
    age: new Date(1645951350084),
    type: "customer",
    direction: "Out",
    total_number_of_attacks: 38,
    country: "Canada",
    action: "Blocked IP",
    allowed: 86,
    implemented: {
      hive: 65,
      you: 32
    },
    hivePeerData: [
      "[CIRCULAR]",
      {
        id: 3,
        intel_type: "Hive,spammers, phishing",
        intel_source: "730.25.5.11",
        age: new Date(1641648853433),
        type: "customer",
        direction: "Out",
        country: "USA",
        action: "Blocked IP",
        total_number_of_attacks: 84,
        allowed: 49,
        implemented: {
          hive: 47,
          you: 90
        },
        hivePeerData: "[CIRCULAR]"
      },
      {
        id: 5,
        intel_type: "Hive,sonic_boom",
        intel_source: "730.25.5.11",
        age: new Date(1638108096018),
        type: "peer",
        direction: "In",
        country: "UAE",
        total_number_of_attacks: 84,
        action: "Blocked IP",
        allowed: 90,
        implemented: {
          hive: 86,
          you: 72
        },
        hivePeerData: "[CIRCULAR]"
      },
      {
        id: 7,
        intel_type: "Hive,sonic_boom",
        intel_source: "730.25.5.11",
        age: new Date(1646615411957),
        type: "hive",
        direction: "In",
        country: "UAE",
        action: "Blocked IP",
        total_number_of_attacks: 67,
        allowed: 78,
        implemented: {
          hive: 17,
          you: 24
        },
        hivePeerData: "[CIRCULAR]"
      }
    ]
  },
  {
    id: 3,
    intel_type: "Hive,spammers, phishing",
    intel_source: "730.25.5.11",
    age: new Date(1641648853433),
    type: "customer",
    direction: "Out",
    country: "USA",
    action: "Blocked IP",
    total_number_of_attacks: 84,
    allowed: 49,
    implemented: {
      hive: 47,
      you: 90
    },
    hivePeerData: "[CIRCULAR]"
  },
  {
    id: 2,
    intel_type: "Hive,sonic_boom",
    intel_source: "521.11.109.62",
    age: new Date(1645541458309),
    type: "customer",
    direction: "In",
    country: "UAE",
    total_number_of_attacks: 27,
    action: "Blocked IP",
    allowed: 18,
    implemented: {
      hive: 38,
      you: 71
    },
    hivePeerData: [
      "[CIRCULAR]",
      {
        id: 6,
        intel_type: "Hive,sonic_boom",
        intel_source: "521.11.109.62",
        age: new Date(1642705411943),
        type: "peer",
        direction: "In",
        country: "UAE",
        action: "Blocked IP",
        total_number_of_attacks: 31,
        allowed: 30,
        implemented: {
          hive: 51,
          you: 68
        },
        hivePeerData: "[CIRCULAR]"
      }
    ]
  }
]

const SmartHiveIntelData = [
  {
    id: 1,
    intel_type: "Hive",
    intel_source: "730.25.5.11",
    age: new Date(1645951350084),
    type: "customer",
    direction: "Out",
    total_number_of_attacks: 38,
    country: "Canada",
    action: "Blocked IP",
    allowed: 86,
    implemented: {
      hive: 65,
      you: 32
    },
    hivePeerData: [      
      {
        id: 1,
        intel_type: "Hive",
        intel_source: "503.53.89.86",
        age: new Date(1641648853433),
        type: "customer",
        direction: "Out",
        country: "USA",
        action: "Blocked IP",
        total_number_of_attacks: 84,
        allowed: 98,
        implemented: {
          hive: 47,
          you: 90
        },
        reputation:"Low Risk",
        first_seen:"12/26/2021",
        peer:"12/09/2021",
        hive:"01/12/2022",
        attacks:{
          you:59,
          peers:97,
          hive:24
        },
        details:{
          ip_status:3,
          reputation:58,
          threat_mask:25,
          domain:"713.18.71.1",
          domain_age:1,
          ip_info_reputation:62
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Dec 11 2021 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"11"
          },
          {
            date:"Wed Feb 09 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"2"
          }
        ]
      },
      {
        id: 2,
        intel_type: "Hive,Spammers, Phishing",
        intel_source: "509.53.89.86",
        age: new Date(1638108096018),
        type: "peer",
        direction: "Out",
        country: "USA",
        total_number_of_attacks: 84,
        action: "Blocked IP",
        allowed: 82,
        implemented: {
          hive: 86,
          you: 72
        },
        reputation:"Moderate Risk",
        first_seen:"12/03/2021",
        peer:"12/01/2021",
        hive:"03/02/2022",
        attacks:{
          you:7,
          peers:6,
          hive:30
        },
        details:{
          ip_status:9,
          reputation:68,
          threat_mask:50,
          domain:"692.83.148.27",
          domain_age:2,
          ip_info_reputation:58
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Jan 12 2022 04:51:29 GMT+0530 (India Standard Time)",
              reputation:"30"
          },
          {
            date:"Wed Feb 20 2022 05:06:55 GMT+0530 (India Standard Time)",
            reputation:"20"
          }
        ]
      },
      {
        id: 3,
        intel_type: "Hive,Sonic Bboom",
        intel_source: "764.78.175.29",
        age: new Date(1646615411957),
        type: "hive",
        direction: "In",
        country: "UAE",
        action: "Blocked IP",
        total_number_of_attacks: 67,
        allowed: 8,
        implemented: {
          hive: 17,
          you: 24
        },
        reputation:"Suspicious",
        first_seen:"03/03/2022",
        peer:"12/05/2021",
        hive:"-",
        attacks:{
          you:98,
          peers:5,
          hive:'-'
        },
        details:{
          ip_status:9,
          reputation:21,
          threat_mask:71,
          domain:"621.96.47.27",
          domain_age:29,
          ip_info_reputation:24
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Mar 4 2022 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"8"
          },
          {
            date:"Wed Apr 5 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"6"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    intel_type: "Hive,spammers, phishing",
    intel_source: "730.25.5.11",
    age: new Date(1641648853433),
    type: "customer",
    direction: "Out",
    country: "USA",
    action: "Blocked IP",
    total_number_of_attacks: 84,
    allowed: 49,
    implemented: {
      hive: 47,
      you: 90
    },
    hivePeerData: [
      {
        id: 1,
        intel_type: "Hive",
        intel_source: "100.68.108.98",
        age: new Date(1641648853433),
        type: "customer",
        direction: "Out",
        country: "USA",
        action: "Blocked IP",
        total_number_of_attacks: 84,
        allowed: 35,
        implemented: {
          hive: 47,
          you: 90
        },
        reputation:"High Risk",
        first_seen:"01/31/2022",
        peer:"03/04/2022",
        hive:"02/19/2022",
        attacks:{
          you:78,
          peers:91,
          hive:27
        },
        details:{
          ip_status:6,
          reputation:6,
          threat_mask:16,
          domain:"979.76.182.12",
          domain_age:33,
          ip_info_reputation:3
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Nov 06 2021 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"16"
          },
          {
            date:"Wed Dec 15 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"25"
          }
        ]
      },
      {
        id: 2,
        intel_type: "Hive,Spammers, Phishing",
        intel_source: "100.68.108.98",
        age: new Date(1638108096018),
        type: "peer",
        direction: "Out",
        country: "USA",
        total_number_of_attacks: 84,
        action: "Blocked IP",
        allowed: 33,
        implemented: {
          hive: 86,
          you: 72
        },
        reputation:"Moderate Risk",
        first_seen:"03/16/2022",
        peer:"01/08/2022",
        hive:"11/26/2021",
        attacks:{
          you:94,
          peers:6,
          hive:58
        },
        details:{
          ip_status:10,
          reputation:91,
          threat_mask:84,
          domain:"436.71.51.36",
          domain_age:49,
          ip_info_reputation:53
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Oct 26 2021 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"9"
          },
          {
            date:"Wed Sep 07 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"12"
          }
        ]
      },
      {
        id: 3,
        intel_type: "Hive,Sonic Bboom",
        intel_source: "100.68.108.98",
        age: new Date(1646615411957),
        type: "hive",
        direction: "In",
        country: "UAE",
        action: "Blocked IP",
        total_number_of_attacks: 67,
        allowed: 95,
        implemented: {
          hive: 17,
          you: 24
        },
        reputation:"Low Risk",
        first_seen:"02/12/2022",
        peer:"02/14/2022",
        hive:"-",
        attacks:{
          you:55,
          peers:79,
          hive:'-'
        },
        details:{
          ip_status:2,
          reputation:36,
          threat_mask:31,
          domain:"20.24.91.91",
          domain_age:27,
          ip_info_reputation:69
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Feb 19 2022 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"26"
          },
          {
            date:"Wed Jan 10 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"22"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    intel_type: "Hive,sonic_boom",
    intel_source: "521.11.109.62",
    age: new Date(1645541458309),
    type: "customer",
    direction: "In",
    country: "UAE",
    total_number_of_attacks: 27,
    action: "Blocked IP",
    allowed: 18,
    implemented: {
      hive: 38,
      you: 71
    },
    hivePeerData: [
      {
        id: 1,
        intel_type: "Hive",
        intel_source: "37.56.75.10",
        age: new Date(1641648853433),
        reputation:"Moderate Risk",
        first_seen:"02/27/2022",
        peer:"0/20/2022",
        hive:"03/13/2022",
        type: "customer",
        direction: "Out",
        country: "USA",
        action: "Blocked IP",
        total_number_of_attacks: 84,
        allowed: 23,
        implemented: {
          hive: 47,
          you: 90
        },
        attacks:{
          you:64,
          peers:97,
          hive:90
        },
        details:{
          ip_status:8,
          reputation:13,
          threat_mask:27,
          domain:"413.4.112.26",
          domain_age:90,
          ip_info_reputation:21
        },
        hivePeerData: "[CIRCULAR]"
      },
      {
        id: 2,
        intel_type: "Hive,Spammers, Phishing",
        intel_source: "37.56.75.10",
        age: new Date(1638108096018),
        type: "peer",
        direction: "Out",
        country: "USA",
        total_number_of_attacks: 84,
        action: "Blocked IP",
        allowed: 48,
        implemented: {
          hive: 86,
          you: 72
        },
        reputation:"Suspicious",
        first_seen:"01/19/2022",
        peer:"12/14/2022",
        hive:"12/06/2022",
        attacks:{
          you:17,
          peers:67,
          hive:94
        },
        details:{
          ip_status:10,
          reputation:83,
          threat_mask:48,
          domain:"906.84.102.38",
          domain_age:41,
          ip_info_reputation:33
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Jan 12 2022 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"23"
          },
          {
            date:"Wed Feb 09 2022 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"15"
          }
        ]
      },
      {
        id: 3,
        intel_type: "Hive,Sonic Bboom",
        intel_source: "731.50.196.82",
        age: new Date(1646615411957),
        type: "hive",
        direction: "In",
        country: "UAE",
        action: "Blocked IP",
        total_number_of_attacks: 67,
        allowed: 9,
        implemented: {
          hive: 17,
          you: 24
        },
        reputation:"Moderate Risk",
        first_seen:"02/18/2022",
        peer:"12/26/2022",
        hive:"-",
        attacks:{
          you:96,
          peers:19,
          hive:'-'
        },
        details:{
          ip_status:5,
          reputation:48,
          threat_mask:48,
          domain:"566.24.78.41",
          domain_age:82,
          ip_info_reputation:80
        },
        hivePeerData: "[CIRCULAR]",
        line_graph: [
          {
              date:"Sat Jan 11 2022 07:51:29 GMT+0530 (India Standard Time)",
              reputation:"04"
          },
          {
            date:"Wed Nov 04 2021 02:06:55 GMT+0530 (India Standard Time)",
            reputation:"22"
          }
        ]
      }
    ]
  }
]
export default SmartHiveIntelData
