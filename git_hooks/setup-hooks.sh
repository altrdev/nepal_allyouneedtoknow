#!/bin/sh

set -e

echo "========== Setting up Hooks =========="

echo "Setting up precommit hook"
cp pre-commit.sh ../.git/hooks/pre-commit
chmod +x ../.git/hooks/pre-commit

echo "========== Setup completed =========="
