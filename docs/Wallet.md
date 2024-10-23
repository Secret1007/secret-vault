![Alt text](/wallet.png)

## BIP

BIP（Bitcoin Improvement Proposal，比特币改进提案）是一种标准化流程，用于提出和讨论比特币协议的改进。BIP 为开发者和社区提供了一个渠道，来提出比特币网络的新功能、优化或者更改。它的目的是使比特币的进化更加透明和协作。

BIP (Bitcoin Improvement Proposal) is a standardized process used to propose and discuss improvements to the Bitcoin protocol. It gives developers and the community a way to suggest new features, optimizations, or changes to the Bitcoin network, with the aim of making Bitcoin’s evolution more transparent and collaborative.

### BIP32

定义了分层确定性（Hierarchical Deterministic, HD）钱包的标准。这种钱包允许从一个主密钥（master key）生成多个子密钥（child keys），方便用户管理多个地址和私钥，同时只需备份一个主密钥。这为加密货币钱包带来了更高的安全性和灵活性。

It defines the structure of HD wallets, allowing a master key to generate multiple child keys, which simplifies key management while ensuring security.

### BIP39

解决了私钥管理的复杂性。BIP-39 定义了通过一组助记词（mnemonic phrases）生成私钥的规则，使用户可以更容易地备份和恢复钱包。它将复杂的私钥表示为易记的单词列表，简化了用户对私钥的管理。

BIP-39 builds on BIP-32 by introducing a way to generate private keys using a mnemonic phrase,making key backup and recovery much easier.

### HDNode

- HDNode 使用树状结构，每个节点都可以生成多个子节点。通过指定路径，可以轻松访问特定的子密钥。
- 例如，m/0'/0'/0' 表示第一个主分支下的第一个子分支下的第一个子节点。

### 路径表示法

路径表示法中，m 表示主密钥，后面的数字表示分支和子分支。路径中的数字后加上 ' 表示该子密钥是从主密钥派生出的一个硬件派生密钥（hardened derivation），这提供了更高的安全性。
