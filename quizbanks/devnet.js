const devnetQuiz = [
  {
    sourceNumber: 1,
    question: "A pharmaceutical company wants secure cloud storage. Which cloud type is best?",
    choices: [
      { key: "A", text: "Community" },
      { key: "B", text: "Public" },
      { key: "C", text: "Hybrid" },
      { key: "D", text: "Private" }
    ],
    answers: ["D"]
  },
  {
    sourceNumber: 2,
    question: "What does a read-only automation solution do?",
    choices: [
      { key: "A", text: "Configures devices automatically" },
      { key: "B", text: "Retrieves and audits configurations" },
      { key: "C", text: "Deploys updates" },
      { key: "D", text: "Controls network traffic" }
    ],
    answers: ["B"],
    explanation: "Read-only automation is used for auditing and validation, not configuration."
  },
  {
    sourceNumber: 3,
    question: "Which three describe TCP/UDP?",
    choices: [
      { key: "A", text: "UDP encapsulated in IP" },
      { key: "B", text: "UDP uses ports for applications" },
      { key: "C", text: "Source port identifies return traffic" },
      { key: "D", text: "TCP used for low overhead" }
    ],
    answers: ["A", "B", "C"],
    explanation: "UDP is lightweight; TCP is reliable but heavier."
  },
  {
    sourceNumber: 4,
    question: "What attack injects SQL commands?",
    choices: [
      { key: "A", text: "Buffer overflow" },
      { key: "B", text: "SQL injection" },
      { key: "C", text: "XSS" },
      { key: "D", text: "XML injection" }
    ],
    answers: ["B"],
    explanation: "SQL injection exploits input validation flaws."
  },
  {
    sourceNumber: 5,
    question: "Linux/Mac command for IP?",
    choices: [
      { key: "A", text: "ipconfig" },
      { key: "B", text: "ip address" },
      { key: "C", text: "ifconfig" },
      { key: "D", text: "netstat" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 6,
    question: "Why use Layer 2 switch segmentation?",
    choices: [
      { key: "A", text: "Reduce collisions" },
      { key: "B", text: "Improve bandwidth" },
      { key: "C", text: "Isolate traffic" },
      { key: "D", text: "Increase broadcasts" }
    ],
    answers: ["B", "C"]
  },
  {
    sourceNumber: 7,
    question: "CI tool for build/test?",
    choices: [
      { key: "A", text: "SQL" },
      { key: "B", text: "REST" },
      { key: "C", text: "Docker" },
      { key: "D", text: "Jenkins" }
    ],
    answers: ["D"]
  },
  {
    sourceNumber: 8,
    question: "Port 8008 corresponds to?",
    choices: [
      { key: "A", text: "SSH" },
      { key: "B", text: "RESTCONF" },
      { key: "C", text: "HTTP" },
      { key: "D", text: "NETCONF" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 9,
    question: "VLAN broadcast behavior?",
    choices: [
      { key: "A", text: "All VLANs" },
      { key: "B", text: "Same VLAN only" },
      { key: "C", text: "Same switch only" },
      { key: "D", text: "Routed" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 10,
    question: "VM management software?",
    choices: [
      { key: "A", text: "OS" },
      { key: "B", text: "Hypervisor" },
      { key: "C", text: "Kernel" },
      { key: "D", text: "CLI" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 11,
    question: "MAC address structure?",
    choices: [
      { key: "A", text: "Network + host" },
      { key: "B", text: "Vendor OUI + unique ID" },
      { key: "C", text: "Serial + random" },
      { key: "D", text: "IP + port" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 12,
    question: "Cisco ACI SDK?",
    choices: [
      { key: "A", text: "Cobra" },
      { key: "B", text: "UCS" },
      { key: "C", text: "IMC" },
      { key: "D", text: "CLI" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 13,
    question: "DevNet sharing platform?",
    choices: [
      { key: "A", text: "Forums" },
      { key: "B", text: "Sandbox" },
      { key: "C", text: "Exchange" },
      { key: "D", text: "Zone" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 14,
    question: "RESTCONF formats?",
    choices: [
      { key: "A", text: "JSON" },
      { key: "B", text: "XML" },
      { key: "C", text: "YAML" },
      { key: "D", text: "HTML" }
    ],
    answers: ["A", "B"]
  },
  {
    sourceNumber: 15,
    question: "DevNet code repository?",
    choices: [
      { key: "A", text: "Labs" },
      { key: "B", text: "Sandbox" },
      { key: "C", text: "Code Exchange" },
      { key: "D", text: "Support" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 16,
    question: "Dev + Ops role?",
    choices: [
      { key: "A", text: "Agile" },
      { key: "B", text: "SRE" },
      { key: "C", text: "DevOps" },
      { key: "D", text: "Scrum" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 17,
    question: "Ansible inventory file?",
    choices: [
      { key: "A", text: "playbook" },
      { key: "B", text: "hosts" },
      { key: "C", text: "config" },
      { key: "D", text: "vars" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 18,
    question: "DevNet testing environment?",
    choices: [
      { key: "A", text: "Labs" },
      { key: "B", text: "Sandbox" },
      { key: "C", text: "CLI" },
      { key: "D", text: "Exchange" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 19,
    question: "Reverse proxy purpose?",
    choices: [
      { key: "A", text: "DNS mapping" },
      { key: "B", text: "Mask backend servers" },
      { key: "C", text: "Encrypt traffic" },
      { key: "D", text: "Route traffic" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 20,
    question: "Agile characteristic?",
    choices: [
      { key: "A", text: "Sequential" },
      { key: "B", text: "Iterative delivery" },
      { key: "C", text: "Fixed plan" },
      { key: "D", text: "Rigid" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 21,
    question: "Docker default tag?",
    choices: [
      { key: "A", text: "default" },
      { key: "B", text: "latest" },
      { key: "C", text: "tag" },
      { key: "D", text: "none" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 22,
    question: "pyATS job runner?",
    choices: [
      { key: "A", text: "Genie" },
      { key: "B", text: "EasyPy" },
      { key: "C", text: "AEtest" },
      { key: "D", text: "API" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 23,
    question: "DevNet support?",
    choices: [
      { key: "A", text: "Forum" },
      { key: "B", text: "Webex" },
      { key: "C", text: "Cisco Learning Network" },
      { key: "D", text: "FTP" }
    ],
    answers: ["A", "B", "C"]
  },
  {
    sourceNumber: 24,
    question: "Hands-on DevNet resource?",
    choices: [
      { key: "A", text: "Zone" },
      { key: "B", text: "Labs" },
      { key: "C", text: "Sandbox" },
      { key: "D", text: "Support" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 25,
    question: "Default Linux shell?",
    choices: [
      { key: "A", text: "tcsh" },
      { key: "B", text: "bash" },
      { key: "C", text: "zsh" },
      { key: "D", text: "sh" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 26,
    question: "Immutable infrastructure?",
    choices: [
      { key: "A", text: "Manual config allowed" },
      { key: "B", text: "Code-only changes" },
      { key: "C", text: "Containers only" },
      { key: "D", text: "VM only" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 27,
    question: "Main cause of outages?",
    choices: [
      { key: "A", text: "Cyberattack" },
      { key: "B", text: "Human error" },
      { key: "C", text: "Hardware failure" },
      { key: "D", text: "Software bug" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 28,
    question: "YAML document separator?",
    choices: [
      { key: "A", text: "///" },
      { key: "B", text: "---" },
      { key: "C", text: "###" },
      { key: "D", text: "***" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 29,
    question: "Function vs method?",
    choices: [
      { key: "A", text: "Same" },
      { key: "B", text: "Methods belong to objects" },
      { key: "C", text: "Functions use classes" },
      { key: "D", text: "Methods standalone" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 30,
    question: "Git init does?",
    choices: [
      { key: "A", text: "Clone repo" },
      { key: "B", text: "Create repo" },
      { key: "C", text: "Push code" },
      { key: "D", text: "Pull code" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 31,
    question: "Lean prioritizes?",
    choices: [
      { key: "A", text: "Speed" },
      { key: "B", text: "Customer value" },
      { key: "C", text: "Documentation" },
      { key: "D", text: "Testing" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 32,
    question: "YAML separator?",
    choices: [
      { key: "A", text: ":" },
      { key: "B", text: ";" },
      { key: "C", text: "/" },
      { key: "D", text: "_" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 33,
    question: "Compare files in Git?",
    choices: [
      { key: "A", text: "git diff" },
      { key: "B", text: "git log" },
      { key: "C", text: "git pull" },
      { key: "D", text: "git add" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 34,
    question: "UCS purpose?",
    choices: [
      { key: "A", text: "Routing" },
      { key: "B", text: "Server mgmt" },
      { key: "C", text: "Switching" },
      { key: "D", text: "Security" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 35,
    question: "Webex API user lookup?",
    choices: [
      { key: "A", text: "Email" },
      { key: "B", text: "Person ID" },
      { key: "C", text: "Name" },
      { key: "D", text: "Org" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 36,
    question: "NETCONF Python library?",
    choices: [
      { key: "A", text: "ncclient" },
      { key: "B", text: "pip" },
      { key: "C", text: "json" },
      { key: "D", text: "rest" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 51,
    question: "Port 443?",
    choices: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "HTTPS" },
      { key: "C", text: "FTP" },
      { key: "D", text: "DNS" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 52,
    question: "Data plane function?",
    choices: [
      { key: "A", text: "Routing" },
      { key: "B", text: "Forwarding packets" },
      { key: "C", text: "Monitoring" },
      { key: "D", text: "Config" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 53,
    question: "Dockerfile is used to?",
    choices: [
      { key: "A", text: "Run containers" },
      { key: "B", text: "Build images" },
      { key: "C", text: "Monitor containers" },
      { key: "D", text: "Store data" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 54,
    question: "VM characteristics?",
    choices: [
      { key: "A", text: "Guest OS" },
      { key: "B", text: "Hypervisor" },
      { key: "C", text: "Self-contained" },
      { key: "D", text: "Shares OS" }
    ],
    answers: ["A", "B", "C"]
  },
  {
    sourceNumber: 55,
    question: "Staging environment?",
    choices: [
      { key: "A", text: "Realistic" },
      { key: "B", text: "Production use" },
      { key: "C", text: "Testing" },
      { key: "D", text: "User access" }
    ],
    answers: ["A", "C"]
  },
  {
    sourceNumber: 56,
    question: "Jenkins run pipeline?",
    choices: [
      { key: "A", text: "Build Now" },
      { key: "B", text: "Configure" },
      { key: "C", text: "Workspace" },
      { key: "D", text: "Changes" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 57,
    question: "Password salting?",
    choices: [
      { key: "A", text: "Encrypt" },
      { key: "B", text: "Randomize hash" },
      { key: "C", text: "Validate" },
      { key: "D", text: "Store" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 58,
    question: "Self-service IT?",
    choices: [
      { key: "A", text: "Manual setup" },
      { key: "B", text: "Automated provisioning" },
      { key: "C", text: "Hardware config" },
      { key: "D", text: "Monitoring" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 59,
    question: "Orchestration means?",
    choices: [
      { key: "A", text: "Provision hardware" },
      { key: "B", text: "Automate workflows" },
      { key: "C", text: "Monitor systems" },
      { key: "D", text: "Deploy code" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 60,
    question: "Read-only automation?",
    choices: [
      { key: "A", text: "Configure" },
      { key: "B", text: "Audit only" },
      { key: "C", text: "Deploy" },
      { key: "D", text: "Delete" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 61,
    question: "SSL warning cause?",
    choices: [
      { key: "A", text: "Expired cert" },
      { key: "B", text: "Self-signed cert" },
      { key: "C", text: "No encryption" },
      { key: "D", text: "Weak key" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 62,
    question: "API benefit?",
    choices: [
      { key: "A", text: "Faster CPU" },
      { key: "B", text: "Automation" },
      { key: "C", text: "Storage" },
      { key: "D", text: "Hardware" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 63,
    question: "DNS port?",
    choices: [
      { key: "A", text: "80" },
      { key: "B", text: "443" },
      { key: "C", text: "53" },
      { key: "D", text: "22" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 64,
    question: "Traceroute does?",
    choices: [
      { key: "A", text: "Ping" },
      { key: "B", text: "Show path" },
      { key: "C", text: "DNS lookup" },
      { key: "D", text: "Route config" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 65,
    question: "HTTP update methods?",
    choices: [
      { key: "A", text: "POST" },
      { key: "B", text: "GET" },
      { key: "C", text: "PUT/PATCH" },
      { key: "D", text: "DELETE" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 66,
    question: "HTTP 4xx?",
    choices: [
      { key: "A", text: "Success" },
      { key: "B", text: "Server error" },
      { key: "C", text: "Client error" },
      { key: "D", text: "Redirect" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 67,
    question: "Webhook requirement?",
    choices: [
      { key: "A", text: "Always running" },
      { key: "B", text: "Registered URL" },
      { key: "C", text: "SSH required" },
      { key: "D", text: "DNS required" }
    ],
    answers: ["A", "B"]
  },
  {
    sourceNumber: 68,
    question: "HTTP 202?",
    choices: [
      { key: "A", text: "Success" },
      { key: "B", text: "Accepted processing" },
      { key: "C", text: "Error" },
      { key: "D", text: "Redirect" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 69,
    question: "Stateless app?",
    choices: [
      { key: "A", text: "Scalable" },
      { key: "B", text: "No memory" },
      { key: "C", text: "External DB" },
      { key: "D", text: "Fixed" }
    ],
    answers: ["A", "C"]
  },
  {
    sourceNumber: 70,
    question: "CI characteristic?",
    choices: [
      { key: "A", text: "Deploy to prod" },
      { key: "B", text: "Merge frequently" },
      { key: "C", text: "Manual test" },
      { key: "D", text: "Slow dev" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 71,
    question: "Waterfall?",
    choices: [
      { key: "A", text: "Iterative" },
      { key: "B", text: "Sequential" },
      { key: "C", text: "Agile" },
      { key: "D", text: "Fast" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 72,
    question: "Deployment phase?",
    choices: [
      { key: "A", text: "Code" },
      { key: "B", text: "Install prod" },
      { key: "C", text: "Test" },
      { key: "D", text: "Design" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 73,
    question: "Python private variable?",
    choices: [
      { key: "A", text: "_var" },
      { key: "B", text: "__var" },
      { key: "C", text: "var" },
      { key: "D", text: "#var" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 74,
    question: "Port 80?",
    choices: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "HTTPS" },
      { key: "C", text: "SSH" },
      { key: "D", text: "FTP" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 75,
    question: "Webex xAPI protocols?",
    choices: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "Telnet" },
      { key: "C", text: "RS-232" },
      { key: "D", text: "FTP" }
    ],
    answers: ["A", "B", "C"]
  },
  {
    sourceNumber: 76,
    question: "Webex API message?",
    choices: [
      { key: "A", text: "GET" },
      { key: "B", text: "POST" },
      { key: "C", text: "PUT" },
      { key: "D", text: "PATCH" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 77,
    question: "Invalid subnet?",
    choices: [
      { key: "A", text: "/26 overlap" },
      { key: "B", text: "/27 error" },
      { key: "C", text: "Overlapping range" },
      { key: "D", text: "Valid" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 78,
    question: "Stateful firewall?",
    choices: [
      { key: "A", text: "Tracks sessions" },
      { key: "B", text: "Only L3" },
      { key: "C", text: "NAT" },
      { key: "D", text: "DNS" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 79,
    question: "Lean characteristic?",
    choices: [
      { key: "A", text: "Sequential" },
      { key: "B", text: "Optimize flow" },
      { key: "C", text: "Waterfall" },
      { key: "D", text: "Fixed" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 80,
    question: "Valid URI?",
    choices: [
      { key: "A", text: "Proper encoding" },
      { key: "B", text: "Invalid" },
      { key: "C", text: "Missing key" },
      { key: "D", text: "Wrong format" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 81,
    question: "REST constraint?",
    choices: [
      { key: "A", text: "Stateful" },
      { key: "B", text: "Stateless" },
      { key: "C", text: "Local" },
      { key: "D", text: "Static" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 82,
    question: "DNS port?",
    choices: [
      { key: "A", text: "21" },
      { key: "B", text: "53" },
      { key: "C", text: "80" },
      { key: "D", text: "22" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 83,
    question: "Dynamic NAT?",
    choices: [
      { key: "A", text: "Static mapping" },
      { key: "B", text: "Dynamic mapping" },
      { key: "C", text: "DNS" },
      { key: "D", text: "DHCP" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 84,
    question: "Port 830?",
    choices: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "NETCONF" },
      { key: "C", text: "SSH" },
      { key: "D", text: "FTP" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 85,
    question: "Webex macro language?",
    choices: [
      { key: "A", text: "Python" },
      { key: "B", text: "Java" },
      { key: "C", text: "JavaScript" },
      { key: "D", text: "C++" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 86,
    question: "SDN platform (Nexus)?",
    choices: [
      { key: "A", text: "ACI" },
      { key: "B", text: "IOS" },
      { key: "C", text: "CLI" },
      { key: "D", text: "UCS" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 87,
    question: "Python venv command?",
    choices: [
      { key: "A", text: "Install" },
      { key: "B", text: "Create env" },
      { key: "C", text: "Run" },
      { key: "D", text: "Delete" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 88,
    question: "SSH is used by?",
    choices: [
      { key: "A", text: "Ansible" },
      { key: "B", text: "Docker" },
      { key: "C", text: "REST" },
      { key: "D", text: "SNMP" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 89,
    question: "NAT process?",
    choices: [
      { key: "A", text: "Translate IP" },
      { key: "B", text: "Route" },
      { key: "C", text: "Encrypt" },
      { key: "D", text: "Filter" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 90,
    question: "Control plane?",
    choices: [
      { key: "A", text: "Forward" },
      { key: "B", text: "Routing logic" },
      { key: "C", text: "Monitor" },
      { key: "D", text: "CLI" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 91,
    question: "TCP/IP layer for ports?",
    choices: [
      { key: "A", text: "Network" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Physical" },
      { key: "D", text: "Session" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 92,
    question: "Cisco ISE function?",
    choices: [
      { key: "A", text: "Routing" },
      { key: "B", text: "Identity control" },
      { key: "C", text: "Switching" },
      { key: "D", text: "Storage" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 93,
    question: "DHCP ACK?",
    choices: [
      { key: "A", text: "Offer" },
      { key: "B", text: "Confirm lease" },
      { key: "C", text: "Request" },
      { key: "D", text: "Discover" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 94,
    question: "MapQuest URI component?",
    choices: [
      { key: "A", text: "Path" },
      { key: "B", text: "Query" },
      { key: "C", text: "Scheme" },
      { key: "D", text: "Authority" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 95,
    question: "Management plane?",
    choices: [
      { key: "A", text: "Forward" },
      { key: "B", text: "Monitor" },
      { key: "C", text: "Route" },
      { key: "D", text: "Encrypt" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 96,
    question: "RESTCONF formats?",
    choices: [
      { key: "A", text: "JSON/XML" },
      { key: "B", text: "CSV" },
      { key: "C", text: "TXT" },
      { key: "D", text: "HTML" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 97,
    question: "Switching method?",
    choices: [
      { key: "A", text: "Store-forward" },
      { key: "B", text: "Cut-through" },
      { key: "C", text: "Both" },
      { key: "D", text: "Routing" }
    ],
    answers: ["C"]
  },
  {
    sourceNumber: 98,
    question: "Social engineering example?",
    choices: [
      { key: "A", text: "Phishing" },
      { key: "B", text: "Survey imitation" },
      { key: "C", text: "Password attack" },
      { key: "D", text: "Virus" }
    ],
    answers: ["B"]
  },
  {
    sourceNumber: 99,
    question: "SQL defense last resort?",
    choices: [
      { key: "A", text: "Escaping input" },
      { key: "B", text: "Parameterized queries" },
      { key: "C", text: "Firewall" },
      { key: "D", text: "Validation" }
    ],
    answers: ["A"]
  },
  {
    sourceNumber: 100,
    question: "Container orchestration?",
    choices: [
      { key: "A", text: "Docker" },
      { key: "B", text: "Kubernetes" },
      { key: "C", text: "Git" },
      { key: "D", text: "API" }
    ],
    answers: ["B"]
  }
];
