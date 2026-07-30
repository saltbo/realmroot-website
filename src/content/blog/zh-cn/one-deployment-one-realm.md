---
title: 一个部署，一个 Realm
description: 为什么 Realmroot 选择部署，而不是 Organization 行或 Application 记录，作为身份隔离边界。
publishedAt: 2026-07-18
author: Realmroot
language: zh-CN
---

多租户不是一个单一决策。系统可以拥有 Organization，同时仍然只运行一个身份 Realm；
也可以注册多个 Application，同时继续共享一个用户池。

Realmroot 把边界画在部署上。

## 一个 Realm 会共享什么

一个 Realmroot 部署拥有一套：

- Better Auth 用户池
- Issuer 与签名密钥生命周期
- 管理员界面
- Connector、登录、MFA 与密码策略
- 每个环境独立的数据库、对象存储、队列与 Secret

当多个产品应用有意共享账户与管理员时，它们可以位于同一个 Realm。
每个应用仍然是独立的 OIDC Client，但不是身份孤岛。

## 什么时候应该部署新的 Realm

如果产品需要独立的用户、管理员、Issuer、身份提供商配置、事件响应、
备份或删除生命周期，就应该使用独立部署。

这比在每条身份查询里传递 Tenant 条件更明确，也让运行边界与安全边界保持一致：
独立的 Worker、数据库、存储、域名与 Secret。

Organization 依然是 Realm 内重要的授权与成员关系对象，但它不能替代独立用户池。
