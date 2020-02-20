#!/bin/sh

set -e

echo "========== Setting up Hooks =========="

echo "Precommit hook =>"
touch ../.git/hooks/pre-commit
ln -s -f ../git_hooks/pre-commit.sh ../.git/hooks/pre-commit

echo "========== Setup completed =========="
