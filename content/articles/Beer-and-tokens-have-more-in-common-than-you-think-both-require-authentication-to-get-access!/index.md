---
title: 'Beer and tokens have more in common than you think: both require authentication to get access!'
description: "Ever wonder how authentication tokens work for APIs? Just like a bartender checking your ID before serving you a beer, APIs require authentication too. In this post, we'll explore the difference between basic and bearer tokens, and how they can help secure your API requests."
date: '2023-03-10'
banner:
  src: '../../images/server.jpg'
  alt: 'First Markdown Post'
  caption: 'Photo by <u><a href="https://unsplash.com/photos/40XgDxBfYXM">Jordan Harrison</a></u>'
categories:
  - 'Authentication'
  - 'API Development'
  - 'Security'
  - 'Web Development'
  - 'Cloud Architecture'
keywords:
  - 'API authentication'
  - 'Basic token'
  - 'Bearer token'
  - 'Token-based authentication'
  - 'Microservices'
---

## What is a Proxy?

imagine you're at a bar and you want to buy a beer. You go up to the bartender and ask for a cold one. The bartender asks you for your ID to make sure you're old enough to drink, and you show them your driver's license.

In this analogy, your driver's license is like a basic token. It contains your personal information, including your name and birthdate, and you use it to prove your identity to the bartender. The bartender checks your ID and grants you access to the beer because you've shown that you're authorized to purchase alcohol.

Now let's say instead of using your driver's license, you have a special wristband that you got when you entered the bar. This wristband lets you buy drinks without having to show your ID every time. It's like a secret code that only you and the bartender know, and as long as you have the wristband, you can buy beers all night.

In this analogy, the wristband is like a bearer token. It's a special code that lets you access the bar's resources (in this case, beer) without having to provide your personal information every time. The bartender checks the code on your wristband and grants you access to the beer because you've shown that you're authorized to purchase drinks.

So, in summary, a basic token is like showing your ID to prove your identity, while a bearer token is like having a secret code (wristband) that gives you access to resources (beer) without having to show your ID every time.

## Going back to the office

A basic token and a bearer token are two different types of access tokens that are used to authenticate and authorize API requests. The main difference between these two tokens is the way they are transmitted and verified.

A basic token is a type of access token that is transmitted as part of the HTTP Authorization header in an API request. The basic token consists of a username and password that are encoded in Base64 format and separated by a colon. The server that receives the request decodes the token, verifies the username and password, and grants access to the API resource if the credentials are valid.

A bearer token, on the other hand, is a type of access token that is transmitted in the HTTP Authorization header without any additional encoding or hashing. The bearer token consists of a randomly generated string that is issued by the API server when the user logs in or creates an account. The server verifies the token by checking its signature and expiration time, and grants access to the API resource if the token is valid.

One of the main benefits of using a bearer token is that it does not require the client to transmit sensitive authentication information, such as a username and password, with every request. Instead, the client only needs to transmit the bearer token, which can be easily revoked or invalidated by the server if it is compromised or no longer needed.

In summary, the main difference between a basic token and a bgitearer token is the way they are transmitted and verified. While a basic token requires the transmission of sensitive authentication information, a bearer token provides a more secure and efficient way to authenticate API requests.

Source of investigation: <a href="https://stackoverflow.com/questions/34013299/web-api-authentication-basic-vs-bearer" target="_blank">stackoverflow</a>
