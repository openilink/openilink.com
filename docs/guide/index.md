# Guide

OpenILink is organized as a small ecosystem instead of a single monolith. The website acts as the front door, while the SDK repositories focus on implementation details for each runtime.

## Core Model

At the center is a bot-oriented workflow:

1. Authenticate and establish a usable session.
2. Receive inbound messages through long polling.
3. Respond with outbound messages and status updates.
4. Cache context tokens for proactive follow-up.
5. Layer additional tooling on top of the same transport primitives.

## Site Structure

This site is intentionally split into a few clear sections:

- `/guide/` for concepts and orientation
- `/sdk/` for runtime packages
- `/roadmap` for forward-looking direction
- `/community` for repositories and collaboration paths

## Implementation Philosophy

OpenILink favors a narrow starting surface:

- Keep SDK APIs aligned across languages.
- Prefer obvious request and response shapes over excessive abstraction.
- Ship examples that map directly to real usage.
- Make documentation easy to extend as the ecosystem grows.

## Next Step

If you want to start coding, go straight to [SDK Overview](/sdk/).
