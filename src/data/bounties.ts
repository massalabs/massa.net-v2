export const openBounties = [
  {
    id: "gaming-bounty",
    title: "Gaming Bounty",
    description: "We are looking for developers to create games that can leverage technologies such as ASC and DeWeb. We are not enforcing any specific type of game, but certain examples such as strategy games are preferred. One example could be a game similar to OGame—a space-themed MMO where players build fleets, manage resources, and conquer the galaxy—but built on Massa's tech stack. The game should integrate Autonomous Smart Contracts (ASC) to enable decentralized, self-executing game logic without constant user intervention, and leverage DeWeb for hosting core game components directly on-chain. The goal is to deliver a scalable game that can be gradually grown, while showcasing Massa's technology.",
    status: "open",
    amount: "250.000 MAS",
    details: "",
  },
  {
    id: "full-on-chain-chat",
    title: "Full On-Chain Chat",
    description: "The Chat allows Massa users to send private messages to each other. Registration is done with a user-defined password, used by the frontend to derive a private and public key, and to store the public key in the smart contract data. To send a message, the frontend encrypts the message with the public key associated with the receiver. To open a message, the receiver decrypts the message with its private key. The passwords and key derivation must be hard to brute-force (e.g. using pbkdf2).",
    status: "1 team working on it",
    amount: "150.000 MAS",
    details: "The dApp must be fully on-chain: using a frontend hosted on Massa blockchain with the decentralized DNS. Frontend and smart contracts must be open-source with MIT License. A tutorial explaining the concept and the code must be crafted, with the objective to go on https://docs.massa.net/docs/tutorial/home",
  }
]

export const completedBounties = [
  {
    id: "lending-borrowing",
    title: "Lending Borrowing",
    description: "Massa L&B is a Lending & Borrowing Protocols on Massa Network, offering all of the necessary smart contracts, along with the documentation to allow developers to launch their own Lending & Borrowing Protocol",
    status: "Completed",
    amount: "",
    details: "",
    github: "https://github.com/Dar-Blockchain/lebleb_massa_landing_protocol",
  },
  {
    id: "massa-mobile-wallet",
    title: "Massa Mobile Wallet",
    description: "Massa Mobile Wallet is the first Massa Wallet available on Mobile devices. It allows users to create wallets, send and receive tokens, swap on Dusa and more to come in the future. The wallet is open-source and free for other users to optimize and play with.",
    status: "Completed",
    amount: "",
    details: "",
    github: "https://github.com/nafsilabs/mug",
  },
  {
    id: "on-chain-social-media",
    title: "On-chain Social Media Network",
    description: "MassaBook is a fully on-chain Social Media Network, allowing users to connect with their Massa Wallet, create a profile, small posts and like and comment on other content. The dApp is fully on-chain, and open-source, allowing any other developer to fork it to their liking and improve it.",
    status: "Completed",
    amount: "",
    details: "",
    link: "https://massabooks.massa-deweb.xyz",
    github: "https://github.com/Dar-Blockchain/Decentralized_Massa_Book_contracts",
    githubFrontend: "https://github.com/Dar-Blockchain/massabook",
  },
  {
    id: "full-on-chain-media",
    title: "Full On-Chain Media",
    description: "MassaBlogs is a Decentralized Media Publishing Platform, where authors can publish their articles in a censorship-resistant way. Authors can create and customize a profile, write and edit articles, and add tags for easy filtering for readers. The dApp is fully hosted on DeWeb, ensuring the freedom of speech of the authors. The frontend and SCs are open-sourced, allowing anyone to take advantage of them.",
    status: "Completed",
    amount: "",
    details: "",
    link: "https://massablog.massa-deweb.xyz",
    github: "https://github.com/Dar-Blockchain/massa-blog-sc",
    githubFrontend: "https://github.com/Dar-Blockchain/massa-blog",
  },
  {
    id: "uniswap-v2-like",
    title: "Uniswap v2 like",
    description: "EagleFi is a UniSwap V2-like decentralized exchange reimagined for Massa Network. On EagleFi users can Swap Tokens, Provide Liquidity, Earn Fees, Track Massa Tokens through EagleMarketCap and they can create and launch their own tokens easily through a no-code interface.",
    status: "Completed",
    amount: "",
    details: "",
    link: "https://www.eaglefi.io/",
    github: "https://github.com/NaDasai/eagle-finance",
  }
]
