#!/usr/bin/env bash
set -euo pipefail

PROJECT_NAME="devfolio"
DIST_DIR="dist"

BRANCH="${1:-$(git rev-parse --abbrev-ref HEAD)}"

echo "Building..."
bun run build

echo "Deploying to Cloudflare Pages (project: ${PROJECT_NAME}, branch: ${BRANCH})..."
bunx wrangler pages deploy "${DIST_DIR}" --project-name "${PROJECT_NAME}" --branch "${BRANCH}"
