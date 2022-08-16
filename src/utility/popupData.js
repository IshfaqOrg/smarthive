export const server = {
    basicData : {
        
        MachineName: "sql-app2",
        WorkGroup: "WORKGROUP",
        AvailabilityMonitoring: "ENABLED",
        DeviceAdded: "MAR 7,2022 12:47:06 PM",
        LastSeen: "MAR 16,2022 2:30:49 AM",
        LastLogged: "sql-app2\ Administrator (Since:Mar 7,2022 5:23:13 PM)",
        LastReboot: "MAR 7,2022 12:47:16 PM",
        IpAddress: "18.221.148.220/172.31.28.168",
        Customer: "unassigned", 
        score:"600"         
    },
    software :{
        Osedition:"Microsoft Windows Server 2019 Datacenter x64",
        Osversion:"1809",
        Osbuild:"1763.2565",
        officeversion:"N/A"

    },
    Hardware :{
        Vendor:"Xen",
        Model:"HVM domU",
        SerialNumber:"ec22e29c-8be5-7ff3-11d8-6827f3decbbf",
        MotherBoard:"N/A",
        Processor:"Intel(R)Xeon(R)CPU E5-2686 v4@2.30GHz-1 cores",
        Memory:"1 GB",
        VideoCard:"Microsoft Basic Display Adaptor",
        Sound:"N/A",
        SystemDrive:"C",
        MacAddress:"06:c5:A0:53:56:F6(Primary)"
    },
    Assets:[
        {
            Source:"Patching",
            Reason:"patch missed 3/16/2022",
            Details:"Security Intelligence Update for Microsoft Defender Antivirus - KB2267602 (Version 1.361.71.0) (KB2267602)",
            Description:"Definition Updates",
            ImpactOnScore:"20"
        },
        {
            Source:"Endpoint",
            Reason:"malicious website",
            Details:"RDP Intrusion detection",
            Description:"Cyber-attack",
            ImpactOnScore:"25"
        }
    ]       
    
}
export const workstation = {
    basicData : {
        
        MachineName: "desktop-4532",
        WorkGroup: "WORKGROUP",
        AvailabilityMonitoring: "DISABLED",
        DeviceAdded: "FEB 1,2022 1:25:22 PM",
        LastSeen: "MAR 16,2022 2:08:59 AM",
        LastLogged: "desktop-4532\ ADF Admin (Since:Mar 13,2022 12:35:19 PM)",
        LastReboot: "MAR 13,2022 12:35:09 PM",
        IpAddress: "76.119.164.33/192.168.1.8",
        Customer: "ID FUND",
        score:"722"          
    },
    software :{
        Osedition:"Microsoft Windows 11 Home x64",
        Osversion:"21h2",
        Osbuild:"22000.556",
        officeversion:"Microsoft Office Home Premium x64, Build 16.0.14931.201.32"

    },
    Hardware :{
        Vendor:"HP",
        Model:"HP Pavilion All-in-one 24-xalxxx",
        SerialNumber:"8CC94120KD",
        MotherBoard:"HP 85BA",
        Processor:"AMD Ryzen 5 3550H with Radeon Vega Mobile Gfx-4 cores",
        Memory:"6 GB",
        VideoCard:"AMD Radeon(TM) Vega 8 Graphics",
        Sound:"Realtek High Definition Audio",
        SystemDrive:"C",
        MacAddress:"04:0E:3C:8C:E5:AC"
    },
    Assets:[
        {
            Source:"Patching",
            Reason:"patch missed 3/16/2022",
            Details:"Security Intelligence Update for Microsoft Defender Antivirus - KB2267602 (Version 1.361.71.0) (KB2267602)",
            Description:"Definition Updates",
            ImpactOnScore:"20"
        },
        {
            Source:"Endpoint",
            Reason:"malicious website",
            Details:"RDP Intrusion detection",
            Description:"Cyber-attack",
            ImpactOnScore:"25"
        }
    ]       
    
}
