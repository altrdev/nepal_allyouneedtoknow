#!/bin/sh

set -e

echo "========== Update Submodules =========="

git submodule update --init --recursive

echo "========== Update Submodules OK =========="
