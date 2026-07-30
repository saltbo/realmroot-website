---
title: Agent 身份不是 API Key
description: 持久 Agent 身份、主机凭据与委托 API 权限解决的是不同问题。把它们压缩成一个 Secret 会制造意外权力。
publishedAt: 2026-07-24
author: Realmroot
language: zh-CN
---

API Key 只能回答一个狭窄的问题：这个请求是否持有某个共享 Secret？
它无法解释哪个 Agent 正在行动、谁控制它、哪个主机正在承载它，
以及它为什么拥有当前权限。

对受委托 Agent 来说，这些区别本身就是安全模型。

## 将身份与当前承载者分开

持久 Agent 身份应该能够跨越主机替换与密钥轮换。主机密钥只证明当前承载者，
不应该成为 Agent 的公开身份。

Realmroot 将它们拆成四层：

1. Agent identity 是稳定的 Subject。
2. Host binding 把当前注册与稳定身份关联起来。
3. Enrollment 记录控制者批准的身份关系。
4. Resource grant 记录精确的业务权限。

这样，控制者可以替换受损主机，而无需创建新的公开 Agent 身份，
也不会把原有权限带到一台无关机器上。

## Enrollment 不等于权限

注册或 Enrollment 只建立 Agent 是谁，并不允许它调用控制者能够访问的所有 API。

权限从一项针对单个 API Resource 与精确 scope 集合的请求开始。
对于外部资源，请求还会绑定一个已连接账户。扩大 scope、切换账户或更换资源，
都需要新的决策。

## 令牌应该表达委托关系

批准后，Agent 获得面向受保护资源的短期令牌。令牌以控制者为 Subject，
并在 Actor chain 中携带 Agent 与主机；它还会绑定目标 Audience 与 Agent 的 DPoP 密钥。

受保护 API 可以独立验证令牌，不需要 Realmroot 代理请求。撤销 Grant
则会阻止后续令牌签发。

API Key 在某些集成边界依然有用，但它不能替代完整的身份与权限模型。

