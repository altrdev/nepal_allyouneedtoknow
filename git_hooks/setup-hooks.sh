#!/bin/sh

set -e

echo "========== Setting up Hooks =========="

echo "Precommit hook =>"
cp pre-commit.sh ../.git/hooks/pre-commit
chmod +x ../.git/hooks/pre-commit

echo "========== Setup completed =========="
