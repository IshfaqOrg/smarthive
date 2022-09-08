/* eslint-disable comma-dangle */
export const CUSTOMER_ADMIN = 'customer_admin';
export const SUPER_ADMIN = 'super_admin';
export const CUSTOMER_AUDITOR = 'customer_auditor';

// For confirm popup
export const CONFIRM_DELETE_USER_DESCRIPTION = 'This action cannot be undone. This will permanently delete the MAUI application. Please type in the name of the application to confirm.';

export const CONFIRM_DELETE_USER_TITLE = 'Are you sure????';

// For update user
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_APPROVAL = 'CHANGE_APPROVAL';
export const userRole = {
  [CUSTOMER_ADMIN]: 'Customer Admin',
  [CUSTOMER_AUDITOR]: 'Customer Auditor',
  [SUPER_ADMIN]: 'Super Admin',
};
export const integrationsIds = {
  auvik: '624d657a9a01e46d1699fa07',
  malwareByte: '619f87409021a677fc20cfab',
  automox: '6253d20fbde7683d5f2e9f22',
};
export const assertsTypes = {
  nonNetwork: 'non-network',
  network: 'network',
  unKnown: 'unKnown'
};
export const integration = [
  {
    _id: '6156d4527434014210ba4a47',
    subcategories: [],
    category_name: 'Cloud',
    is_active: true,
    integrations: [
      {
        fields: [
          {
            label: 'Access Key',
            name: 'access_key',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'Secret Key',
            name: 'secret_key',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'AWS Region',
            name: 'aws_region',
            type: 'select',
            fieldType: 'text',
            selectValues: [
              {
                text: 'US East 1',
                value: 'us-east-1',
              },
            ],
          },
        ],
        _id: '6156d97b528e7012a4f5726b',
        name: 'Amazon Web Services',
        slug_name: 'amazon_web_services',
        integration_category_type: 'Cloud',
        category_id: '6156d4527434014210ba4a47',
        html_id: 'popup-cloud-aws',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        image: 'awsLogo',
        description:
          'It is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of IaaS, PaaS and SaaS offerings.',
      },
      {
        fields: [
          {
            label: 'Dommy field',
            name: 'dommy_field1',
            type: 'text',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '6156d9c2528e7012a4f5726e',
        name: 'GCP',
        slug_name: 'gcp',
        integration_category_type: 'Cloud',
        category_id: '6156d4527434014210ba4a47',
        html_id: 'popup-cloud-gcp',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        image: 'gcpLogo',
        description:
          'It is offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.',
      },
      {
        fields: [
          {
            label: 'Dommy field',
            name: 'dommy_field2',
            type: 'text',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '6156d9d0528e7012a4f57271',
        name: 'Azure',
        slug_name: 'azure',
        integration_category_type: 'Cloud',
        category_id: '6156d4527434014210ba4a47',
        html_id: 'popup-cloud-azure',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        image: 'azureLogo',
        description:
          'It provides a range of cloud services, including compute, analytics, storage and networking. The Azure platform aims to help businesses manage.',
      },
    ],
  },
  {
    _id: '6156da74528e7012a4f57274',
    subcategories: [
      {
        category_name: 'Proxy/DNS',
        is_active: true,
        _id: '6156ddcd54f9a0ff18ca455a',
        integrations: [
          {
            fields: [
              {
                label: 'Dommy field',
                name: 'dommy_field6',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156de13b020505484735533',
            name: 'ZScaller',
            slug_name: 'zscaller',
            integration_category_type: 'Proxy/DNS',
            category_id: '6156ddcd54f9a0ff18ca455a',
            html_id: 'popup-network-zscaller',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            image: 'zscalerLogo',
            description:
              'It is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of IaaS, PaaS and SaaS offerings.',
          },
          {
            fields: [
              {
                label: 'Data Path',
                name: 'data_path',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
              {
                label: 'Access Key',
                name: 'access_key',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
              {
                label: 'Secret Key',
                name: 'secrate_key',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156de29b020505484735536',
            name: 'Cisco Umbrella',
            slug_name: 'cisco_umbrella',
            integration_category_type: 'Proxy/DNS',
            category_id: '6156ddcd54f9a0ff18ca455a',
            html_id: 'popup-network-cisco',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            image: 'ciscoLogo',
            description:
              'Umbrella DNS-layer security delivers the most secure, reliable, and fastest internet experience to more than 100 million users. As a leading provider of security and recursive DNS services, we enable the world to connect to the internet with confidence on any device.',
          },
        ],
      },
      {
        category_name: 'IDS',
        is_active: true,
        _id: '6156ddcd54f9a0ff18ca455c',
        integrations: [
          {
            fields: [
              {
                label: 'Dommy field',
                name: 'dommy_field3',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156ded6b020505484735545',
            name: 'Sourcefire',
            slug_name: 'sourcefire',
            integration_category_type: 'IDS',
            category_id: '6156ddcd54f9a0ff18ca455c',
            html_id: 'popup-network-ids-sourcefire',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            description:
              'Sourcefire offers the smartest way to buy the best network threat protection available. Sourcefire helps you fight the latest threats to your network with FirePOWER. IP reputation blacklisting prevents connections to botnets, attackers, spam sources and other malicious IPs.',
            image: 'sourcefireLogo',
          },
          {
            fields: [
              {
                label: 'Dommy field',
                name: 'dommy_field',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156deeab020505484735548',
            name: 'Palo',
            slug_name: 'palo',
            integration_category_type: 'IDS',
            category_id: '6156ddcd54f9a0ff18ca455c',
            html_id: 'popup-network-ids-palo',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            description:
              'Palo Alto Networks uses App-ID to accurately identify the application, and maps the application to the user identity while inspecting the traffic for content policy violations.',
            image: 'poloLogo',
          },
        ],
      },
      {
        category_name: 'Firewall',
        is_active: true,
        _id: '6156ddcd54f9a0ff18ca455d',
        integrations: [
          {
            fields: [
              {
                label: 'API Domain Name',
                name: 'api_domain_name',
                type: 'select',
                fieldType: 'text',
                selectValues: [
                  {
                    text: 'api.amp.cisco.com',
                    value: 'api.amp.cisco.com',
                  },
                ],
              },
              {
                label: 'Client Id',
                name: 'client_id',
                type: 'input',
                selectValues: null,
                fieldType: 'text',
              },
              {
                label: 'API Key(Hidden)',
                name: 'api_key',
                type: 'input',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156df0db02050548473554b',
            name: 'Cisco',
            slug_name: 'cisco',
            integration_category_type: 'Firewall',
            category_id: '6156ddcd54f9a0ff18ca455d',
            html_id: 'popup-network-firewall-cisco',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            image: 'ciscoLogo',
            description:
              'A networking solutions connect people, computing devices and computer networks, allowing people to access or transfer information.',
          },
          {
            fields: [
              {
                label: 'Dommy field',
                name: 'dommy_field4',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156df25b02050548473554e',
            name: 'Fortinet',
            slug_name: 'fortinet',
            integration_category_type: 'Firewall',
            category_id: '6156ddcd54f9a0ff18ca455d',
            html_id: 'popup-network-firewall-fortinet',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            description:
              "Fortinet's FortiGate next-generation firewalls (NGFW) provide organizations supreme protection against web-based network threats, including known and unknown threats and intrusion strategies.",
            image: 'fortinetLogo',
          },
          {
            fields: [
              {
                label: 'Dommy field',
                name: 'dommy_field5',
                type: 'text',
                selectValues: null,
                fieldType: 'text',
              },
            ],
            _id: '6156df2eb020505484735551',
            name: 'Juniper',
            slug_name: 'juniper',
            integration_category_type: 'Firewall',
            category_id: '6156ddcd54f9a0ff18ca455d',
            html_id: 'popup-network-firewall-juniper',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            description:
              'Juniper Networks SRX Series Services Gateways are next-generation firewalls that modernize your perimeter, making it more adaptable as new threats emerge.',
            image: 'juniperLogo',
          },
        ],
      },
      {
        category_name: 'Discovery',
        is_active: true,
        _id: '6156ddcd54f9a0ff18ca454c',
        integrations: [
          {
            fields: [
              {
                label: ' Tenant Id',
                name: 'tenant_id',
                type: 'input',
                selectValues: null,
                fieldType: 'text',
              },
              {
                label: 'Username',
                name: 'username',
                type: 'input',
                selectValues: null,
                fieldType: 'text',
              },
              {
                label: 'Password',
                name: 'password',
                type: 'input',
                selectValues: null,
                fieldType: 'password',
              },
            ],
            _id: '624d657a9a01e46d1699fa07',
            name: 'Auvik',
            slug_name: 'auvik',
            integration_category_type: 'Discovery',
            category_id: '6156ddcd54f9a0ff18ca454c',
            html_id: 'popup-network-firewall-cisco',
            is_active: true,
            created_by: '6156ab8e600789176cd37eef',
            __v: 0,
            image: 'auvikLogo',
            description:
              "Auvik's cloud-based network management software gives you instant insight into the networks you manage, and automates complex and time-consuming network tasks.",

          },
        ],
      },
    ],
    category_name: 'Network',
    is_active: true,
    integrations: [],
  },
  {
    _id: '6156dc486107605ea4d55ec7',
    subcategories: [],
    category_name: 'Endpoint',
    is_active: true,
    integrations: [
      {
        fields: [
          {
            label: 'API Domain Name',
            name: 'api_domain_name',
            type: 'select',
            fieldType: 'text',
            selectValues: [
              {
                text: 'api.amp.cisco.com',
                value: 'api.amp.cisco.com',
              },
            ],
          },
          {
            label: 'Client Id',
            name: 'client_id',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'API Key(Hidden)',
            name: 'api_key',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '61598ba6657a652bb08676ec',
        name: 'Cisco AMP For Endpoints',
        slug_name: 'cisco_amp_for_endpoints',
        integration_category_type: 'Endpoint',
        category_id: '6156dc486107605ea4d55ec7',
        html_id: 'popup-mail-cisco-amp-endpoints',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        description:
          'Cisco Advanced Malware Protection (AMP) for Endpoints is a cloud-managed endpoint security solution that provides advanced protection against viruses, malware, and other cyber-threats by detecting, preventing, and responding to threats.',
        __v: 0,
        image: 'ciscoLogo',
      },
      {
        fields: [
          {
            label: 'Api Id',
            name: 'api_id',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'Api Key',
            name: 'api_key',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '61598bc9657a652bb08676ef',
        name: 'Carbon Black',
        slug_name: 'carbon_black',
        integration_category_type: 'Endpoint',
        category_id: '6156dc486107605ea4d55ec7',
        html_id: 'popup-mail-carbon-black',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        description:
          'Carbon Black is a premier endpoint security tool that provides ransomware and malware protection while facilitating threat hunting and incident response. It has the same power as the premium tools without the premium price tag.',
        image: 'corbonblackLogo',
      },
      {
        fields: [
          {
            label: 'Api Token',
            name: 'api_token',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '61598c0c657a652bb08676f2',
        name: 'SentinelOne',
        slug_name: 'sentinel_one',
        integration_category_type: 'Endpoint',
        category_id: '6156dc486107605ea4d55ec7',
        html_id: 'popup-mail-santinel-one',
        image: 'sentineOneLogo',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        description:
          'SentinelOne is designed to protect enterprises from ransomware and other malware threats. SentinelOne recognizes the behaviors of ransomware and prevents it from encrypting files. Additionally, SentinelOne is able to rollback Windows devices in the event that files are encrypted.',
        __v: 0,
        instructions:
          [
            {
              title: 'Generate SentinelOne API Key',
              steps: [
                {
                  point: 'Log in to the Management Console as an Admin',
                  subSteps: []
                },
                {
                  point: 'Navigate to Settings > Users',
                  subSteps: []
                },
                {
                  point: 'Click on the Admin user you want to get a token for',
                  subSteps: [
                    {
                      point: ' A new user could be created but is not required(A Viewer user role is sufficient for Perch to query the SentinelOne API)',
                      subSteps: []
                    }
                  ]
                },
                {
                  point: 'A new window will open with the API Token Click on Copy',
                  subSteps: []
                },
                {
                  point: 'You will also need your SentinelOne API URL',
                  subSteps: []
                }

              ]
            }
          ]
      },
      {
        fields: [
          {
            label: 'Api Key',
            name: 'api_key',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '61598cc0657a652bb08676f5',
        name: 'Bitdefender',
        slug_name: 'bitdefender',
        integration_category_type: 'Endpoint',
        category_id: '6156dc486107605ea4d55ec7',
        html_id: 'popup-mail-bitdefender',
        image: 'bitdefenderLogo',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        description:
          'Bitdefender is the frequent recipient of industry awards and recognized as a leader in cybersecurity by independent testing organizations and industry analyst firms.',
        __v: 0,
      },
      {
        fields: [
          {
            label: 'Account ID',
            name: 'account_id',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'Client Id',
            name: 'client_id',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
          {
            label: 'Client Secret',
            name: 'client_secret',
            type: 'input',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '619f87409021a677fc20cfab',
        name: 'MalwareBytes',
        slug_name: 'malwarebytes',
        integration_category_type: 'Endpoint',
        category_id: '6156dc486107605ea4d55ec7',
        html_id: 'popup-endpoint-malwarebytes',
        image: 'malewareBytesLogo',
        validation_method_name: 'malwarebytes',
        is_active: true,
        created_by: '6177b2bdfa56bf4d8cd7fbfb',
        description:
          'Malwarebytes protects your home devices and your business endpoints against malware, ransomware, malicious websites, and other advanced online threats.',
        __v: 0,
      },
    ],
  },
  {
    _id: '6156dc586107605ea4d55eca',
    subcategories: [],
    category_name: 'Mail',
    is_active: true,
    integrations: [
      {
        fields: [
          {
            label: 'Service Principal',
            name: 'service_principal',
            type: 'text',
            fieldType: 'text',
            selectValues: null,
          },
          {
            label: 'Secrat',
            name: 'secrat',
            type: 'text',
            fieldType: 'text',
            selectValues: null,
          },
        ],
        _id: '623b059aed3bcfbf33403262',
        name: 'Proofpoint',
        slug_name: 'proofpoint',
        integration_category_type: 'Mail',
        category_id: '6156dc586107605ea4d55eca',
        html_id: 'popup-network-cisco',
        is_active: true,
        created_by: '6177b2bdfa56bf4d8cd7fbfb',
        __v: 0,
        image: 'proofpointLogo',
        description:
          'Proofpoint is an email protection system that blocks spam, phishing, and viruses from reaching your inbox. In addition you can customize your settings to block and un-block specific emails.',
      },
      {
        fields: [
          {
            label: 'Data Path',
            name: 'data_path',
            type: 'text',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '623b0774ed3bcfbf33403263',
        name: 'Office 365',
        slug_name: 'office_365',
        integration_category_type: 'Mail',
        category_id: '6156dc586107605ea4d55eca',
        html_id: 'popup-network-cisco',
        is_active: true,
        created_by: '6177b2bdfa56bf4d8cd7fbfb',
        __v: 0,
        image: 'officeLogo',
        description:
          "Microsoft 365 and Office 365 are cloud-based services designed to help meet your organization's needs for robust security, reliability, and user productivity.",
      },
    ],
  },
  {
    _id: '6253d144bde7683d5f2e9efd',
    subcategories: [],
    category_name: 'Backup',
    is_active: true,
    integrations: [
      {
        fields: [
          {
            label: 'Dommy field',
            name: 'dommy_field',
            type: 'text',
            selectValues: null,
            fieldType: 'text',
          },
        ],
        _id: '6253d20fbde7683d5f2e9f00',
        name: 'Veeam Backup',
        slug_name: 'veeam_backup',
        integration_category_type: 'Backup',
        category_id: '6253d144bde7683d5f2e9efd',
        html_id: 'popup-network-firewall-juniper',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        description:
          'Veeam® is the leader in backup, recovery and data management solutions that deliver Modern Data Protection. We provide a single platform for Cloud, Virtual, Physical, SaaS and Kubernetes environments',
        image: 'veeamLogo',
      },
    ],
  },
  {
    _id: '6253d144bde7683d5f2e9erm',
    subcategories: [],
    category_name: 'Patching',
    is_active: true,
    integrations: [
      {
        fields: [],
        _id: '6253d20fbde7683d5f2e9f22',
        name: 'Automox',
        slug_name: 'automox',
        integration_category_type: 'Patching',
        category_id: '6253d144bde7683d5f2e9erm',
        html_id: 'popup-network-firewall-juniper',
        is_active: true,
        created_by: '6156ab8e600789176cd37eef',
        __v: 0,
        description: 'Add your Automox to get patching ',
        image: 'automoxLogo',
      },
    ],
  },
];

export const scoreTitles = {
  lifecycle_score: 'Lifecycle Score',
  endpoint_score: 'Endpoint Score',
  backup_score: 'Backup Score',
  patching_score: 'Patching Score',
  real_time_score: 'Real Time Score',
  risk_score: 'Risk Score',
};

export const fieldsName = [
  'tenant_id',
  'access_key',
  'secret_key',
  'account_id',
  'client_id',
  'client_secret',
  'secrate_key',
  'data_path',
  'api_domain_name',
  'api_key',
  'api_token',
  'api_id',
  'dommy_field6',
  'dommy_field3',
  'dommy_field',
  'dommy_field4',
  'dommy_field5',
  'service_principal',
  'secrat',
  'aws_region',
  'dommy_field1',
  'dommy_field2',
];
